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
// 1. Import Contact component (adjust casing if your folder is named "pages" vs "Pages")
import { Contact } from "./pages/Contact";

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
          {/* 2. Registered Route */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
