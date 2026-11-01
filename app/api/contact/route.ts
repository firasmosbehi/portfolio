import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Lazy Resend initialization
function getResend() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return null;
  return new Resend(apiKey);
}

// Simple in-memory rate limiter (per IP)
const rateLimits = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 3; // max submissions per hour
const RATE_WINDOW_MS = 60 * 60 * 1000;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimits.get(ip);

  if (!record || now > record.resetAt) {
    rateLimits.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return true;
  }

  if (record.count >= RATE_LIMIT) {
    return false;
  }

  record.count += 1;
  return true;
}

function sanitize(input: string): string {
  return input.trim();
}

// Entity-encode for the HTML email body (stripping <> mangled legit messages)
function escapeHtml(input: string): string {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: NextRequest) {
  try {
    // Right-most X-Forwarded-For entry is the one our proxy added; the left-most is client-controlled.
    // ponytail: per-instance in-memory limit; add a Vercel Firewall rule on /api/contact if spam shows up
    const forwardedFor = request.headers.get('x-forwarded-for');
    const ip = request.headers.get('x-real-ip') ?? forwardedFor?.split(',').pop()?.trim() ?? 'unknown';

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many submissions. Please try again later.' },
        { status: 429 }
      );
    }

    const body = await request.json().catch(() => null);
    if (!body || typeof body !== 'object') {
      return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
    }
    const { name, email, subject, message, honeypot } = body;

    // Honeypot check
    if (honeypot) {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    // Validation
    if ([name, email, subject, message].some((v) => typeof v !== 'string' || !v)) {
      return NextResponse.json(
        { error: 'All fields are required.' },
        { status: 400 }
      );
    }

    const sanitizedName = sanitize(name).replace(/[\r\n]+/g, ' ');
    const sanitizedEmail = sanitize(email);
    const sanitizedSubject = sanitize(subject);
    const sanitizedMessage = sanitize(message);

    if (sanitizedName.length < 2) {
      return NextResponse.json(
        { error: 'Name must be at least 2 characters.' },
        { status: 400 }
      );
    }

    if (sanitizedName.length > 100 || sanitizedEmail.length > 254) {
      return NextResponse.json(
        { error: 'Name or email is too long.' },
        { status: 400 }
      );
    }

    if (!isValidEmail(sanitizedEmail)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    if (sanitizedMessage.length < 10) {
      return NextResponse.json(
        { error: 'Message must be at least 10 characters.' },
        { status: 400 }
      );
    }

    if (sanitizedMessage.length > 5000) {
      return NextResponse.json(
        { error: 'Message must be less than 5000 characters.' },
        { status: 400 }
      );
    }

    const validSubjects = ['Job Opportunity', 'Collaboration', 'Consulting', 'Other'];
    if (!validSubjects.includes(sanitizedSubject)) {
      return NextResponse.json(
        { error: 'Invalid subject selection.' },
        { status: 400 }
      );
    }

    // Check if Resend is configured
    const resend = getResend();
    if (!resend) {
      return NextResponse.json(
        { error: 'Email service is not configured.' },
        { status: 503 }
      );
    }

    // Send email
    const { error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'firas.mosbehi@insat.ucar.tn',
      replyTo: sanitizedEmail,
      subject: `[Portfolio] ${sanitizedSubject} from ${sanitizedName}`,
      text: `Name: ${sanitizedName}\nEmail: ${sanitizedEmail}\nSubject: ${sanitizedSubject}\n\nMessage:\n${sanitizedMessage}`,
      html: `
        <h2>New message from portfolio</h2>
        <p><strong>Name:</strong> ${escapeHtml(sanitizedName)}</p>
        <p><strong>Email:</strong> ${escapeHtml(sanitizedEmail)}</p>
        <p><strong>Subject:</strong> ${escapeHtml(sanitizedSubject)}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-line;">${escapeHtml(sanitizedMessage).replace(/\n/g, '<br />')}</p>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email. Please try again later.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error('Contact form error:', err);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again later.' },
      { status: 500 }
    );
  }
}
