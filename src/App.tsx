import { HashRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
// import { ProjectPage } from "./pages/ProjectPage";
import { DesjunglesProjectPage } from "./pages/projects/DesjunglesProject";
import { TrydonProjectPage } from "./pages/projects/TrydonProject";
import { DiaJiroProjectPage } from "./pages/projects/DiaJiroProject";
import { ObeliskProjectPage } from "./pages/projects/ObeliskProject";
import { DesjardinsKPIProjectPage } from "./pages/projects/DesjardinsKPIProject";
import { HexAIProjectPage } from "./pages/projects/HexAIProject";
import { QuizGameProjectPage } from "./pages/projects/QuizGameProject";
import { TrydonWebsiteProjectPage } from "./pages/projects/TrydonWebsiteProject";
import { EscapeTheEngineProjectPage } from "./pages/projects/EscapeTheEngine";
import { HomunculusProjectPage } from "./pages/projects/HomunculusProject";
import { SolarSystemProjectPage } from "./pages/projects/SolarSystemProject";
import { GameNightProjectPage } from "./pages/projects/GameNightProject";
import { HifiProjectPage } from "./pages/projects/HifiProject";


function App() {
  return (
    <HashRouter basename="/Prtfolio/">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/desjungles" element={<DesjunglesProjectPage />} />
        <Route path="/project/trydon" element={<TrydonProjectPage />} />
        <Route path="/project/diajiro" element={<DiaJiroProjectPage />} />
        <Route path="/project/obelisk" element={<ObeliskProjectPage />} />
        <Route path="/project/desjardins-kpi" element={<DesjardinsKPIProjectPage />} />
        <Route path="/project/hex-ai" element={<HexAIProjectPage />} />
        <Route path="/project/quiz-game" element={<QuizGameProjectPage />} />
        <Route path="/project/trydon-website" element={<TrydonWebsiteProjectPage />} />
        <Route path="/project/escape-the-engine" element={<EscapeTheEngineProjectPage />} />
        <Route path="/project/homunculus" element={<HomunculusProjectPage />} />
        <Route path="/project/solar-system" element={<SolarSystemProjectPage />} />
        <Route path="/project/game-night" element={<GameNightProjectPage />} />
        <Route path="/project/hifi" element={<HifiProjectPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;