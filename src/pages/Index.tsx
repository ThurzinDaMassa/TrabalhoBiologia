import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, FlaskConical, GitBranch, BookOpen, Award, Users, Microscope, Sparkles, Zap, Dna } from "lucide-react";
import Header from "@/components/Header";
import heroBg from "@/assets/hero-bg.jpg";
import mitosisImg from "@/assets/mitosis-hero.jpg";
import meiosisImg from "@/assets/meiosis-hero.jpg";

const stats = [
  { value: "3.8M", label: "Células/segundo", icon: <Zap className="w-5 h-5" /> },
  { value: "46", label: "Cromossomos humanos", icon: <Dna className="w-5 h-5" /> },
  { value: "23", label: "Pares de homólogos", icon: <GitBranch className="w-5 h-5" /> },
  { value: "8M+", label: "Combinações possíveis", icon: <Sparkles className="w-5 h-5" /> },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero with background image */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        </div>

        {/* Floating blobs */}
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-primary/10 cell-blob" />
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-secondary/10 cell-blob" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/3 right-10 w-32 h-32 bg-accent/8 cell-blob" style={{ animationDelay: "4s" }} />

        <div className="container mx-auto px-4 py-24 md:py-36 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8"
            >
              <Microscope className="w-4 h-4 animate-spin" style={{ animationDuration: "3s" }} />
              Biologia Celular Interativa
            </motion.div>

            <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-8">
              Divisão Celular:{" "}
              <span className="gradient-text-mitosis">Mitose</span>
              <br className="hidden md:block" />
              {" "}e{" "}
              <span className="gradient-text-meiosis">Meiose</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
              Explore, compare e aprenda sobre os dois processos fundamentais de
              divisão celular de forma interativa e visual.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/mitose">
                <motion.button
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-display font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
                >
                  <FlaskConical className="w-5 h-5" />
                  Explorar Mitose
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <Link to="/meiose">
                <motion.button
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-secondary text-secondary-foreground font-display font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
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

      {/* Stats banner */}
      <section className="relative -mt-8 z-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6 md:p-8"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 text-primary mb-3">
                    {stat.icon}
                  </div>
                  <div className="font-display text-2xl md:text-3xl font-bold text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Explore cards with images */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Explore os Processos
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Cada tipo de divisão celular tem um papel essencial na vida.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Link to="/mitose" className="group">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="glass-card overflow-hidden h-full"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={mitosisImg}
                  alt="Ilustração da mitose"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  width={1024}
                  height={576}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/90 text-primary-foreground text-xs font-medium">
                  <FlaskConical className="w-3 h-3" />
                  Divisão Equacional
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl font-bold gradient-text-mitosis mb-3">Mitose</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Produz duas células-filhas geneticamente idênticas. Essencial para crescimento, reparo e manutenção dos tecidos.
                </p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5"><Microscope className="w-3.5 h-3.5" /> 5 fases</span>
                  <span className="flex items-center gap-1.5"><Users className="w-3.5 h-3.5" /> 2 células-filhas</span>
                  <span className="flex items-center gap-1.5"><Dna className="w-3.5 h-3.5" /> Diploides (2n)</span>
                </div>
              </div>
            </motion.div>
          </Link>

          <Link to="/meiose" className="group">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="glass-card overflow-hidden h-full"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={meiosisImg}
                  alt="Ilustração da meiose"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  width={1024}
                  height={576}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/90 text-secondary-foreground text-xs font-medium">
                  <GitBranch className="w-3 h-3" />
                  Divisão Reducional
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl font-bold gradient-text-meiosis mb-3">Meiose</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Produz quatro células haploides geneticamente diferentes. Fundamental para a reprodução sexuada e variabilidade genética.
                </p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5"><Microscope className="w-3.5 h-3.5" /> 8 fases</span>
                  <span className="flex items-center gap-1.5"><Users className="w-3.5 h-3.5" /> 4 células-filhas</span>
                  <span className="flex items-center gap-1.5"><Dna className="w-3.5 h-3.5" /> Haploides (n)</span>
                </div>
              </div>
            </motion.div>
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: <BookOpen className="w-6 h-6" />,
              title: "Conteúdo Detalhado",
              desc: "Explicações completas de cada fase com descrições expandíveis e ilustrações científicas.",
              link: "/mitose",
              color: "bg-primary/10 text-primary",
            },
            {
              icon: <GitBranch className="w-6 h-6" />,
              title: "Tabela Comparativa",
              desc: "Compare lado a lado os 10 principais aspectos de mitose e meiose de forma visual.",
              link: "/comparacao",
              color: "bg-accent/10 text-accent",
            },
            {
              icon: <Award className="w-6 h-6" />,
              title: "Quiz Interativo",
              desc: "10 perguntas com feedback instantâneo para testar e fixar seus conhecimentos.",
              link: "/quiz",
              color: "bg-cell-amber/10 text-cell-amber",
            },
          ].map((item, i) => (
            <Link to={item.link} key={i}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -4 }}
                className="glass-card p-6 h-full group cursor-pointer"
              >
                <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <h3 className="font-display font-semibold text-lg mb-2 text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  Explorar <ArrowRight className="w-4 h-4" />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl p-10 md:p-16 text-center"
          style={{ background: "var(--gradient-bio)" }}
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-4 left-10 w-24 h-24 border border-white/30 rounded-full" />
            <div className="absolute bottom-8 right-16 w-32 h-32 border border-white/20 rounded-full" />
            <div className="absolute top-1/2 left-1/3 w-16 h-16 border border-white/20 rounded-full" />
          </div>
          <div className="relative z-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Pronto para testar seus conhecimentos?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
              Faça o quiz e descubra quanto você sabe sobre divisão celular!
            </p>
            <Link to="/quiz">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-background text-foreground font-display font-semibold text-lg shadow-xl hover:shadow-2xl transition-all"
              >
                <Award className="w-5 h-5" />
                Começar o Quiz
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: "var(--gradient-bio)" }}>
                <Microscope className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-display font-bold gradient-text-bio">CélulaViva</span>
            </div>
            <p className="text-sm text-muted-foreground">
              🧬 Aprendendo biologia celular de forma interativa e visual
            </p>
            <div className="flex gap-4">
              <Link to="/mitose" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Mitose</Link>
              <Link to="/meiose" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Meiose</Link>
              <Link to="/comparacao" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Comparação</Link>
              <Link to="/quiz" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Quiz</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
