import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, FlaskConical, GitBranch, BookOpen, Award, Users, Microscope, Sparkles, Zap, Dna, Gamepad2, Layers } from "lucide-react";
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

const authors = [
  { name: "Arthur A.", role: "Pesquisa & Conteúdo", emoji: "🔬" },
  { name: "Arthur K.", role: "Design & UX", emoji: "🎨" },
  { name: "Fernando I.", role: "Desenvolvimento", emoji: "💻" },
  { name: "Victor P.", role: "Ilustrações & Mídia", emoji: "🖼️" },
  { name: "Larissa", role: "Revisão Científica", emoji: "📚" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover opacity-20 dark:opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background" />
        </div>

        {/* Floating blobs */}
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary/8 cell-blob blur-xl" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-secondary/8 cell-blob blur-xl" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/3 right-10 w-40 h-40 bg-accent/6 cell-blob blur-lg" style={{ animationDelay: "4s" }} />

        <div className="container mx-auto px-4 py-28 md:py-40 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8 backdrop-blur-sm"
            >
              <Microscope className="w-4 h-4" />
              Biologia Celular Interativa
            </motion.div>

            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[1.05] mb-8 tracking-tight">
              Divisão Celular:{" "}
              <span className="gradient-text-mitosis">Mitose</span>
              <br className="hidden md:block" />
              {" "}e{" "}
              <span className="gradient-text-meiosis">Meiose</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-14 leading-relaxed">
              Explore, compare e aprenda sobre os dois processos fundamentais de
              divisão celular de forma interativa e visual.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/mitose">
                <motion.button
                  whileHover={{ scale: 1.04, y: -3 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-primary-foreground font-display font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
                  style={{ background: "var(--gradient-mitosis)" }}
                >
                  <FlaskConical className="w-5 h-5" />
                  Explorar Mitose
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <Link to="/meiose">
                <motion.button
                  whileHover={{ scale: 1.04, y: -3 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-secondary-foreground font-display font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
                  style={{ background: "var(--gradient-meiosis)" }}
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
      <section className="relative -mt-10 z-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-10"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center group"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10 text-primary mb-3 group-hover:scale-110 transition-transform">
                    {stat.icon}
                  </div>
                  <div className="font-display text-3xl md:text-4xl font-extrabold text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground mt-1.5 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Explore cards */}
      <section className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Conteúdo principal</span>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold text-foreground mt-2 mb-4">
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
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="glass-card overflow-hidden h-full"
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={mitosisImg}
                  alt="Ilustração da mitose"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  width={1024}
                  height={576}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-primary-foreground text-xs font-semibold backdrop-blur-sm" style={{ background: "var(--gradient-mitosis)" }}>
                  <FlaskConical className="w-3 h-3" />
                  Divisão Equacional
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl font-bold gradient-text-mitosis mb-3">Mitose</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  Produz duas células-filhas geneticamente idênticas. Essencial para crescimento, reparo e manutenção dos tecidos.
                </p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5"><Microscope className="w-3.5 h-3.5" /> 5 fases</span>
                  <span className="flex items-center gap-1.5"><Users className="w-3.5 h-3.5" /> 2 células</span>
                  <span className="flex items-center gap-1.5"><Dna className="w-3.5 h-3.5" /> 2n</span>
                </div>
                <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 transition-all translate-x-0 group-hover:translate-x-1">
                  Explorar <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          </Link>

          <Link to="/meiose" className="group">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="glass-card overflow-hidden h-full"
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={meiosisImg}
                  alt="Ilustração da meiose"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  width={1024}
                  height={576}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-secondary-foreground text-xs font-semibold backdrop-blur-sm" style={{ background: "var(--gradient-meiosis)" }}>
                  <GitBranch className="w-3 h-3" />
                  Divisão Reducional
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl font-bold gradient-text-meiosis mb-3">Meiose</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  Produz quatro células haploides geneticamente diferentes. Fundamental para a reprodução sexuada e variabilidade genética.
                </p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5"><Microscope className="w-3.5 h-3.5" /> 8 fases</span>
                  <span className="flex items-center gap-1.5"><Users className="w-3.5 h-3.5" /> 4 células</span>
                  <span className="flex items-center gap-1.5"><Dna className="w-3.5 h-3.5" /> n</span>
                </div>
                <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-secondary opacity-0 group-hover:opacity-100 transition-all translate-x-0 group-hover:translate-x-1">
                  Explorar <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {[
            {
              icon: <BookOpen className="w-6 h-6" />,
              title: "Conteúdo Detalhado",
              desc: "Explicações completas de cada fase com ilustrações científicas.",
              link: "/mitose",
              color: "bg-primary/10 text-primary",
            },
            {
              icon: <GitBranch className="w-6 h-6" />,
              title: "Tabela Comparativa",
              desc: "Compare os 10 principais aspectos de mitose e meiose.",
              link: "/comparacao",
              color: "bg-accent/10 text-accent",
            },
            {
              icon: <Award className="w-6 h-6" />,
              title: "Quiz Interativo",
              desc: "10 perguntas aleatórias com feedback instantâneo.",
              link: "/quiz",
              color: "bg-cell-amber/10 text-cell-amber",
            },
            {
              icon: <Gamepad2 className="w-6 h-6" />,
              title: "Minigames",
              desc: "Ordene fases e associe descrições jogando.",
              link: "/jogo",
              color: "bg-secondary/10 text-secondary",
            },
            {
              icon: <BookOpen className="w-6 h-6" />,
              title: "Glossário",
              desc: "Pesquise termos de biologia celular com definições detalhadas.",
              link: "/glossario",
              color: "bg-cell-purple/10 text-cell-purple",
            },
            {
              icon: <Layers className="w-6 h-6" />,
              title: "Flashcards",
              desc: "Estude com cards interativos que viram ao clique.",
              link: "/flashcards",
              color: "bg-cell-amber/10 text-cell-amber",
            },
            {
              icon: <Clock className="w-6 h-6" />,
              title: "Linha do Tempo",
              desc: "Visualize o ciclo celular com tempos reais de cada fase.",
              link: "/timeline",
              color: "bg-accent/10 text-accent",
            },
          ].map((item, i) => (
            <Link to={item.link} key={i}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -5 }}
                className="glass-card p-6 h-full group cursor-pointer"
              >
                <div className={`w-12 h-12 rounded-2xl ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <h3 className="font-display font-bold text-base mb-2 text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  Explorar <ArrowRight className="w-3.5 h-3.5" />
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
          className="relative overflow-hidden rounded-3xl p-12 md:p-20 text-center"
          style={{ background: "var(--gradient-bio)" }}
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-4 left-10 w-32 h-32 border-2 border-white/30 rounded-full" />
            <div className="absolute bottom-8 right-16 w-40 h-40 border-2 border-white/20 rounded-full" />
            <div className="absolute top-1/2 left-1/3 w-20 h-20 border-2 border-white/20 rounded-full" />
            <div className="absolute top-10 right-1/4 w-12 h-12 border border-white/30 rounded-full" />
          </div>
          <div className="relative z-10">
            <h2 className="font-display text-3xl md:text-5xl font-extrabold text-primary-foreground mb-5">
              Pronto para testar seus conhecimentos?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-10 max-w-xl mx-auto">
              Faça o quiz e descubra quanto você sabe sobre divisão celular!
            </p>
            <Link to="/quiz">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-background text-foreground font-display font-bold text-lg shadow-2xl hover:shadow-3xl transition-all"
              >
                <Award className="w-5 h-5" />
                Começar o Quiz
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Team / Authors */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Equipe</span>
          <h2 className="font-display text-2xl md:text-3xl font-extrabold text-foreground mt-2 mb-3">
            Criado por
          </h2>
          <p className="text-muted-foreground text-sm max-w-md mx-auto">
            Este projeto foi desenvolvido com dedicação por estudantes apaixonados por biologia.
          </p>
        </motion.div>
        <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
          {authors.map((author, i) => (
            <motion.div
              key={author.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="glass-card px-6 py-5 text-center min-w-[140px] group"
            >
              <div className="text-3xl mb-2 group-hover:scale-125 transition-transform">{author.emoji}</div>
              <h4 className="font-display font-bold text-foreground text-sm">{author.name}</h4>
              <p className="text-xs text-muted-foreground mt-1">{author.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/30 py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: "var(--gradient-bio)" }}>
                <Microscope className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-display font-bold text-lg gradient-text-bio">AflavScience</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} AflavScience — Biologia Celular Interativa
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/mitose" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Mitose</Link>
              <Link to="/meiose" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Meiose</Link>
              <Link to="/comparacao" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Comparação</Link>
              <Link to="/quiz" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Quiz</Link>
              <Link to="/jogo" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Jogo</Link>
              <Link to="/glossario" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Glossário</Link>
              <Link to="/flashcards" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Flashcards</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
