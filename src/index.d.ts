export interface UseScrollAnimationResult {
  currentSection: number;
  scrollToSection: (index: number) => void;
}

export default function useScrollAnimation(
  duration?: number
): UseScrollAnimationResult;
