import Link from "next/link";
import Image from "next/image";

type Props = {
  name: string;
  icon: string;
  category: string;
  url: string;
};

export default function TechCard({
  name,
  icon,
  category,
  url,
}: Props) {
  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="
        group
        rounded-2xl
        border border-white/10
        bg-white/[0.02]
        p-6
        transition-all
        duration-300
        hover:border-cyan-500/40
        hover:-translate-y-1.5
hover:border-cyan-500/40
hover:shadow-[0_0_25px_rgba(34,211,238,0.15)]
        hover:bg-white/[0.04]
      "
    >
      <div className="flex flex-col items-center text-center">
        <Image
  src={icon}
  alt={name}
  width={56}
  height={56}
  className="
    object-contain
    transition-transform
    duration-300
    group-hover:scale-110
transition-all
duration-300
  "
/>

        <h3 className="mt-5 text-xl font-semibold">
          {name}
        </h3>

        <p className="mt-2 text-sm text-gray-400">
          {category}
        </p>
      </div>
    </Link>
  );
}