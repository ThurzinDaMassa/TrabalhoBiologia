import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ContentSectionProps {
  title: string;
  icon?: ReactNode;
  children: ReactNode;
  variant?: "mitosis" | "meiosis" | "default";
}

const ContentSection = ({ title, icon, children, variant = "default" }: ContentSectionProps) => {
  const colorClass = variant === "mitosis" ? "text-primary" : variant === "meiosis" ? "text-secondary" : "text-foreground";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-card p-6 md:p-8"
    >
      <div className="flex items-center gap-3 mb-4">
        {icon && <span className={colorClass}>{icon}</span>}
        <h3 className={`font-display text-xl font-bold ${colorClass}`}>{title}</h3>
      </div>
      <div className="text-muted-foreground leading-relaxed space-y-3 text-sm md:text-base">
        {children}
      </div>
    </motion.div>
  );
};

export default ContentSection;
