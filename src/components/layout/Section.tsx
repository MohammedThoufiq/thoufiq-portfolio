import { ReactNode } from "react";

type SectionProps = {
  id?: string;
  title: string;
  children: ReactNode;
};

export default function Section({
  id,
  title,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className="py-16 md:py-24 lg:py-28 scroll-mt-24"
    >
      <div className="mb-10">
        <h2 className="text-3xl md:text-4xl font-bold">
          {title}
        </h2>

        <div className="mt-3 h-[2px] w-16 bg-cyan-400 rounded-full" />
      </div>

      {children}
    </section>
  );
}