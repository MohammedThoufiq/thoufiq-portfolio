import GlowCard from "@/components/ui/GlowCard";

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
          <GlowCard key={metric.label} className="p-8">
            <p className="text-faint text-sm">
              {metric.label}
            </p>

            <div className="mt-6">
              <p className="text-red-400 text-lg">
                {metric.before}
              </p>

              <p className="text-3xl font-bold text-accent mt-2">
                → {metric.after}
              </p>
            </div>
          </GlowCard>
        ))}
      </div>
    </section>
  );
}