import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return (
    <main className="bg-black text-white">
      <Header />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}

export default App;
