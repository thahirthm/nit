"use client";

import { motion, type HTMLMotionProps } from "motion/react";

interface RevealProps extends Omit<HTMLMotionProps<"div">, "initial" | "whileInView" | "viewport" | "transition"> {
  children: React.ReactNode;
  /** Stagger offset in seconds — lets siblings (heading, paragraph, cards) cascade in rather than appear at once. */
  delay?: number;
  duration?: number;
  /** Initial vertical offset in px. Smaller for inline text/cards, larger for full sections. */
  y?: number;
  /** Fraction of the element that must be in view before it triggers. */
  amount?: number;
}

export function Reveal({ children, delay = 0, duration = 1.4, y = 120, amount = 0.1, ...rest }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount, margin: "0px 0px -150px 0px" }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
