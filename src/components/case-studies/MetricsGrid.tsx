const metrics = [
  {
    label: "Heap Usage",
    before: "90%",
    after: "25%",
  },

  {
    label: "Query Latency",
    before: "307ms",
    after: "15ms",
  },

  {
    label: "Failures",
    before: "200",
    after: "0",
  },

  {
    label: "Logical Reads",
    before: "2974",
    after: "5-10",
  },
];

export default function MetricsGrid() {
  return (
    <section className="py-20">
      <div className="grid md:grid-cols-4 gap-6">
        {metrics.map((metric) => (
          <div
            key={metric.label}
            className="
              border border-white/10
              rounded-2xl
              p-8
              bg-white/[0.03]
            "
          >
            <p className="text-gray-500 text-sm">
              {metric.label}
            </p>

            <div className="mt-6">
              <p className="text-red-400 text-lg">
                {metric.before}
              </p>

              <p className="text-3xl font-bold text-cyan-400 mt-2">
                → {metric.after}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}