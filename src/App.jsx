import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Info from "./components/Info";
import "./App.scss";
import Projects from "./components/Projects";

const App = () => {
  return (
    <div className="container">
      <Header />
      <About />
      <Info />
      <Skills />
      <Projects />
    </div>
  );
};

export default App;
