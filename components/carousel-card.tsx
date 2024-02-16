"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface CarouselCardProps {
  image: string;
  index: number;
}

export default function CarouselCard({ image, index }: CarouselCardProps) {
  const [overlayActive, setOverlayActive] = useState(false);

  return (
    <motion.div
      className="flex justify-center items-center min-h-[256px] min-w-[256px] overflow-hidden w-fit h-fit"
      onHoverStart={() => setOverlayActive(true)}
      onHoverEnd={() => setOverlayActive(false)}
      key={index}
    >
      <div
        key={index}
        className="m-4 flex justify-center overflow-hidden items-center relative rounded-lg shadow-md bg-slate-500 hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 "
      >
        <AnimatePresence>
          {overlayActive && (
            <motion.div
              className="absolute flex inset-0 justify-center items-center  "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div
                className={`absolute inset-0 bg-black bg-opacity-50 z-10 transition-opacity duration-300 ease-in-out pointer-event-none${
                  overlayActive ? "opacity-100" : "opacity-0"
                }`}
              />
              <motion.span
                className="bg-white font-semibold text-sm z-10  px-3 py-2  rounded-full flex items-center"
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                exit={{ y: 20 }}
              >
                <h1>Explore Tesla</h1>
                <ArrowUpRight className="ml-2 rounded-full bg-black text-white w-4 h-4" />
              </motion.span>
            </motion.div>
          )}
        </AnimatePresence>
        <Image
          src={image}
          alt={`Image number ${index + 1}`}
          className="object-cover object-center max-h-[256px] max-w-[256px] min-w-[256px] min-h-[256px]"
          width={256}
          height={256}
          quality={100}
          priority
          key={index}
        />
      </div>
    </motion.div>
  );
}
