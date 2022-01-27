import Home from "./components/Home";
import About from "./components/Aboutme";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experiences from "./components/Experiences";
import Footer from "./components/Footer";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div id="home">
      <Home />
      <About />
      <Skills />
      <Projects />
      <Experiences />
      <Footer />
    </div>
  );
}

export default App;
