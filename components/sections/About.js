"use client";

import { useSectionInView } from "@/libs/hooks";
import SectionDivider from "@/components/layout/SectionDivider";
import SectionHeading from "@/components/layout/SectionHeading";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function About() {
  const { ref } = useSectionInView("about", 0.4);
  const divRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: divRef,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.section
      className="z-50 flex flex-col h-[1000px] w-full flex-col items-center justify-center leading-8 dark:bg-darkBg dark:text-white md:scroll-mt-4 lg:h-[1100px] lg:scroll-mt-24"
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175, ease: "easeInOut" }}
      id="about"
    >
      <div className="flex w-full flex-col items-center pt-8">
        <SectionHeading>About Me</SectionHeading>
        <motion.div
          className="w-full overflow-hidden px-4 py-12 sm:w-[60%] sm:text-center lg:h-[700px] lg:w-[1040px] xl:w-[1180px]"
          ref={divRef}
          style={{
            scale: scaleProgess,
            opacity: opacityProgess,
            willChange: "transform, opacity",
            transform: "translateZ(0)",
          }}
        >
          <div className="antialiased group relative w-full">
            <div className="text-md relative z-40 flex flex-col gap-3 font-semibold tracking-wide text-primary   ">
              <div className="flex h-full flex-col justify-center items-center gap-6">
                <div className="lg:top-1/4 lg:block">
                  <div className="relative flex flex-row items-center justify-center h-72 w-72 lg:h-[380px] lg:w-[380px] xl:h-[470px] xl:w-[470px]">
                    <div className="relative  rounded-full bg-gradient-to-b from-[#ffcbb4] via-[#e0afa0] to-[#e29578] transition-opacity group-hover:opacity-30" />
                    <div className="relative">
                      <Image
                        src={"/photo.jpg"}
                        alt="portfolio image"
                        width={470}
                        height={470}
                        className="z-10 rounded-full lg:h-[380px] lg:w-[380px] xl:h-[470px] xl:w-[470px]"
                      />
                    </div>
                  </div>
                </div>
                <span className="text-left xl:max-w-[650px]">
                  My dream is to innovate beyond limits. I believe that the more
                  I learn, the more I can create. My goal is to satisfy my
                  curiosity through learning and to apply this knowledge to
                  innovate in technology. I have many passions, but my greatest
                  is computing. I started coding at the age of 8, entirely
                  self-taught, and I have never stopped since. I constantly work
                  on new projects, feeding my insatiable curiosity and desire
                  for innovation.
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <SectionDivider />
    </motion.section>
  );
}
