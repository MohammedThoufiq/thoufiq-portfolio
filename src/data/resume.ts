// Résumé source of truth for the /resume view page and print document.
// Verbatim from the provided résumé — do not invent, exaggerate, or remove
// facts. Experience is imported from experience.ts so the portfolio and the
// résumé page can never drift apart.

import { experiences } from "@/data/experience";

export const profile = {
  name: "Mohammed Thoufiq",
  title:
    "Java Backend Engineer • Microservices • Distributed Systems • Cloud",
  role: "Java Backend Engineer",
  tagline: "Microservices • Distributed Systems • Cloud",
  location: "Chennai, India",
  email: "mohammed.thoufiq.005@gmail.com",
  phone: "+91-9677536883",
  phoneHref: "+919677536883",
  whatsapp: "https://wa.me/919677536883",
  linkedin: "https://www.linkedin.com/in/mohammed-thoufiq-s/",
  linkedinLabel: "linkedin.com/in/mohammed-thoufiq-s",
  github: "https://github.com/MohammedThoufiq",
  githubLabel: "github.com/MohammedThoufiq",
  portfolio: "https://thoufiq-portfolio.vercel.app/",
  portfolioLabel: "thoufiq-portfolio.vercel.app",
} as const;

export const resumePdfPath =
  "/resume/MohammedThoufiq_SoftwareEngineer_Java.pdf";

export const summary =
  "Java Backend Engineer with 4 years of experience designing and delivering enterprise backend applications using Java 21, Spring Boot, Microservices, REST APIs, GraphQL, and Event-Driven Architecture. Built 25 microservices, 11 batch applications, and 80+ APIs supporting insurance and telecommunications platforms processing over 150K requests/hour. Experienced with Azure, AWS, Azure Service Bus, Apache Kafka, Amazon SQS, SQL Server, Redis, Docker, CI/CD, Spring Security, OAuth2, JWT, performance optimization, and Agile software development.";

// Measurable highlights drawn from the summary.
export const highlights = [
  { value: "4", suffix: " yrs", label: "Experience" },
  { value: "25", suffix: "", label: "Microservices" },
  { value: "11", suffix: "", label: "Batch Apps" },
  { value: "80", suffix: "+", label: "REST APIs" },
  { value: "150K", suffix: "+", label: "Requests / Hour" },
] as const;

export const skillGroups = [
  {
    category: "Languages & Frameworks",
    skills: [
      "Java 8–21",
      "SQL",
      "GraphQL",
      "Spring Boot",
      "Spring MVC",
      "Spring Security",
      "JPA & Hibernate",
    ],
  },
  {
    category: "Architecture",
    skills: [
      "Microservices",
      "Distributed Systems",
      "REST APIs",
      "Event-Driven Architecture",
      "Asynchronous Processing",
    ],
  },
  {
    category: "Messaging",
    skills: [
      "Apache Kafka",
      "Azure Service Bus",
      "Amazon SQS",
      "DLQ",
      "Retry Policies",
      "Idempotent Consumers",
    ],
  },
  {
    category: "Cloud",
    skills: [
      "Microsoft Azure",
      "Azure SQL Managed Instance",
      "Managed Identity",
      "AWS",
      "EC2",
      "S3",
      "IAM",
      "CloudWatch",
    ],
  },
  {
    category: "Database",
    skills: [
      "SQL Server",
      "Redis",
      "Query Optimization",
      "Stored Procedures",
      "Indexing",
      "Execution Plans",
    ],
  },
  {
    category: "DevOps",
    skills: [
      "Docker",
      "Git",
      "GitHub",
      "GitHub Actions",
      "Jenkins",
      "Maven",
      "Gradle",
      "CI/CD",
    ],
  },
  {
    category: "Security",
    skills: [
      "OAuth2",
      "JWT",
      "Auth0",
      "RBAC",
      "Authentication",
      "Authorization",
    ],
  },
  {
    category: "Testing",
    skills: ["JUnit 5", "Mockito", "SonarQube"],
  },
  {
    category: "Monitoring",
    skills: ["New Relic", "Grafana", "Prometheus", "Kibana", "Splunk"],
  },
  {
    category: "Practices",
    skills: [
      "SOLID Principles",
      "Design Patterns",
      "Clean Architecture",
      "Agile Scrum",
      "SDLC",
      "Code Reviews",
    ],
  },
] as const;

// Experience is the canonical shared dataset.
export const resumeExperience = experiences;

export const certifications = [
  {
    name: "AWS Certified Developer – Associate (DVA-C02)",
    status: "Pursuing",
  },
] as const;

export const education = [
  {
    degree: "Bachelor of Engineering in Computer Science",
    institution: "Sethu Institute of Technology",
    duration: "2018 – 2022",
    detail: "",
  },
] as const;
