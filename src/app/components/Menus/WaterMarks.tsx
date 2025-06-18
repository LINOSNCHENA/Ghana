"use client";

import React from "react";
// import Image from "next/legacy/image";
import Image from "next/image";
import { COMP_LOGO_BIG } from "@/app/utils/constants";

interface WatermarkBackgroundProps {
  altText?: string;
  opacity?: number;
  rotateDeg?: number;
}

export default function WatermarkBackground({ altText = "Background Watermark", opacity = 0.1, rotateDeg = 90 }: WatermarkBackgroundProps) {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      <Image
        src={COMP_LOGO_BIG}
        alt={altText}
        fill
        className="object-contain"
        style={{
          opacity,
          transform: `rotate(${rotateDeg}deg)`,
          filter: "grayscale(70%) brightness(0.9)",
        }}
        quality={30}
        priority={false}
      />
    </div>
  );
}
