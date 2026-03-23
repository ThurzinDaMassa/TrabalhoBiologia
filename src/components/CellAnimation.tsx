import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CellAnimationProps {
  type: "mitosis" | "meiosis";
}

const CellDot = ({ className, delay = 0 }: { className?: string; delay?: number }) => (
  <motion.div
    className={`absolute w-3 h-3 rounded-full ${className}`}
    animate={{
      y: [0, -6, 0, 6, 0],
      x: [0, 4, 0, -4, 0],
    }}
    transition={{ duration: 3, repeat: Infinity, delay }}
  />
);

const CellAnimation = ({ type }: CellAnimationProps) => {
  const isMitosis = type === "mitosis";

  return (
    <div className="relative w-40 h-40 mx-auto">
      {/* Cell membrane */}
      <motion.div
        className={`w-full h-full cell-blob ${
          isMitosis ? "bg-primary/20 border-2 border-primary/30" : "bg-secondary/20 border-2 border-secondary/30"
        }`}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      {/* Nucleus */}
      <motion.div
        className={`absolute top-1/2 left-1/2 w-14 h-14 -translate-x-1/2 -translate-y-1/2 rounded-full ${
          isMitosis ? "bg-primary/30" : "bg-secondary/30"
        }`}
        animate={{ scale: [1, 0.9, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      {/* Chromosomes */}
      <CellDot className={isMitosis ? "bg-cell-green" : "bg-cell-purple"} delay={0} />
      <CellDot className={isMitosis ? "bg-cell-teal" : "bg-cell-pink"} delay={0.5} />
      <CellDot className={isMitosis ? "bg-cell-blue" : "bg-cell-blue"} delay={1} />
      {/* Position dots inside cell */}
      <style>{`
        .absolute:nth-child(3) { top: 35%; left: 40%; }
        .absolute:nth-child(4) { top: 50%; left: 55%; }
        .absolute:nth-child(5) { top: 60%; left: 42%; }
      `}</style>
    </div>
  );
};

export default CellAnimation;
