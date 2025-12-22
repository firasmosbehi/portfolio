import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "./components/LayoutWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
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
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
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
  },
  verification: {
    google: "google-site-verification-code-here",
  },
  category: "technology",
};

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
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
