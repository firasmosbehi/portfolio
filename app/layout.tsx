import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import LayoutWrapper from "./components/LayoutWrapper";
import ThemeProvider from "./components/ThemeProvider";
import { CommandPaletteProvider } from "./components/CommandPaletteContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://firasmosbahi.com"),
  title: {
    default: "Firas Mosbehi - DevSecOps Engineer | Kubernetes & AWS Expert",
    template: "%s | Firas Mosbehi - DevSecOps Engineer"
  },
  description: "DevSecOps Engineer specializing in Kubernetes, AWS, CI/CD pipelines, Infrastructure as Code (Terraform, Ansible), and container orchestration. 2+ years experience in cloud automation and DevOps best practices.",
  keywords: [
    "DevSecOps Engineer",
    "DevOps Engineer",
    "Kubernetes Expert",
    "AWS Cloud Engineer",
    "Infrastructure as Code",
    "Terraform",
    "Ansible",
    "CI/CD",
    "Docker",
    "ArgoCD",
    "Cloud Infrastructure",
    "GitOps",
    "Site Reliability Engineering",
    "Container Orchestration",
    "Firas Mosbehi"
  ],
  authors: [{ name: "Firas Mosbehi", url: "https://firasmosbahi.com" }],
  creator: "Firas Mosbehi",
  publisher: "Firas Mosbehi",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://firasmosbahi.com",
    title: "Firas Mosbehi - DevSecOps Engineer | Kubernetes & AWS Expert",
    description: "DevSecOps Engineer specializing in Kubernetes, AWS, CI/CD pipelines, and Infrastructure as Code. Expert in cloud automation and container orchestration.",
    siteName: "Firas Mosbehi Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Firas Mosbehi - DevSecOps Engineer",
    description: "DevSecOps Engineer specializing in Kubernetes, AWS, CI/CD, and Infrastructure as Code",
    creator: "@firasmosbahi",
  },
  alternates: {
    canonical: "https://firasmosbahi.com",
    types: {
      'application/rss+xml': 'https://firasmosbahi.com/feed.xml',
    },
  },
  verification: {
    google: "google-site-verification-code-here",
  },
  category: "technology",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

const themeScript = `
  (function() {
    try {
      var theme = localStorage.getItem('portfolio-theme') || 'system';
      var resolved = theme === 'system'
        ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
        : theme;
      document.documentElement.classList.add(resolved);
      document.documentElement.style.colorScheme = resolved;
    } catch (e) {
      document.documentElement.classList.add('light');
      document.documentElement.style.colorScheme = 'light';
    }
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Firas Mosbehi",
    "jobTitle": "DevSecOps Engineer",
    "description": "DevSecOps Engineer specializing in Kubernetes, AWS, CI/CD pipelines, Infrastructure as Code (Terraform, Ansible), and container orchestration.",
    "url": "https://firasmosbahi.com",
    "email": "firas.mosbehi@insat.ucar.tn",
    "telephone": "+33776118453",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Saint Etienne",
      "addressCountry": "FR"
    },
    "knowsAbout": [
      "Kubernetes",
      "AWS",
      "DevOps",
      "DevSecOps",
      "Infrastructure as Code",
      "Terraform",
      "Ansible",
      "CI/CD",
      "Docker",
      "ArgoCD",
      "Cloud Infrastructure",
      "GitOps",
      "Site Reliability Engineering"
    ],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "National Institute of Applied Sciences and Technology"
    }
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <CommandPaletteProvider>
            <LayoutWrapper>{children}</LayoutWrapper>
          </CommandPaletteProvider>
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
