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
  return input.trim().replace(/[<>]/g, '');
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP
    const forwardedFor = request.headers.get('x-forwarded-for');
    const ip = forwardedFor ? forwardedFor.split(',')[0].trim() : 'unknown';

    if (ip !== 'unknown' && !checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many submissions. Please try again later.' },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, email, subject, message, honeypot } = body;

    // Honeypot check
    if (honeypot) {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    // Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required.' },
        { status: 400 }
      );
    }

    const sanitizedName = sanitize(name);
    const sanitizedEmail = sanitize(email);
    const sanitizedSubject = sanitize(subject);
    const sanitizedMessage = sanitize(message);

    if (sanitizedName.length < 2) {
      return NextResponse.json(
        { error: 'Name must be at least 2 characters.' },
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
        <p><strong>Name:</strong> ${sanitizedName}</p>
        <p><strong>Email:</strong> ${sanitizedEmail}</p>
        <p><strong>Subject:</strong> ${sanitizedSubject}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-line;">${sanitizedMessage.replace(/\n/g, '<br />')}</p>
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
