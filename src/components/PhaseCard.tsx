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

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="glass-card p-6 cursor-pointer group"
      onClick={() => setExpanded(!expanded)}
    >
      <div className="flex items-start gap-4">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 text-primary-foreground"
          style={{ background: `var(${color})` }}
        >
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <h3 className="font-display font-semibold text-lg text-foreground">
              {title}
            </h3>
            <motion.div
              animate={{ rotate: expanded ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronDown className="w-5 h-5 text-muted-foreground" />
            </motion.div>
          </div>
          <p className="text-sm text-muted-foreground mt-1">{description}</p>
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
            <div className="mt-4 pt-4 border-t border-border/50">
              <p className="text-sm text-foreground/80 leading-relaxed">{details}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default PhaseCard;
