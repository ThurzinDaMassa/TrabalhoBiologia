import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState, ReactNode } from "react";

interface PhaseCardProps {
  title: string;
  description: string;
  details: string;
  icon: ReactNode;
  index: number;
  color: string;
}

const PhaseCard = ({ title, description, details, icon, index, color }: PhaseCardProps) => {
  const [expanded, setExpanded] = useState(false);
  const isMeiosis = color === "--gradient-meiosis";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className="glass-card overflow-hidden cursor-pointer group"
      onClick={() => setExpanded(!expanded)}
    >
      <div className="p-6 flex items-start gap-4">
        <div className="relative">
          <div
            className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 text-primary-foreground transition-transform group-hover:scale-110`}
            style={{ background: isMeiosis ? "var(--gradient-meiosis)" : "var(--gradient-mitosis)" }}
          >
            {icon}
          </div>
          {/* Step number */}
          <span className={`absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full text-[10px] font-bold flex items-center justify-center ${
            isMeiosis ? "bg-secondary text-secondary-foreground" : "bg-primary text-primary-foreground"
          }`}>
            {index + 1}
          </span>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <h3 className="font-display font-bold text-lg text-foreground">
              {title}
            </h3>
            <motion.div
              animate={{ rotate: expanded ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="ml-2"
            >
              <ChevronDown className="w-5 h-5 text-muted-foreground" />
            </motion.div>
          </div>
          <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">{description}</p>
        </div>
      </div>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className={`mx-6 mb-6 p-4 rounded-xl text-sm text-foreground/80 leading-relaxed ${
              isMeiosis ? "bg-secondary/5 border border-secondary/10" : "bg-primary/5 border border-primary/10"
            }`}>
              {details}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default PhaseCard;
