import "./App.css";
import React from "react";
import NavbarEl from "./components/NavbarEl";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <main className="bodybg text-light">
      <NavbarEl />
      <Projects />
      <About />
      <Contact />
    </main>
  );
}

export default App;
