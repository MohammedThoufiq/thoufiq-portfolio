export const projectDetails = [
  {
    slug: "High-throughput-notification-system",
    metrics: [
  {
    label: "Notification Request Failures per day",
    before: "20K+",
    after: "0",
  },
  {
    label: "Publish Latency",
    before: ">1s",
    after: "<200ms",
  },
  {
    label: "Retry Levels",
    before: "0",
    after: "3",
  },
  {
    label: "Delivery Success",
    before: "NIL",
    after: "90%",
  },
],

    title: "High Throughput Notification System",

    subtitle:
      "Distributed event-driven notification platform supporting retry handling, DLQ processing, and concurrent delivery.",

    tags: [
      "Java",
      "Spring Boot",
      "Kafka",
      "Redis",
      "SQL Server",
      "Docker",
    ],

    overview: `
Designed a scalable notification platform capable of processing large volumes of notification requests asynchronously.

The system uses Kafka-based event processing, retry mechanisms, dead letter handling, and Redis-backed rate control to ensure reliability under load.
`,

    architecture: `
                           CLIENT APPLICATIONS
                                      │
                                      ▼

                     ┌─────────────────────────┐
                     │   Notification API      │
                     │      Spring Boot        │
                     └─────────────────────────┘
                                      │
                                      ▼

                     ┌─────────────────────────┐
                     │      Kafka Cluster      │
                     │ notification-events     │
                     └─────────────────────────┘
                                      │
                                      ▼

                ┌────────────────────────────────────┐
                │   Notification Consumer Group      │
                │        (Horizontal Scale)          │
                └────────────────────────────────────┘
                     │              │
                     │              │
                     ▼              ▼

         ┌─────────────────┐   ┌─────────────────┐
         │ Email Processor │   │  SMS Processor  │
         └─────────────────┘   └─────────────────┘
                     │              │
                     └──────┬───────┘
                            │
                            ▼

                  Processing Successful?
                            │
              ┌─────────────┴─────────────┐
              │                           │
             YES                         NO
              │                           │
              ▼                           ▼

    ┌─────────────────┐      ┌─────────────────────┐
    │ Delivery Status │      │    Retry Topic      │
    │    Database     │      │   Attempt 1 / 2 /3  │
    └─────────────────┘      └─────────────────────┘
                                           │
                                           ▼

                                Retry Exhausted?
                                           │
                              ┌────────────┴────────────┐
                              │                         │
                             NO                        YES
                              │                         │
                              ▼                         ▼

                        Reprocess Event      ┌─────────────────┐
                                             │ Dead Letter     │
                                             │ Queue (DLQ)     │
                                             └─────────────────┘
                                                       │
                                                       ▼

                                             ┌─────────────────┐
                                             │ Alert Service   │
                                             │ Monitoring      │
                                             └─────────────────┘
`,

    challenges: `
- Message retry management
- Duplicate notification prevention
- Consumer failure recovery
- Throughput optimization
- Dead letter handling
`,

    results: `
- Reliable asynchronous processing
- Improved system resilience
- Reduced request latency
- Scalable concurrent message handling
`,
  },
  {
  slug: "employee-management-microservices-platform",
  metrics: [
  {
    label: "Microservices",
    before: "1",
    after: "8",
  },
  {
    label: "Service Calls",
    before: "Direct",
    after: "Gateway Routed",
  },
  {
    label: "Event Processing",
    before: "Sync",
    after: "Kafka",
  },
  {
    label: "Configuration",
    before: "Local",
    after: "Centralized",
  },
],

  title: "Employee Management Microservices Platform",

  subtitle:
    "Distributed employee management platform built using Spring Cloud, API Gateway, service discovery, centralized configuration, and event-driven communication.",

  tags: [
    "Java 17",
    "Spring Boot",
    "Spring Cloud",
    "Kafka",
    "PostgreSQL",
    "Docker",
  ],

  overview: `
Designed a microservices-based employee management platform to demonstrate scalable service-oriented architecture patterns.

The platform separates business capabilities into independent services while providing centralized routing, configuration management, service discovery, and asynchronous event processing.
`,

  architecture: `
                    Employee Portal
                           │
                           ▼

                    API Gateway
                           │
                           ▼

                 Service Discovery
                           │
                           ▼
 ┌────────────┬────────────┬────────────┐
 ▼            ▼            ▼            ▼

Employee    Department    Leave      Payroll
Service      Service      Service     Service

 └────────────┬─────────────┘
              ▼

         Kafka Event Bus

 ┌────────────┬────────────┐
 ▼            ▼            ▼

Notification   Audit      Reporting
Service        Service     Service

              │
              ▼

      Centralized Config Server
`,

  challenges: `
- Service-to-service communication
- Distributed configuration management
- Dynamic service discovery
- Event consistency between services
- Failure isolation and resiliency
- API gateway routing and security
`,

  results: `
- Independent service deployment
- Improved modularity
- Better scalability
- Event-driven communication
- Centralized traffic management
- Reduced service coupling
`,
}
];