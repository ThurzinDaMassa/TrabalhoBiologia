import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Microscope, FlaskConical, GitBranch, GitCompare,
  Brain, Gamepad2, Home, BookOpen, Layers, X, Menu,
  Network, FileText
} from "lucide-react";
import { useState, useEffect } from "react";

const navItems = [
  { path: "/", label: "Início", short: "Home", icon: <Home className="w-3.5 h-3.5" /> },
  { path: "/mitose", label: "Mitose", short: "Mitose", icon: <FlaskConical className="w-3.5 h-3.5" /> },
  { path: "/meiose", label: "Meiose", short: "Meiose", icon: <GitBranch className="w-3.5 h-3.5" /> },
  { path: "/comparacao", label: "Comparação", short: "Comp.", icon: <GitCompare className="w-3.5 h-3.5" /> },
  { path: "/resumo", label: "Resumo", short: "Res.", icon: <FileText className="w-3.5 h-3.5" /> },
  { path: "/quiz", label: "Quiz", short: "Quiz", icon: <Brain className="w-3.5 h-3.5" /> },
  { path: "/jogo", label: "Jogo", short: "Jogo", icon: <Gamepad2 className="w-3.5 h-3.5" /> },
  { path: "/mapa", label: "Mapa", short: "Mapa", icon: <Network className="w-3.5 h-3.5" /> },
  { path: "/glossario", label: "Glossário", short: "Glos.", icon: <BookOpen className="w-3.5 h-3.5" /> },
  { path: "/flashcards", label: "Flashcards", short: "Cards", icon: <Layers className="w-3.5 h-3.5" /> },
];

const TICKER_ITEMS = [
  "DIVISÃO CELULAR", "MITOSE", "MEIOSE", "CROSSING-OVER", "CROMOSSOMOS",
  "GAMETAS", "INTERFASE", "VARIABILIDADE GENÉTICA", "CENTRÔMERO",
  "PRÓFASE I", "CITOCINESE", "BIVALENTES", "FUSO MITÓTICO"
];

const Header = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  const tickerText = TICKER_ITEMS.join("  ◆  ");

  return (
    <>
      {/* Ticker tape */}
      <div className="ticker-wrapper relative overflow-hidden" style={{ zIndex: 60 }}>
        <div className="ticker-content inline-block">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="inline-block px-6">{tickerText}</span>
          ))}
        </div>
      </div>

      {/* Main nav */}
      <header
        className="sticky top-0 z-50 transition-all duration-300"
        style={{
          background: scrolled
            ? "hsl(16 14% 4% / 0.97)"
            : "hsl(16 14% 4% / 0.85)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid hsl(45 10% 12%)",
        }}
      >
        {/* Thin gold line at top */}
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, hsl(42 85% 58% / 0.6), transparent)" }}
        />

        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 group shrink-0">
              <motion.div
                whileHover={{ rotate: -15 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="w-8 h-8 flex items-center justify-center"
                style={{ background: "hsl(42 85% 58%)", borderRadius: "2px" }}
              >
                <Microscope className="w-4.5 h-4.5" style={{ color: "hsl(16 14% 4%)" }} />
              </motion.div>
              <div>
                <span
                  className="font-display font-bold text-lg leading-none block"
                  style={{ color: "hsl(45 15% 92%)", letterSpacing: "-0.02em" }}
                >
                  Célula
                  <span style={{ color: "hsl(42 85% 58%)" }}>Viva</span>
                </span>
                <span
                  className="text-xs block leading-none mt-0.5 opacity-40"
                  style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.15em" }}
                >
                  BIOLOGIA CELULAR
                </span>
              </div>
            </Link>

            {/* Desktop Nav — scrollable on smaller screens */}
            <nav className="hidden lg:flex items-center gap-0 overflow-x-auto">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`nav-item whitespace-nowrap ${isActive ? "active" : ""}`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Mobile menu toggle */}
            <button
              className="lg:hidden p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              style={{ color: "hsl(42 85% 58%)" }}
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden overflow-hidden"
              style={{ borderTop: "1px solid hsl(45 10% 12%)" }}
            >
              <div className="container mx-auto px-4 py-4 grid grid-cols-2 gap-1">
                {navItems.map((item) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="flex items-center gap-2 px-3 py-2.5"
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.7rem",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: isActive ? "hsl(42 85% 58%)" : "hsl(45 8% 55%)",
                        borderLeft: isActive ? "2px solid hsl(42 85% 58%)" : "2px solid transparent",
                        transition: "all 0.15s",
                      }}
                    >
                      {item.icon}
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile bottom bar — 5 most important items */}
      <nav
        className="lg:hidden fixed bottom-0 left-0 right-0 z-50"
        style={{
          background: "hsl(16 14% 4% / 0.97)",
          backdropFilter: "blur(20px)",
          borderTop: "1px solid hsl(45 10% 12%)",
        }}
      >
        <div className="grid grid-cols-5 h-14">
          {[navItems[0], navItems[1], navItems[2], navItems[4], navItems[5]].map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className="flex flex-col items-center justify-center gap-0.5"
                style={{ color: isActive ? "hsl(42 85% 58%)" : "hsl(45 8% 45%)" }}
              >
                {item.icon}
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.5rem", letterSpacing: "0.05em" }}>
                  {item.short}
                </span>
                {isActive && (
                  <motion.div
                    layoutId="tab-dot"
                    className="w-1 h-1 rounded-full"
                    style={{ background: "hsl(42 85% 58%)" }}
                  />
                )}
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Header;
