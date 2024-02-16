"use client";

import { animate, motion, useMotionValue } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import useMeasure from "react-use-measure";
import CarouselCard from "./carousel-card";
import { Images } from "./images";

export default function Carousel() {
  let [ref, { x, y, width, height }] = useMeasure();
  const xTranslate = useMotionValue(0);
  const Fast_Duration = 30;
  const Slow_Duration = 75;
  const [duration, setDuration] = useState(Fast_Duration);
  const [mustFinish, setMustFinish] = useState(false);

  useEffect(() => {
    let control;
    let finalPosition = -width / 2 - Images.length;

    if (mustFinish) {
      control = animate(xTranslate, [xTranslate.get(), finalPosition], {
        ease: "linear",
        duration: duration * (1 - xTranslate.get() / finalPosition),
        onComplete: () => {
          setMustFinish(false);
        },
      });
    } else {
      control = animate(xTranslate, [0, finalPosition], {
        ease: "linear",
        repeat: Infinity,
        duration: duration,
        repeatDelay: 0,
        repeatType: "loop",
      });
    }

    return control?.stop;
  }, [xTranslate, width, duration, mustFinish]);

  const handleHoverStart = useCallback(() => {
    setMustFinish(true);
    setDuration(Slow_Duration);
  }, []);

  const handleHoverEnd = useCallback(() => {
    setMustFinish(true);
    setDuration(Fast_Duration);
  }, []);

  return (
    <motion.div
      className="flex absolute left-0 right-0 inset-0  overflow-hidden  w-fit h-fit my-auto"
      ref={ref}
      style={{ x: xTranslate }}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
    >
      {[...Images, ...Images].map((image, index) => (
        <CarouselCard key={index} image={image} index={index} />
      ))}
    </motion.div>
  );
}
