type SectionProps = {
  title: string;
  children: React.ReactNode;
};

export default function Section({
  title,
  children,
}: SectionProps) {
  return (
    <section className="py-24">
      <h2 className="text-3xl md:text-4xl font-bold mb-14">
        {title}
      </h2>

      {children}
    </section>
  );
}