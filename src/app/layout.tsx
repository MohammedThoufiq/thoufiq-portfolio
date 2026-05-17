import type { Metadata } from "next";
import "./globals.css";

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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}