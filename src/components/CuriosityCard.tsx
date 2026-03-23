import { motion } from "framer-motion";
import { Lightbulb } from "lucide-react";

interface CuriosityCardProps {
  text: string;
  index?: number;
}

const CuriosityCard = ({ text, index = 0 }: CuriosityCardProps) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="flex items-start gap-3 p-4 rounded-xl bg-cell-amber/10 border border-cell-amber/20"
  >
    <Lightbulb className="w-5 h-5 text-cell-amber shrink-0 mt-0.5" />
    <p className="text-sm text-foreground/80">{text}</p>
  </motion.div>
);

export default CuriosityCard;
