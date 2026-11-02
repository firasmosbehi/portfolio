import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { SITE_URL } from "../lib/seo";
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
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f7f4" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0d10" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Firas Mosbehi - DevSecOps Engineer | Kubernetes & AWS Expert",
    template: "%s | Firas Mosbehi - DevSecOps Engineer"
  },
  description: "DevSecOps Engineer specializing in Kubernetes, AWS, CI/CD pipelines, Infrastructure as Code (Terraform, Ansible), and container orchestration. 3+ years of experience in cloud automation and DevOps best practices.",
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
  authors: [{ name: "Firas Mosbehi", url: SITE_URL }],
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
    url: "/",
    title: "Firas Mosbehi - DevSecOps Engineer | Kubernetes & AWS Expert",
    description: "DevSecOps Engineer specializing in Kubernetes, AWS, CI/CD pipelines, and Infrastructure as Code. Expert in cloud automation and container orchestration.",
    siteName: "Firas Mosbehi Portfolio",
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: "/",
    types: {
      'application/rss+xml': '/feed.xml',
    },
  },
  verification: {
    google: "dWRISc3-7YweJASb5n2ijKWi2bbmaLQDIOk4hI22_O8",
  },
  category: "technology",
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
  const person = {
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    "name": "Firas Mosbehi",
    "jobTitle": "DevSecOps Engineer",
    "description": "DevSecOps Engineer specializing in Kubernetes, AWS, CI/CD pipelines, Infrastructure as Code (Terraform, Ansible), and container orchestration.",
    "url": SITE_URL,
    "sameAs": ["https://github.com/firasmosbehi", "https://linkedin.com/in/firasmosbehi"],
    "email": "firas.mosbehi@insat.ucar.tn",
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

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      person,
      { "@type": "WebSite", "@id": `${SITE_URL}/#website`, name: "Firas Mosbehi", url: SITE_URL, publisher: { "@id": `${SITE_URL}/#person` } },
    ],
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
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
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
