import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import MitosePage from "./pages/Mitose.tsx";
import MeiosePage from "./pages/Meiose.tsx";
import ComparisonPage from "./pages/Comparison.tsx";
import QuizPage from "./pages/Quiz.tsx";
import PhaseGamePage from "./pages/PhaseGame.tsx";
import GlossaryPage from "./pages/Glossary.tsx";
import FlashcardsPage from "./pages/Flashcards.tsx";
import StudyTimelinePage from "./pages/StudyTimeline.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/mitose" element={<MitosePage />} />
          <Route path="/meiose" element={<MeiosePage />} />
          <Route path="/comparacao" element={<ComparisonPage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/jogo" element={<PhaseGamePage />} />
          <Route path="/glossario" element={<GlossaryPage />} />
          <Route path="/flashcards" element={<FlashcardsPage />} />
          <Route path="/timeline" element={<StudyTimelinePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
