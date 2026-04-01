import { motion } from "framer-motion";
import { useState } from "react";
import { Clock, FlaskConical, GitBranch, ChevronDown, ChevronUp, Dna } from "lucide-react";
import Header from "@/components/Header";

interface TimelineEvent {
  phase: string;
  process: "mitose" | "meiose" | "ambos";
  time: string;
  description: string;
  detail: string;
}

const events: TimelineEvent[] = [
  { phase: "G1 (Gap 1)", process: "ambos", time: "~11h", description: "Célula cresce e sintetiza proteínas", detail: "A célula aumenta de tamanho, produz organelas e acumula materiais necessários para a duplicação do DNA. Checkpoint G1 verifica se as condições são favoráveis." },
  { phase: "S (Síntese)", process: "ambos", time: "~8h", description: "DNA é replicado", detail: "Todo o material genético é duplicado fielmente. Cada cromossomo passa a ter duas cromátides-irmãs unidas pelo centrômero. Erros são corrigidos por mecanismos de reparo." },
  { phase: "G2 (Gap 2)", process: "ambos", time: "~4h", description: "Preparação final para divisão", detail: "A célula verifica se o DNA foi corretamente replicado (checkpoint G2/M), sintetiza proteínas do fuso mitótico e acumula energia para a divisão." },
  { phase: "Prófase", process: "mitose", time: "~30min", description: "Cromatina condensa, fuso se forma", detail: "Cromossomos tornam-se visíveis, nucléolo desaparece, centrossomos migram para polos opostos. Membrana nuclear começa a se desintegrar." },
  { phase: "Prófase I", process: "meiose", time: "~13 dias*", description: "Pareamento e crossing-over", detail: "Fase mais longa: cromossomos homólogos se pareiam (sinapse), formando bivalentes. Crossing-over gera recombinação. *Em espermatócitos humanos pode durar ~13 dias." },
  { phase: "Metáfase / Metáfase I", process: "ambos", time: "~20min", description: "Cromossomos alinhados no equador", detail: "Na mitose, cromossomos individuais se alinham. Na meiose I, pares de homólogos (bivalentes) se alinham com orientação aleatória (segregação independente)." },
  { phase: "Anáfase / Anáfase I", process: "ambos", time: "~5min", description: "Separação e migração", detail: "Fase mais rápida. Na mitose: cromátides-irmãs se separam. Na meiose I: cromossomos homólogos se separam, reduzindo a ploidia de 2n para n." },
  { phase: "Telófase + Citocinese", process: "ambos", time: "~15min", description: "Células se dividem", detail: "Cromossomos descondensam, envelope nuclear se reconstitui. Na mitose: 2 células 2n. Na meiose I: 2 células n (com cromátides duplicadas)." },
  { phase: "Meiose II completa", process: "meiose", time: "~5h", description: "4 células haploides formadas", detail: "Similar à mitose: cromátides-irmãs se separam. Resultado final: 4 gametas haploides geneticamente únicos, prontos para a fecundação." },
];

const processColor = {
  mitose: "border-primary/30 bg-primary/5",
  meiose: "border-secondary/30 bg-secondary/5",
  ambos: "border-accent/30 bg-accent/5",
};

const processIcon = {
  mitose: <FlaskConical className="w-4 h-4 text-primary" />,
  meiose: <GitBranch className="w-4 h-4 text-secondary" />,
  ambos: <Dna className="w-4 h-4 text-accent" />,
};

const processLabel = {
  mitose: "Mitose",
  meiose: "Meiose",
  ambos: "Ambos",
};

const StudyTimelinePage = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-4"
            >
              <Clock className="w-4 h-4" />
              Linha do Tempo
            </motion.div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Ciclo Celular
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Acompanhe cada etapa do ciclo celular e compare os tempos reais de cada fase.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border/50" />

            <div className="space-y-4">
              {events.map((event, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="relative pl-16"
                >
                  {/* Dot */}
                  <div className="absolute left-4 top-5 w-5 h-5 rounded-full border-2 border-background bg-muted flex items-center justify-center z-10">
                    <div className={`w-2.5 h-2.5 rounded-full ${
                      event.process === "mitose" ? "bg-primary" : event.process === "meiose" ? "bg-secondary" : "bg-accent"
                    }`} />
                  </div>

                  <button
                    onClick={() => setExpanded(expanded === i ? null : i)}
                    className={`w-full text-left glass-card p-5 border ${processColor[event.process]} transition-all hover:shadow-md`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1.5">
                          {processIcon[event.process]}
                          <h3 className="font-display font-bold text-foreground text-base">{event.phase}</h3>
                          <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                            event.process === "mitose" ? "bg-primary/10 text-primary" :
                            event.process === "meiose" ? "bg-secondary/10 text-secondary" :
                            "bg-accent/10 text-accent"
                          }`}>{processLabel[event.process]}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{event.description}</p>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="font-display font-bold text-foreground text-sm">{event.time}</span>
                        {expanded === i ? <ChevronUp className="w-4 h-4 text-muted-foreground mt-1 mx-auto" /> : <ChevronDown className="w-4 h-4 text-muted-foreground mt-1 mx-auto" />}
                      </div>
                    </div>

                    {expanded === i && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="mt-4 pt-4 border-t border-border/30"
                      >
                        <p className="text-sm text-muted-foreground leading-relaxed">{event.detail}</p>
                      </motion.div>
                    )}
                  </button>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="glass-card p-6 mt-10 text-center"
          >
            <p className="text-sm text-muted-foreground">
              ⏱ O ciclo celular humano completo dura em média <strong className="text-foreground">24 horas</strong>, mas a mitose em si ocupa apenas <strong className="text-foreground">~1 hora</strong> (4% do total). A interfase (G1+S+G2) domina os outros 96%!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default StudyTimelinePage;
