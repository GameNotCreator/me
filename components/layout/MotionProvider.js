"use client";

import { domAnimation, LazyMotion, MotionConfig } from "framer-motion";

export default function MotionProvider({ children }) {
  return (
    <MotionConfig reducedMotion="user">
      <LazyMotion features={domAnimation} strict>{children}</LazyMotion>
    </MotionConfig>
  );
}
