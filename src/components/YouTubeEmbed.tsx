import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useState } from "react";

interface YouTubeEmbedProps {
  videoId: string;
  title: string;
}

const YouTubeEmbed = ({ videoId, title }: YouTubeEmbedProps) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-card overflow-hidden group"
    >
      <div className="relative aspect-video bg-muted">
        {!loaded ? (
          <button
            onClick={() => setLoaded(true)}
            className="absolute inset-0 flex flex-col items-center justify-center gap-3"
          >
            <img
              src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-foreground/30 group-hover:bg-foreground/20 transition-colors" />
            <motion.div
              whileHover={{ scale: 1.15 }}
              className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center shadow-2xl backdrop-blur-sm"
              style={{ background: "var(--gradient-bio)" }}
            >
              <Play className="w-7 h-7 text-primary-foreground ml-1" />
            </motion.div>
            <span className="relative z-10 text-sm font-semibold text-primary-foreground bg-foreground/50 backdrop-blur-sm px-4 py-1.5 rounded-xl">
              {title}
            </span>
          </button>
        ) : (
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        )}
      </div>
    </motion.div>
  );
};

export default YouTubeEmbed;
