import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./styles/globals.css";
import StructuredData from "@/components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rifan Nurfakhri - Fullstack Web Developer | Portfolio",
  description: "Rifan Nurfakhri is a Fullstack Web Developer specializing in PHP, JavaScript, Laravel, and Next.js. Graduate of Telkom University Purwokerto with experience in front-end and back-end development.",
  keywords: [
    "Rifan Nurfakhri",
    "Fullstack Developer",
    "Web Developer",
    "Laravel Developer",
    "Next.js Developer",
    "React Developer",
    "PHP Developer",
    "JavaScript Developer",
    "Telkom University Purwokerto",
    "Indonesia Developer",
    "Portfolio"
  ],
  authors: [{ name: "Rifan Nurfakhri" }],
  creator: "Rifan Nurfakhri",
  publisher: "Rifan Nurfakhri",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rifanfakhri.vercel.app",
    title: "Rifan Nurfakhri - Fullstack Web Developer",
    description: "Professional Fullstack Web Developer specializing in modern web technologies. View my portfolio and experience.",
    siteName: "Rifan Nurfakhri Portfolio",
    images: [
      {
        url: "/rifan.jpg", // Ganti dengan path foto Anda
        width: 1200,
        height: 630,
        alt: "Rifan Nurfakhri - Fullstack Web Developer"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Rifan Nurfakhri - Fullstack Web Developer",
    description: "Professional Fullstack Web Developer specializing in modern web technologies.",
    images: ["/rifan.jpg"]
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
  verification: {
    google: "your-google-verification-code", // Nanti akan kita isi dari Google Search Console
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
