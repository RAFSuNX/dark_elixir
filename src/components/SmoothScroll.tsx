import { useEffect } from 'react';
import { useScroll, useSpring, useTransform } from 'framer-motion';

export function useSmoothScroll() {
  const { scrollY } = useScroll();
  const smoothY = useSpring(scrollY, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    return smoothY.on('change', latest => {
      window.scrollTo(0, latest);
    });
  }, [smoothY]);

  return smoothY;
}