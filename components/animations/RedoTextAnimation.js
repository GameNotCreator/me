"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

export default function RedoTextAnimation({ delay }) {
  const textIndex = useMotionValue(0);

  const texts = [
    "CEO of TunisianPass",
    "NextJS Full-Stack Developer",
    "Founder of LGF Engineers Club",
    "Freelance Developer",
    "Vice President of LGF Chess Club",
    "Self Taught Developer",
    "Built an functional solar car",
    "Winner of PMF 2023 Projet X",
    "Built A-BOT, an antiburn-out robot",
    "Winner of LGF 2024 Projet X"
  ];

  const baseText = useTransform(textIndex, (latest) => texts[latest] || "");
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.get().slice(0, latest)
  );
  const updatedThisRound = useMotionValue(true);

  useEffect(() => {
    animate(count, 60, {
      type: "tween",
      delay: delay,
      duration: 3,
      ease: "easeIn",
      repeat: Infinity,
      repeatType: "reverse",
      repeatDelay: 1,
      onUpdate(latest) {
        if (updatedThisRound.get() === true && latest > 0) {
          updatedThisRound.set(false);
        } else if (updatedThisRound.get() === false && latest === 0) {
          if (textIndex.get() === texts.length - 1) {
            textIndex.set(0);
          } else {
            textIndex.set(textIndex.get() + 1);
          }
          updatedThisRound.set(true);
        }
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.span className="h-24 max-w-96 bg-lightBeige text-[1rem] dark:bg-darkBeige md:text-[1rem] lg:text-[1rem]">
      {displayText}
    </motion.span>
  );
}
