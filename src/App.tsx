import { BrowserRouter, Routes, Route } from "react-router-dom";
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
    <BrowserRouter basename="/Prtfolio/">
      <Routes>
        <Route path="/Prtfolio/" element={<HomePage />} />
        <Route path="/Prtfolio/project/desjungles" element={<DesjunglesProjectPage />} />
        <Route path="/Prtfolio/project/trydon" element={<TrydonProjectPage />} />
        <Route path="/Prtfolio/project/diajiro" element={<DiaJiroProjectPage />} />
        <Route path="/Prtfolio/project/obelisk" element={<ObeliskProjectPage />} />
        <Route path="/Prtfolio/project/desjardins-kpi" element={<DesjardinsKPIProjectPage />} />
        <Route path="/Prtfolio/project/hex-ai" element={<HexAIProjectPage />} />
        <Route path="/Prtfolio/project/quiz-game" element={<QuizGameProjectPage />} />
        <Route path="/Prtfolio/project/trydon-website" element={<TrydonWebsiteProjectPage />} />
        <Route path="/Prtfolio/project/escape-the-engine" element={<EscapeTheEngineProjectPage />} />
        <Route path="/Prtfolio/project/homunculus" element={<HomunculusProjectPage />} />
        <Route path="/Prtfolio/project/solar-system" element={<SolarSystemProjectPage />} />
        <Route path="/Prtfolio/project/game-night" element={<GameNightProjectPage />} />
        <Route path="/Prtfolio/project/hifi" element={<HifiProjectPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;