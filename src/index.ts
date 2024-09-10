"use client";
import { useEffect, useState } from "react";

export const easeInOutQuad = (t: number) =>
  t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

const useScrollAnimation = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [scrolling, setScrolling] = useState(false);
  const [sectionHeight, setSectionHeight] = useState(
    typeof window !== "undefined" ? window.innerHeight : 0
  );

  const smoothScrollTo = (targetSection: number) => {
    const start = window.scrollY;
    const end = targetSection * sectionHeight;
    const duration = 1000; // 애니메이션 지속 시간 (ms)
    const startTime = performance.now();

    const scrollStep = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const scrollPosition = start + (end - start) * easeInOutQuad(progress);

      window.scrollTo(0, scrollPosition);

      if (progress < 1) {
        requestAnimationFrame(scrollStep);
      } else {
        setScrolling(false);
        setCurrentSection(targetSection);
      }
    };

    requestAnimationFrame(scrollStep);
  };

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (scrolling) return;

      const delta = e.deltaY;
      const targetSection =
        delta > 0
          ? Math.min(currentSection + 1, 3)
          : Math.max(currentSection - 1, 0);

      if (targetSection !== currentSection) {
        setScrolling(true);
        smoothScrollTo(targetSection);
      }
    };

    const updateSectionHeight = () => setSectionHeight(window.innerHeight);

    window.addEventListener("wheel", handleWheel);
    window.addEventListener("resize", updateSectionHeight);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("resize", updateSectionHeight);
    };
  }, [currentSection, scrolling, sectionHeight]);

  return {
    currentSection,
    scrollToSection: (index: number) => smoothScrollTo(index),
  };
};

export default useScrollAnimation;
