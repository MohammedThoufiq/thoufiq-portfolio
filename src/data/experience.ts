// Canonical experience data — the single source of truth shared by the
// portfolio Experience cards and the résumé view (resume.ts re-reads this).
// Content is verbatim from the résumé; `summary`/`metric` are neutral
// one-line derivations of the bullets for the compact card layer.

export const experiences = [
  {
    id: 1,

    company: "Cognizant Technology Solutions",
    client: "Client: National Life Insurance (USA)",
    role: "Software Engineer",
    duration: "Sep 2024 – Present",
    location: "Chennai, India",

    // Level 1 (compact card)
    summary:
      "Cloud-native insurance backend platforms — microservices, event-driven services, and secure high-throughput APIs.",
    metric: "150K+ requests/hour • 25 microservices",
    techStack: [
      "Java 21",
      "Spring Boot",
      "Azure Service Bus",
      "Redis",
      "OAuth2",
      "Docker",
    ],

    // Level 2 (detail)
    highlights: [
      "Delivered 25 Spring Boot microservices, 11 batch applications, and 80+ REST APIs supporting enterprise insurance workflows.",
      "Engineered event-driven backend services using Azure Service Bus with resilient messaging, retry policies, scheduled processing, DLQ, and idempotent consumers.",
      "Optimized applications handling 150K+ requests/hour through SQL tuning, Redis caching, indexing, multithreading, and JVM performance improvements.",
      "Built secure backend services using Spring Security, OAuth2, JWT, Auth0, RBAC, and Azure Managed Identity.",
      "Modernized legacy .NET/VBScript solutions into Java 21 Spring Boot microservices while automating delivery through Docker and CI/CD.",
    ],
  },

  {
    id: 2,

    company: "Cognizant Technology Solutions",
    client: "Clients: Comcast (USA), Verizon (USA), 3M (USA)",
    role: "Jr. Software Engineer",
    duration: "Jan 2022 – Aug 2024",
    location: "Chennai, India",

    summary:
      "Java backend services for telecommunications and compliance platforms with event-driven integrations and GraphQL.",
    metric: "Kafka + Amazon SQS event-driven integrations",
    techStack: [
      "Java",
      "Spring Boot",
      "Apache Kafka",
      "Amazon SQS",
      "GraphQL",
      "SQL Server",
    ],

    highlights: [
      "Developed Java Spring Boot microservices, REST APIs, and GraphQL services for telecommunications and compliance platforms.",
      "Implemented event-driven integrations using Apache Kafka and Amazon SQS for distributed application communication.",
      "Secured enterprise applications with Spring Security, OAuth2, JWT, Auth0, and RBAC.",
      "Improved SQL Server performance through query tuning, indexing, execution plans, and stored procedure optimization.",
      "Containerized applications using Docker and automated deployments through GitHub Actions, Jenkins, Maven, and CI/CD.",
    ],
  },
];
