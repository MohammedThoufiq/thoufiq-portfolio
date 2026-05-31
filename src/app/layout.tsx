import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

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
    <html lang="en">
      <body className="bg-black text-white">

        <Navbar />

        {children}

        <Footer />

      </body>
    </html>
  );
}