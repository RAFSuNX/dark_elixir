import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

export function ParallaxBackground() {
  const { scrollYProgress } = useScroll();
  
  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '-50%']);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.5, 1]);
  
  const smoothY1 = useSpring(y1, { stiffness: 100, damping: 30 });
  const smoothY2 = useSpring(y2, { stiffness: 100, damping: 30 });
  const smoothRotate = useSpring(rotate, { stiffness: 100, damping: 30 });
  const smoothScale = useSpring(scale, { stiffness: 100, damping: 30 });

  return (
    <>
      <div className="fixed inset-0 z-[-2] overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-accent-500/10 to-transparent"
          style={{ y: smoothY1, rotate: smoothRotate, scale: smoothScale }}
        />
      </div>
      <div className="fixed inset-0 z-[-1] overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-tl from-highlight-500/10 to-transparent"
          style={{ y: smoothY2, rotate: smoothRotate, scale: smoothScale }}
        />
      </div>
      <div className="fixed inset-0 z-[-3] bg-black" />
    </>
  );
}