'use client'
import ImageGallery from "@/components/elements/Images/ImageGallery";
import SectionHeading from "@/components/layout/SectionHeading";
import { motion } from "framer-motion";
const Life = ({ galleries }) => {

  return (
    <motion.section
      className="relative flex flex-col  flex-col items-center justify-center"
    >
      <div className="hero min-h-screen" id="life">
        <SectionHeading id="life">Get to know more about my life</SectionHeading>
        <ImageGallery galleries={galleries} />
      </div>
    </motion.section>
  );
};

export default Life;
