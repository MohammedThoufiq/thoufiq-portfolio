"use client";

//import Link from "next/link";
import Image from "next/image";
import BorderGlow from "../animations/BorderGlow";

type Props = {
  name: string;
  icon: string;
  category: string;
  //url: string;
};

export default function TechCard({
  name,
  icon,
  category,
  //url,
}: Props) {
  return (
    <BorderGlow
      //  <Link
      //   href={url}
      //   target="_blank"
      //   rel="noopener noreferrer"
      // > 
  className="
    w-full
    overflow-hidden
    rounded-3xl
    p-4
    md:p-6
    text-cyan-400
    transition-transform
    duration-300
    hover:-translate-y-1
  "
  edgeSensitivity={30}
  glowColor="34 211 238"
  backgroundColor="#0A0F14"
  borderRadius={28}
  glowRadius={35}
  glowIntensity={1}
  coneSpread={25}
  animated={false}
  colors={["#22d3ee", "#06b6d4", "#67e8f9"]}
>
      <div
        className="
          h-full
          flex
          flex-col
          items-center
          justify-center
          text-center
        "
      >
        <div
          className="
            flex
            items-center
            justify-center

            h-12
            w-12

            md:h-14
            md:w-14

            shrink-0
          "
        >
          <Image
            src={icon}
            alt={name}
            width={56}
            height={56}
            className="
              max-w-full
              max-h-full
              object-contain
              transition-transform
              duration-300
            "
          />
        </div>

        <h3
          className="
            mt-3
            text-sm
            md:text-lg
            font-semibold
            leading-tight
            break-words
            max-w-full
          "
        >
          {name}
        </h3>

      {/* </Link> */}
        <p
          className="
            mt-1
            text-[11px]
            md:text-sm
            text-gray-400
            leading-snug
            break-words
            max-w-full
          "
        >
          {category}
        </p>
      </div>
    </BorderGlow>
  );
}