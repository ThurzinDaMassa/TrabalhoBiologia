import { motion } from "framer-motion";
import { Lightbulb } from "lucide-react";

interface CuriosityCardProps {
  text: string;
  index?: number;
}

const CuriosityCard = ({ text, index = 0 }: CuriosityCardProps) => (
  <motion.div
    initial={{ opacity: 0, x: -10 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.06 }}
    whileHover={{ x: 4 }}
    className="flex items-start gap-4 p-4 rounded-2xl bg-cell-amber/8 border border-cell-amber/15 hover:border-cell-amber/30 transition-colors group"
  >
    <div className="w-9 h-9 rounded-xl bg-cell-amber/15 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
      <Lightbulb className="w-4 h-4 text-cell-amber" />
    </div>
    <p className="text-sm text-foreground/80 leading-relaxed">{text}</p>
  </motion.div>
);

export default CuriosityCard;
