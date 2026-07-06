import type { Metadata } from "next";

import ResumeView from "@/components/resume/ResumeView";
import ResumePrintDocument from "@/components/resume/ResumePrintDocument";

export const metadata: Metadata = {
  title: "Resume | Mohammed Thoufiq — Java Backend Engineer",
  description:
    "Interactive resume of Mohammed Thoufiq — Java Backend Engineer with 4 years of experience in Spring Boot microservices, event-driven architecture, and cloud platforms.",
};

export default function ResumePage() {
  return (
    <>
      {/* Interactive, animated experience (hidden when printing) */}
      <ResumeView />

      {/* ATS-friendly document (hidden on screen, shown when printing) */}
      <ResumePrintDocument />
    </>
  );
}
