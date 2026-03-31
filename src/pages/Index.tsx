import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight, FlaskConical, GitBranch, BookOpen, Award,
  Microscope, Sparkles, Zap, Dna, Gamepad2, Layers, GitCompare
} from "lucide-react";
import Header from "@/components/Header";

const stats = [
  { value: "3.8M", label: "células/segundo produzidas", icon: <Zap className="w-4 h-4" /> },
  { value: "46", label: "cromossomos humanos", icon: <Dna className="w-4 h-4" /> },
  { value: "8M+", label: "combinações na meiose", icon: <Sparkles className="w-4 h-4" /> },
  { value: "2→4", label: "mitose → meiose", icon: <GitBranch className="w-4 h-4" /> },
];

const features = [
  { icon: <Microscope className="w-5 h-5" />, label: "Conteúdo Científico", desc: "Explicações detalhadas de cada fase com animações interativas.", link: "/mitose", tag: "CIÊNCIA" },
  { icon: <GitCompare className="w-5 h-5" />, label: "Tabela Comparativa", desc: "Compare lado a lado os 10 aspectos principais de cada processo.", link: "/comparacao", tag: "ANÁLISE" },
  { icon: <Award className="w-5 h-5" />, label: "Quiz Dinâmico", desc: "10 perguntas aleatórias com feedback instantâneo por sessão.", link: "/quiz", tag: "TESTE" },
  { icon: <Gamepad2 className="w-5 h-5" />, label: "Minijogos", desc: "Ordene fases e associe descrições em modo jogo.", link: "/jogo", tag: "JOGAR" },
  { icon: <BookOpen className="w-5 h-5" />, label: "Glossário", desc: "22 termos de biologia celular com busca e filtro.", link: "/glossario", tag: "BUSCAR" },
  { icon: <Layers className="w-5 h-5" />, label: "Flashcards", desc: "16 cards interativos para estudar e revisar.", link: "/flashcards", tag: "REVISAR" },
];

const authors = [
  { name: "Arthur A.", role: "Pesquisa", n: "01" },
  { name: "Arthur K.", role: "Design", n: "02" },
  { name: "Fernando I.", role: "Dev", n: "03" },
  { name: "Victor P.", role: "Mídia", n: "04" },
  { name: "Larissa", role: "Revisão", n: "05" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background pb-20 lg:pb-0">
      <Header />

      {/* ──────────── HERO ──────────── */}
      <section className="relative min-h-screen grid-bg overflow-hidden flex items-center">
        {/* Ambient glow blobs */}
        <div
          className="absolute top-0 right-0 w-[50vw] h-[60vh] pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at top right, hsl(355 70% 30% / 0.15), transparent 65%)"
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[40vw] h-[50vh] pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at bottom left, hsl(185 75% 25% / 0.12), transparent 65%)"
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at 50% 50%, hsl(42 85% 30% / 0.04), transparent 70%)"
          }}
        />

        <div className="container mx-auto px-4 md:px-8 py-24 md:py-0 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen">

            {/* Left — text */}
            <div>
              {/* Issue label */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="flex items-center gap-3 mb-8"
              >
                <span
                  className="px-2 py-0.5 text-xs font-bold"
                  style={{
                    background: "hsl(42 85% 58%)",
                    color: "hsl(16 14% 4%)",
                    fontFamily: "var(--font-mono)",
                    letterSpacing: "0.15em"
                  }}
                >
                  BIOLOGIA CELULAR
                </span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "hsl(45 8% 45%)", letterSpacing: "0.1em" }}>
                  MÓDULO 01 — DIVISÃO CELULAR
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="font-display font-black mb-6"
                style={{
                  fontSize: "clamp(3.5rem, 8vw, 7rem)",
                  lineHeight: "0.92",
                  letterSpacing: "-0.03em",
                  color: "hsl(45 15% 92%)"
                }}
              >
                <span className="block">A Vida</span>
                <span className="block text-gold">se</span>
                <span className="block italic" style={{ color: "hsl(355 70% 65%)" }}>
                  Divide.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg mb-10 max-w-md leading-relaxed"
                style={{ color: "hsl(45 8% 60%)" }}
              >
                Explore mitose e meiose — os dois processos fundamentais que sustentam
                o crescimento, reparo e reprodução de todos os organismos multicelulares.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55 }}
                className="flex flex-wrap gap-3"
              >
                <Link to="/mitose">
                  <button
                    className="crosshair-btn crosshair-btn-red"
                    style={{ padding: "0.8em 1.8em", fontSize: "0.75rem" }}
                  >
                    <span className="flex items-center gap-2">
                      <FlaskConical className="w-3.5 h-3.5" />
                      Mitose
                    </span>
                  </button>
                </Link>
                <Link to="/meiose">
                  <button
                    className="crosshair-btn crosshair-btn-cyan"
                    style={{ padding: "0.8em 1.8em", fontSize: "0.75rem" }}
                  >
                    <span className="flex items-center gap-2">
                      <GitBranch className="w-3.5 h-3.5" />
                      Meiose
                    </span>
                  </button>
                </Link>
                <Link to="/quiz">
                  <button
                    className="crosshair-btn crosshair-btn-solid"
                    style={{ padding: "0.8em 1.8em", fontSize: "0.75rem" }}
                  >
                    <span className="flex items-center gap-2">
                      <Award className="w-3.5 h-3.5" />
                      Quiz
                    </span>
                  </button>
                </Link>
              </motion.div>
            </div>

            {/* Right — editorial panel */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.9 }}
              className="hidden lg:block relative"
            >
              {/* Large decorative element */}
              <div
                className="relative border"
                style={{ borderColor: "hsl(45 10% 16%)", padding: "3rem" }}
              >
                {/* Corner markers */}
                {["top-0 left-0", "top-0 right-0", "bottom-0 left-0", "bottom-0 right-0"].map((pos, i) => (
                  <div
                    key={i}
                    className={`absolute ${pos} w-4 h-4`}
                    style={{
                      borderTop: i < 2 ? "2px solid hsl(42 85% 58%)" : "none",
                      borderBottom: i >= 2 ? "2px solid hsl(42 85% 58%)" : "none",
                      borderLeft: i % 2 === 0 ? "2px solid hsl(42 85% 58%)" : "none",
                      borderRight: i % 2 === 1 ? "2px solid hsl(42 85% 58%)" : "none",
                      margin: "-1px",
                    }}
                  />
                ))}

                {/* SVG cell division illustration */}
                <svg viewBox="0 0 400 300" className="w-full" style={{ filter: "drop-shadow(0 0 30px hsl(355 70% 55% / 0.15))" }}>
                  {/* Grid */}
                  <defs>
                    <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="hsl(45 10% 16%)" strokeWidth="0.5" />
                    </pattern>
                    <radialGradient id="mitGrad" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="hsl(355 70% 55%)" stopOpacity="0.35" />
                      <stop offset="100%" stopColor="hsl(355 70% 55%)" stopOpacity="0" />
                    </radialGradient>
                    <radialGradient id="meiGrad" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="hsl(185 75% 45%)" stopOpacity="0.35" />
                      <stop offset="100%" stopColor="hsl(185 75% 45%)" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                  <rect width="400" height="300" fill="url(#grid)" />

                  {/* Mitosis: 1 → 2 */}
                  <text x="20" y="30" fill="hsl(42 85% 58%)" fontSize="8" fontFamily="Space Mono, monospace" letterSpacing="2">MITOSE</text>
                  <circle cx="100" cy="100" r="55" fill="url(#mitGrad)" stroke="hsl(355 70% 55%)" strokeWidth="1.5" />
                  {/* Nucleus */}
                  <circle cx="100" cy="100" r="20" fill="none" stroke="hsl(355 70% 55%)" strokeWidth="1" strokeDasharray="3 2" />
                  {/* Chromosomes inside */}
                  <line x1="92" y1="90" x2="92" y2="110" stroke="hsl(42 85% 58%)" strokeWidth="3" strokeLinecap="round" />
                  <line x1="100" y1="88" x2="100" y2="108" stroke="hsl(355 70% 55%)" strokeWidth="3" strokeLinecap="round" />
                  <line x1="108" y1="90" x2="108" y2="110" stroke="hsl(185 75% 45%)" strokeWidth="3" strokeLinecap="round" />
                  <text x="70" y="170" fill="hsl(45 8% 55%)" fontSize="7" fontFamily="Space Mono, monospace">2n = 46</text>

                  {/* Arrow */}
                  <path d="M165 100 L195 100" stroke="hsl(42 85% 58%)" strokeWidth="1.5" markerEnd="url(#arr)" />
                  <defs>
                    <marker id="arr" viewBox="0 0 6 6" refX="5" refY="3" markerWidth="4" markerHeight="4" orient="auto">
                      <path d="M0,0 L6,3 L0,6 Z" fill="hsl(42 85% 58%)" />
                    </marker>
                  </defs>

                  {/* 2 cells */}
                  <circle cx="230" cy="75" r="35" fill="url(#mitGrad)" stroke="hsl(355 70% 55%)" strokeWidth="1" />
                  <circle cx="230" cy="125" r="35" fill="url(#mitGrad)" stroke="hsl(355 70% 55%)" strokeWidth="1" />
                  <text x="205" y="170" fill="hsl(45 8% 55%)" fontSize="7" fontFamily="Space Mono, monospace">2n + 2n</text>

                  {/* Meiosis: 1 → 4 */}
                  <text x="20" y="215" fill="hsl(185 75% 45%)" fontSize="8" fontFamily="Space Mono, monospace" letterSpacing="2">MEIOSE</text>
                  <circle cx="80" cy="260" r="28" fill="url(#meiGrad)" stroke="hsl(185 75% 45%)" strokeWidth="1.5" />
                  <line x1="73" y1="253" x2="73" y2="267" stroke="hsl(42 85% 58%)" strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="80" y1="252" x2="80" y2="268" stroke="hsl(355 70% 55%)" strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="87" y1="253" x2="87" y2="267" stroke="hsl(185 75% 45%)" strokeWidth="2.5" strokeLinecap="round" />

                  <path d="M118 260 L148 260" stroke="hsl(42 85% 58%)" strokeWidth="1.5" markerEnd="url(#arr)" />
                  <text x="108" y="287" fill="hsl(45 8% 55%)" fontSize="7" fontFamily="Space Mono, monospace">×2</text>

                  {/* 4 cells */}
                  {[[180,245],[215,245],[250,245],[285,245]].map(([cx, cy], i) => (
                    <g key={i}>
                      <circle cx={cx} cy={cy} r={18} fill="url(#meiGrad)" stroke="hsl(185 75% 45%)" strokeWidth="1" />
                      <line x1={cx-4} y1={cy-6} x2={cx-4} y2={cy+6} stroke="hsl(42 85% 58%)" strokeWidth="2" strokeLinecap="round" />
                      <line x1={cx+4} y1={cy-6} x2={cx+4} y2={cy+6} stroke="hsl(355 70% 55%)" strokeWidth="2" strokeLinecap="round" />
                    </g>
                  ))}
                  <text x="195" y="287" fill="hsl(45 8% 55%)" fontSize="7" fontFamily="Space Mono, monospace">n + n + n + n</text>
                </svg>

                {/* Label */}
                <div
                  className="mt-4 text-center"
                  style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.2em", color: "hsl(45 8% 35%)" }}
                >
                  FIG. 01 — ESQUEMA DE DIVISÃO CELULAR
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.2em", color: "hsl(45 8% 35%)" }}>
            SCROLL
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-px h-8"
            style={{ background: "linear-gradient(to bottom, hsl(42 85% 58%/0.5), transparent)" }}
          />
        </motion.div>
      </section>

      {/* ──────────── STATS ──────────── */}
      <section className="py-12 border-y" style={{ borderColor: "hsl(45 10% 12%)" }}>
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="py-8 px-6 border-r last:border-r-0 first:pl-0"
                style={{ borderColor: "hsl(45 10% 12%)" }}
              >
                <div className="stat-block">
                  <div
                    className="font-display font-black mb-1"
                    style={{
                      fontSize: "2.5rem",
                      lineHeight: 1,
                      background: "var(--grad-gold)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {s.value}
                  </div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.1em", color: "hsl(45 8% 45%)" }}>
                    {s.label.toUpperCase()}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────── MAIN PROCESSES ──────────── */}
      <section className="py-24 container mx-auto px-4 md:px-8">
        <div className="section-rule">
          <div>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.2em", color: "hsl(42 85% 58%)" }}>
              02 — PROCESSOS
            </span>
            <h2
              className="font-display font-bold"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.05, letterSpacing: "-0.02em", color: "hsl(45 15% 92%)" }}
            >
              Dois Processos,<br />
              <span className="text-gold">Uma Missão</span>
            </h2>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Mitosis card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden"
            style={{
              background: "hsl(355 15% 6%)",
              border: "1px solid hsl(355 20% 14%)",
              borderTop: "3px solid hsl(355 70% 55%)",
              padding: "2.5rem",
            }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 pointer-events-none" style={{
              background: "radial-gradient(ellipse at top right, hsl(355 70% 30% / 0.12), transparent 70%)"
            }} />

            <div className="relative z-10">
              <div className="flex items-start justify-between mb-8">
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.2em", color: "hsl(355 70% 55%)" }}>
                  DIVISÃO EQUACIONAL
                </span>
                <span
                  className="font-display font-black"
                  style={{ fontSize: "5rem", lineHeight: 1, color: "hsl(355 70% 55% / 0.08)", letterSpacing: "-0.04em" }}
                >
                  01
                </span>
              </div>

              <h3
                className="font-display font-bold mb-4"
                style={{ fontSize: "3.5rem", lineHeight: 0.95, letterSpacing: "-0.03em", color: "hsl(355 60% 75%)" }}
              >
                Mitose
              </h3>

              <p className="mb-6 leading-relaxed" style={{ color: "hsl(45 8% 58%)", fontSize: "0.9rem" }}>
                Produz <strong style={{ color: "hsl(45 12% 80%)" }}>2 células-filhas geneticamente idênticas</strong> à
                célula-mãe. Essencial para crescimento, reparo e regeneração de tecidos.
              </p>

              {/* Mini stats */}
              <div className="grid grid-cols-3 gap-3 mb-8">
                {[
                  { v: "2", l: "células" },
                  { v: "2n", l: "diploide" },
                  { v: "5", l: "fases" },
                ].map((s, i) => (
                  <div
                    key={i}
                    className="text-center py-3"
                    style={{ borderTop: "1px solid hsl(355 20% 14%)" }}
                  >
                    <div
                      className="font-display font-bold"
                      style={{ fontSize: "1.8rem", color: "hsl(355 60% 65%)", lineHeight: 1 }}
                    >
                      {s.v}
                    </div>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", color: "hsl(45 8% 45%)", letterSpacing: "0.1em" }}>
                      {s.l.toUpperCase()}
                    </div>
                  </div>
                ))}
              </div>

              <Link to="/mitose">
                <button className="crosshair-btn crosshair-btn-red" style={{ width: "100%" }}>
                  <span className="flex items-center justify-center gap-2">
                    Explorar Mitose
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </button>
              </Link>
            </div>
          </motion.div>

          {/* Meiosis card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="group relative overflow-hidden"
            style={{
              background: "hsl(185 15% 6%)",
              border: "1px solid hsl(185 20% 14%)",
              borderTop: "3px solid hsl(185 75% 45%)",
              padding: "2.5rem",
            }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 pointer-events-none" style={{
              background: "radial-gradient(ellipse at top right, hsl(185 75% 25% / 0.12), transparent 70%)"
            }} />

            <div className="relative z-10">
              <div className="flex items-start justify-between mb-8">
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.2em", color: "hsl(185 75% 45%)" }}>
                  DIVISÃO REDUCIONAL
                </span>
                <span
                  className="font-display font-black"
                  style={{ fontSize: "5rem", lineHeight: 1, color: "hsl(185 75% 45% / 0.08)", letterSpacing: "-0.04em" }}
                >
                  02
                </span>
              </div>

              <h3
                className="font-display font-bold mb-4"
                style={{ fontSize: "3.5rem", lineHeight: 0.95, letterSpacing: "-0.03em", color: "hsl(185 60% 70%)" }}
              >
                Meiose
              </h3>

              <p className="mb-6 leading-relaxed" style={{ color: "hsl(45 8% 58%)", fontSize: "0.9rem" }}>
                Produz <strong style={{ color: "hsl(45 12% 80%)" }}>4 células haploides geneticamente diferentes</strong>.
                Fundamental para a reprodução sexuada e variabilidade genética das espécies.
              </p>

              <div className="grid grid-cols-3 gap-3 mb-8">
                {[
                  { v: "4", l: "células" },
                  { v: "n", l: "haploide" },
                  { v: "9", l: "fases" },
                ].map((s, i) => (
                  <div
                    key={i}
                    className="text-center py-3"
                    style={{ borderTop: "1px solid hsl(185 20% 14%)" }}
                  >
                    <div
                      className="font-display font-bold"
                      style={{ fontSize: "1.8rem", color: "hsl(185 60% 60%)", lineHeight: 1 }}
                    >
                      {s.v}
                    </div>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", color: "hsl(45 8% 45%)", letterSpacing: "0.1em" }}>
                      {s.l.toUpperCase()}
                    </div>
                  </div>
                ))}
              </div>

              <Link to="/meiose">
                <button className="crosshair-btn crosshair-btn-cyan" style={{ width: "100%" }}>
                  <span className="flex items-center justify-center gap-2">
                    Explorar Meiose
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ──────────── FEATURES GRID ──────────── */}
      <section
        className="py-24 border-t"
        style={{ borderColor: "hsl(45 10% 10%)", background: "hsl(16 12% 6%)" }}
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="section-rule">
            <div>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.2em", color: "hsl(42 85% 58%)" }}>
                03 — RECURSOS
              </span>
              <h2
                className="font-display font-bold"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.02em", color: "hsl(45 15% 92%)" }}
              >
                Ferramentas de Estudo
              </h2>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: "hsl(45 10% 10%)" }}>
            {features.map((f, i) => (
              <Link key={i} to={f.link}>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  whileHover={{ background: "hsl(16 12% 10%)" }}
                  className="p-8 group"
                  style={{ background: "hsl(16 12% 6%)", transition: "background 0.2s" }}
                >
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className="p-2.5"
                      style={{
                        border: "1px solid hsl(42 85% 58% / 0.3)",
                        color: "hsl(42 85% 58%)",
                      }}
                    >
                      {f.icon}
                    </div>
                    <span
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.15em", color: "hsl(42 85% 58%)" }}
                    >
                      {f.tag}
                    </span>
                  </div>
                  <h3
                    className="font-display font-bold mb-2"
                    style={{ fontSize: "1.3rem", color: "hsl(45 12% 85%)" }}
                  >
                    {f.label}
                  </h3>
                  <p style={{ fontSize: "0.85rem", color: "hsl(45 8% 52%)", lineHeight: 1.6 }}>
                    {f.desc}
                  </p>

                  <div
                    className="mt-6 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-all"
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.65rem",
                      letterSpacing: "0.1em",
                      color: "hsl(42 85% 58%)",
                      transform: "translateX(-8px)",
                      transitionProperty: "opacity, transform",
                    }}
                  >
                    ACESSAR <ArrowRight className="w-3 h-3" />
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────── CTA ──────────── */}
      <section className="py-24 relative overflow-hidden" style={{ background: "hsl(16 14% 4%)" }}>
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse at center, hsl(42 85% 30% / 0.08), transparent 70%)" }}
        />
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <span
              className="block mb-4"
              style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.25em", color: "hsl(42 85% 58%)" }}
            >
              ◆ PRONTO PARA TESTAR?
            </span>
            <h2
              className="font-display font-black mb-6 mx-auto"
              style={{
                fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
                lineHeight: 0.95,
                letterSpacing: "-0.03em",
                color: "hsl(45 15% 92%)",
                maxWidth: "700px"
              }}
            >
              Quanto você{" "}
              <span
                style={{
                  background: "var(--grad-gold)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                sabe?
              </span>
            </h2>
            <p className="mb-10 max-w-md mx-auto" style={{ color: "hsl(45 8% 55%)" }}>
              10 perguntas aleatórias cobrindo mitose, meiose e biologia celular geral.
            </p>
            <Link to="/quiz">
              <button
                className="crosshair-btn crosshair-btn-solid"
                style={{ padding: "1em 3em", fontSize: "0.8rem" }}
              >
                <span className="flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  Iniciar Quiz
                </span>
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ──────────── TEAM ──────────── */}
      <section
        className="py-20 border-t"
        style={{ borderColor: "hsl(45 10% 10%)" }}
      >
        <div className="container mx-auto px-4 md:px-8">
          <div
            className="flex items-center gap-4 mb-12"
            style={{ borderBottom: "1px solid hsl(45 10% 12%)", paddingBottom: "1rem" }}
          >
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.2em", color: "hsl(42 85% 58%)" }}>
              04 — EQUIPE
            </span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.1em", color: "hsl(45 8% 35%)" }}>
              SESI SENAI — PROJETO EDUCACIONAL
            </span>
          </div>

          <div className="flex flex-wrap gap-0">
            {authors.map((a, i) => (
              <motion.div
                key={a.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="py-4 pr-10 border-r last:border-r-0"
                style={{ borderColor: "hsl(45 10% 12%)" }}
              >
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.55rem", color: "hsl(42 85% 58%)", letterSpacing: "0.15em", marginBottom: "0.25rem" }}>
                  {a.n}
                </div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", color: "hsl(45 12% 80%)", fontWeight: 700, lineHeight: 1.1, marginLeft: i > 0 ? "1.5rem" : 0 }}>
                  {a.name}
                </div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", color: "hsl(45 8% 40%)", letterSpacing: "0.1em", marginLeft: i > 0 ? "1.5rem" : 0 }}>
                  {a.role.toUpperCase()}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="py-8 border-t"
        style={{ borderColor: "hsl(45 10% 10%)", background: "hsl(16 14% 3%)" }}
      >
        <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.1em", color: "hsl(45 8% 35%)" }}>
            © {new Date().getFullYear()} CÉLULAVIVA — BIOLOGIA CELULAR INTERATIVA
          </span>
          <div className="flex gap-6">
            {["/mitose", "/meiose", "/comparacao", "/quiz", "/glossario"].map((path) => (
              <Link
                key={path}
                to={path}
                style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.1em", color: "hsl(45 8% 35%)", textTransform: "uppercase", transition: "color 0.15s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "hsl(42 85% 58%)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "hsl(45 8% 35%)")}
              >
                {path.replace("/", "")}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
