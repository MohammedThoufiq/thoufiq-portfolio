import Image from "next/image";

import GlowCard from "@/components/ui/GlowCard";

type ArchitectureDiagramProps = {
  title: string;
  description: string;
  image: string;
};

export default function ArchitectureDiagram({
  title,
  description,
  image,
}: ArchitectureDiagramProps) {
  return (
    <section className="py-20">
      <GlowCard>
        <div className="p-8 md:p-12">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            {title}
          </h2>

          <p className="mt-6 text-lg text-muted leading-8 max-w-4xl">
            {description}
          </p>
        </div>

        <div className="border-t border-hairline">
          <Image
            src={image}
            alt={title}
            width={1600}
            height={900}
            className="w-full h-auto"
          />
        </div>
      </GlowCard>
    </section>
  );
}