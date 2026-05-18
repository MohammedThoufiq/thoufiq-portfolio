export const caseStudies = [
  {
    slug: "high-heap-memory-incident",

    title:
      "Fixing High Heap Memory Usage During Traffic Spikes",

    summary:
      "How bounded concurrency, query optimization, and controlled resource management stabilized a backend system under heavy load.",

    intro: `
During a production traffic spike, the application experienced severe heap pressure, elevated latency, intermittent failures, and eventual memory instability.

The investigation revealed multiple architectural weaknesses amplifying one another under concurrency.
`,
tags: [
  "Spring Boot",
  "Performance Engineering",
  "Distributed Systems",
  "Resiliency",
  "Scalability",
],

    problem: `
The original architecture lacked bounded resource control.

Under traffic spikes:
- async tasks accumulated aggressively
- slow queries retained connections longer
- large result sets increased heap retention
- request queues grew uncontrollably

These problems collectively converted traffic spikes into memory pressure.
`,

    rootCause: `
Several systemic weaknesses contributed to the incident:

- unbounded async execution
- improper connection lifecycle handling
- unbounded result loading
- missing database indexes

Each issue amplified the others under concurrency.
`,

    fixes: `
The architecture was redesigned to introduce:

- bounded async execution
- controlled queue capacity
- query pagination
- optimized indexing
- healthy connection reuse
- proactive observability

The goal was to make system behavior predictable under stress.
`,

    results: `
After optimization:

- heap usage stabilized significantly
- request failures were eliminated
- query latency dropped dramatically
- connection pool stability improved
- async processing became bounded and resilient
`,

    conclusion: `
This incident reinforced an important distributed systems principle:

Systems fail gradually before they fail catastrophically.

The final solution was not a single optimization, but a combination of:

- bounded execution
- pagination
- indexing
- connection lifecycle safety
- observability

working together as a cohesive resiliency strategy.
`,
  },
];