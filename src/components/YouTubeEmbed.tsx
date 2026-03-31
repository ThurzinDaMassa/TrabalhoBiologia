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
    <div
      className="overflow-hidden group"
      style={{ border: "1px solid hsl(45 10% 12%)", background: "hsl(16 12% 6%)" }}
    >
      <div className="relative aspect-video bg-black">
        {!loaded ? (
          <button
            onClick={() => setLoaded(true)}
            className="absolute inset-0 flex flex-col items-center justify-center gap-4 w-full"
          >
            <img
              src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover opacity-50 transition-opacity duration-300 group-hover:opacity-70"
              loading="lazy"
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, hsl(16 14% 4% / 0.8), transparent 50%)" }} />
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="relative z-10 w-14 h-14 flex items-center justify-center"
              style={{ background: "hsl(42 85% 58%)", borderRadius: "2px" }}
            >
              <Play className="w-6 h-6 ml-0.5" style={{ color: "hsl(16 14% 4%)" }} />
            </motion.div>
            <span
              className="relative z-10 px-3 py-1"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.65rem",
                letterSpacing: "0.1em",
                color: "hsl(45 12% 80%)",
                background: "hsl(16 14% 4% / 0.8)",
              }}
            >
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
    </div>
  );
};

export default YouTubeEmbed;
