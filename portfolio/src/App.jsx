import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import TechStack from "./components/TechStack.jsx";
import Work from "./components/Work.jsx";
import Projects from "./components/Projects.jsx";
import Achievements from "./components/Achievements.jsx";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact.jsx";

export default function App() {
  return (
    <main className="bg-black min-h-screen text-slate-100 text-[17px]">
      <Navbar />
      <Home />
      <TechStack />
      <Work />
      <Projects />
      <Achievements />
      <Gallery />
      <Contact />
    </main>
  );
}