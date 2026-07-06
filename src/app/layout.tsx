import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import ScrollProgress from "@/components/animations/ScrollProgress";

import CursorGlow from "@/components/animations/CursorGlow";

export const metadata: Metadata = {
  title: "Mohammed Thoufiq | Java Backend Engineer",

  description:
    "Java Backend Engineer specializing in Spring Boot, Kafka, Microservices, AWS, Azure, and scalable distributed systems.",

  keywords: [
    "Java Backend Engineer",
    "Spring Boot",
    "Kafka",
    "Microservices",
    "AWS",
    "Azure",
    "Backend Developer",
    "Distributed Systems",
    "SQL Server",
  ],

  authors: [
    {
      name: "Mohammed Thoufiq",
    },
  ],

  openGraph: {
    title:
      "Mohammed Thoufiq | Java Backend Engineer",

    description:
      "Building scalable backend systems using Java, Spring Boot, Kafka, and Microservices.",

    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Set the theme before paint to avoid a flash of the wrong mode.
            Defaults to dark; honors a stored choice, then system preference. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':!window.matchMedia('(prefers-color-scheme: light)').matches;var e=document.documentElement;e.classList.toggle('dark',d);e.style.colorScheme=d?'dark':'light';}catch(e){document.documentElement.classList.add('dark');}})();`,
          }}
        />
      </head>
      <body className="bg-page text-body">

        <ScrollProgress />

        <CursorGlow />

        <Navbar />

        {children}

        <Footer />

      </body>
    </html>
  );
}