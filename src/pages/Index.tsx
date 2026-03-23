import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Dna, FlaskConical, GitBranch } from "lucide-react";
import Header from "@/components/Header";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Floating blobs */}
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-primary/10 cell-blob" />
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-secondary/10 cell-blob" style={{ animationDelay: "2s" }} />

        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Dna className="w-4 h-4" />
              Biologia Celular Interativa
            </div>

            <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight mb-6">
              Divisão Celular:{" "}
              <span className="gradient-text-mitosis">Mitose</span> e{" "}
              <span className="gradient-text-meiosis">Meiose</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              Explore, compare e aprenda sobre os dois processos fundamentais de
              divisão celular de forma interativa e visual. Navegue pelas fases,
              teste seus conhecimentos e descubra curiosidades!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/mitose">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-display font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  <FlaskConical className="w-5 h-5" />
                  Explorar Mitose
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <Link to="/meiose">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-secondary text-secondary-foreground font-display font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  <GitBranch className="w-5 h-5" />
                  Explorar Meiose
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features cards */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: <FlaskConical className="w-6 h-6" />,
              title: "Fases Interativas",
              desc: "Clique em cada fase para ver descrições detalhadas e animações dos processos celulares.",
            },
            {
              icon: <GitBranch className="w-6 h-6" />,
              title: "Compare Processos",
              desc: "Tabela comparativa interativa destacando semelhanças e diferenças entre mitose e meiose.",
            },
            {
              icon: <Dna className="w-6 h-6" />,
              title: "Teste seus Conhecimentos",
              desc: "Quiz com feedback instantâneo para fixar o conteúdo e acompanhar seu aprendizado.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass-card p-6 hover:scale-[1.02] transition-transform"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                {item.icon}
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-8 text-center text-sm text-muted-foreground">
        <div className="container mx-auto px-4">
          <p>🧬 BioCell — Aprendendo biologia de forma interativa</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
