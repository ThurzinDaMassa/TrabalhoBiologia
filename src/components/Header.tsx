import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Microscope, Sun, Moon, FlaskConical, GitBranch, GitCompare, Brain, Gamepad2, Home } from "lucide-react";
import { useState, useEffect } from "react";

const navItems = [
  { path: "/", label: "Início", icon: <Home className="w-4 h-4" /> },
  { path: "/mitose", label: "Mitose", icon: <FlaskConical className="w-4 h-4" /> },
  { path: "/meiose", label: "Meiose", icon: <GitBranch className="w-4 h-4" /> },
  { path: "/comparacao", label: "Comparação", icon: <GitCompare className="w-4 h-4" /> },
  { path: "/quiz", label: "Quiz", icon: <Brain className="w-4 h-4" /> },
  { path: "/jogo", label: "Jogo", icon: <Gamepad2 className="w-4 h-4" /> },
];

const Header = () => {
  const location = useLocation();
  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark" ||
        (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
    return false;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <>
      {/* Desktop top bar */}
      <header className="sticky top-0 z-50 backdrop-blur-2xl bg-background/70 border-b border-border/30">
        <div className="container mx-auto px-4 py-2.5 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5 group">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6, type: "spring" }}
              className="w-9 h-9 rounded-xl flex items-center justify-center"
              style={{ background: "var(--gradient-bio)" }}
            >
              <Microscope className="w-5 h-5 text-primary-foreground" />
            </motion.div>
            <span className="font-display font-bold text-lg tracking-tight gradient-text-bio">
              CélulaViva
            </span>
          </Link>

          {/* Desktop nav — pill style */}
          <nav className="hidden md:flex items-center gap-0.5 bg-muted/60 rounded-2xl p-1 border border-border/30">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className="relative"
                >
                  <motion.div
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-colors relative z-10 ${
                      isActive
                        ? "text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {item.icon}
                    {item.label}
                  </motion.div>
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-xl"
                      style={{ background: "var(--gradient-bio)" }}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Theme toggle */}
          <button
            onClick={() => setDark(!dark)}
            className="p-2.5 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-all border border-transparent hover:border-border/50"
            aria-label="Alternar tema"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={dark ? "moon" : "sun"}
                initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 90, opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
              >
                {dark ? <Sun size={18} /> : <Moon size={18} />}
              </motion.div>
            </AnimatePresence>
          </button>
        </div>
      </header>

      {/* Mobile bottom tab bar */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-2xl border-t border-border/30 pb-safe">
        <div className="flex items-center justify-around px-2 py-1.5">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className="relative flex flex-col items-center gap-0.5 py-1 px-3"
              >
                <motion.div
                  className={`p-1.5 rounded-xl transition-colors ${
                    isActive ? "text-primary" : "text-muted-foreground"
                  }`}
                  whileTap={{ scale: 0.9 }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="tab-bg"
                      className="absolute inset-0 -top-0.5 bg-primary/10 rounded-xl"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                    />
                  )}
                  <span className="relative z-10">{item.icon}</span>
                </motion.div>
                <span className={`text-[10px] font-medium ${isActive ? "text-primary" : "text-muted-foreground"}`}>
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Header;
