import { motion, useScroll, useTransform } from 'framer-motion';

export function ParallaxBackground() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

  return (
    <motion.div
      className="fixed inset-0 z-[-1]"
      style={{ y, opacity }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent-500/10 to-highlight-500/10 blur-3xl" />
    </motion.div>
  );
}