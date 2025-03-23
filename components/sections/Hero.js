"use client";
import "next-cloudinary/dist/cld-video-player.css";
import { motion } from "framer-motion";
import { smoothScrollTo } from "@/libs/utils";
import TextAnimation from "../animations/TextAnimation";
import { Linkedin, Github } from "lucide-react";
import Image from "next/image";
import { useActiveSectionContext } from "@/libs/SectionProvider";
import { useSectionInView } from "@/libs/hooks";
const Hero = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const { ref } = useSectionInView("home", 0.4);

  return (
    <div>
      {" "}
      <motion.section
        className="relative flex flex-col h-screen w-screen scroll-mt-36 flex-col  items-center justify-center"
        id="home"
        ref={ref}
      >
          <video
            className="absolute w-full h-full object-cover opacity-70 " // ou object-contain si vous préférez voir toute la vidéo
            preload="none"
            autoPlay
            playsInline={true}
            webkit-playsinline="true"
            style={{ pointerEvents: "none" }}
            crossOrigin="anonymous"
            muted
            loop
          >
            <source src="/layout.mp4" />
          </video>

        <div className="container flex flex-col items-start justify-center tracking-wide text-black dark:text-white">
          <div className="container relative flex h-full w-full flex-col items-center">
            <div className="lg:h-50 md:h-50 sm:h-70 w-[280px] lg:pt-5 md:pt-20 sm:pt-5 mb-10 text-center text-[2rem] font-extrabold sm:w-[520px] md:w-[700px] lg:mb-5 lg:w-[920px] lg:text-[3rem]">
              <br />
              <TextAnimation delay={1} baseText={`Hedi Fourati`} />
            </div>
            <motion.div
              className="w-92 flex flex-col items-center justify-center gap-3 px-4 text-sm font-medium md:mt-14 md:flex-row lg:text-lg"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.1,
              }}
            >
              <div className="flex flex-col items-center justify-center gap-3">
                <a
                  className="borderBlack group flex w-64 cursor-pointer items-center justify-center gap-2 rounded-full bg-opacity-20 bg-[#202020] hover:bg-[#303030] hover:text-white px-7 py-3 text-white outline-none transition sm:w-auto"
                  onClick={(e) => {
                    smoothScrollTo({ e, id: "contact" });
                    setActiveSection("contact");
                    setTimeOfLastClick(Date.now());
                  }}
                >
                  <span>Contact me here</span>
                </a>

                <a
                  className="borderBlack group flex w-64 cursor-pointer items-center justify-center gap-2 rounded-full bg-white px-7 py-3 text-black outline-none transition hover:bg-gray-100 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 sm:w-auto"
                  href="/resume.pdf"
                  target="_blank"
                >
                  <span>See my resume</span>
                </a>

                <div className="flex gap-2">
                  <a
                    className="borderBlack flex h-[50px] w-[50px] cursor-pointer items-center justify-center gap-2 rounded-full bg-white p-2 text-black transition hover:bg-gray-100 dark:bg-white/10 dark:text-white/60 dark:hover:bg-white/20"
                    href="https://www.linkedin.com/in/maksym-azimov/"
                    target="_blank"
                  >
                    <Linkedin />
                  </a>
                  <a
                    className="borderBlack flex h-[50px] w-[50px] cursor-pointer items-center justify-center gap-2 rounded-full bg-white p-2 text-gray-700 transition hover:bg-gray-100 hover:text-gray-950 dark:bg-white/10 dark:text-white/60 dark:hover:bg-white/20"
                    href="https://github.com/bbyc4kes"
                    target="_blank"
                  >
                    <Image
                      width={25}
                      height={25}
                      src={"/github.svg"}
                      alt="github icon"
                    />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Hero;
