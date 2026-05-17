export const projects = [
  {
    id: 1,

    slug: "High-throughput-notification-system",

    title: "High Throughput Notification System",

    shortDescription:
      "Distributed notification platform with retry handling and async event-driven architecture.",

    fullDescription:
      "Designed and implemented a scalable notification processing platform capable of handling high concurrent traffic using asynchronous event-driven architecture with Kafka.",

    architecture:
      "Producer services publish notification events to Kafka topics. Consumers process notifications asynchronously with retry handling and DLQ support.",

    techStack: [
      "Java",
      "Spring Boot",
      "Kafka",
      "Redis",
      "SQL Server",
      "Docker",
    ],

    highlights: [
      "Implemented retry and DLQ handling",
      "Built scalable async processing",
      "Handled high concurrent notification traffic",
    ],

    githubUrl: "#",
  },

  {
    id: 2,
    slug: "Employee-management-microservices-platform",
    title: "Employee Management Microservices Platform",

    description:
      "Microservices-based backend platform using Spring Cloud ecosystem and event-driven communication.",

    techStack: [
      "Java 17",
      "Spring Boot",
      "Spring Cloud",
      "Kafka",
      "PostgreSQL",
    ],

    highlights: [
      "API Gateway integration",
      "Service discovery",
      "Centralized configuration",
    ],

    githubUrl: "#",
  },
];