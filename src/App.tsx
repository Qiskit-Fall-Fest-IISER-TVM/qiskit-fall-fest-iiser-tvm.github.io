import { ThemeProvider } from "./components/ThemeProvider";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Toaster } from "@/components/ui/toaster";

import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import SpeakersPage from "./pages/SpeakersPage";
import SchedulePage from "./pages/SchedulePage";
import RegisterPage from "./pages/RegisterPage";
import TeamPage from "./pages/TeamPage";

function App() {
  return (
    <div className="min-h-screen text-black font-sans">
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/schedule" element={<SchedulePage />} />
          <Route path="/speakers" element={<SpeakersPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </main>

      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
