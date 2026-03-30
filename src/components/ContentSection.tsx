import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ContentSectionProps {
  title: string;
  icon?: ReactNode;
  children: ReactNode;
  variant?: "mitosis" | "meiosis" | "default";
}

const ContentSection = ({ title, icon, children, variant = "default" }: ContentSectionProps) => {
  const isMeiosis = variant === "meiosis";
  const isMitosis = variant === "mitosis";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-card overflow-hidden"
    >
      {/* Colored top border */}
      <div
        className="h-1"
        style={{
          background: isMitosis
            ? "var(--gradient-mitosis)"
            : isMeiosis
            ? "var(--gradient-meiosis)"
            : "var(--gradient-bio)",
        }}
      />
      <div className="p-6 md:p-8">
        <div className="flex items-center gap-3 mb-5">
          {icon && (
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center text-primary-foreground`}
              style={{
                background: isMitosis
                  ? "var(--gradient-mitosis)"
                  : isMeiosis
                  ? "var(--gradient-meiosis)"
                  : "var(--gradient-bio)",
              }}
            >
              {icon}
            </div>
          )}
          <h3 className={`font-display text-xl font-bold ${
            isMitosis ? "text-primary" : isMeiosis ? "text-secondary" : "text-foreground"
          }`}>
            {title}
          </h3>
        </div>
        <div className="text-muted-foreground leading-relaxed space-y-3 text-sm md:text-base">
          {children}
        </div>
      </div>
    </motion.div>
  );
};

export default ContentSection;
