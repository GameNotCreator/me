"use client";

import { useEffect, useRef, useState } from "react";
import { useActiveSectionContext } from "./SectionProvider";

export function useSectionInView(sectionName) {
  const ref = useRef(null);
  const { activeSection } = useActiveSectionContext();
  return { ref, inView: activeSection === sectionName };
}

export function useHasMounted() {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => { setHasMounted(true); }, []);
  return hasMounted;
}
