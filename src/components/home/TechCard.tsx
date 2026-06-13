"use client";

//import Link from "next/link";
import Image from "next/image";
import BorderGlow from "../animations/BorderGlow";

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
  //url,
}: Props) {
  return (
    <BorderGlow
    className="
  block
  h-full
  rounded-2xl
  p-6
  transition-transform
  duration-300
  hover:-translate-y-1
"
      edgeSensitivity={30}
      glowColor="40 80 80"
      backgroundColor="#120F17"
      borderRadius={24}
      glowRadius={35}
      glowIntensity={1}
      coneSpread={25}
      animated={false}
      colors={["#c084fc", "#06b6d4", "#38bdf8"]}
    >
      {/* <Link
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      > */}
        <div className="flex flex-col items-center text-center">
          <Image
            src={icon}
            alt={name}
            width={56}
            height={56}
            className="
              object-contain
              transition-all
              duration-300
              group-hover:scale-110
            "
          />

          <h3 className="mt-5 text-xl font-semibold">
            {name}
          </h3>

          <p className="mt-2 text-sm text-gray-400">
            {category}
          </p>
        </div>
      {/* </Link> */}
    </BorderGlow>
  );
}