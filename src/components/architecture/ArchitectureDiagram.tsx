import Image from "next/image";

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
      <div
        className="
          border border-white/10
          rounded-3xl
          overflow-hidden
          bg-white/[0.03]
        "
      >
        <div className="p-8 md:p-12">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            {title}
          </h2>

          <p className="mt-6 text-lg text-gray-400 leading-8 max-w-4xl">
            {description}
          </p>
        </div>

        <div className="border-t border-white/10">
          <Image
            src={image}
            alt={title}
            width={1600}
            height={900}
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}