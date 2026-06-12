import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import "./App.scss";

const App = () => {
  return (
    <div className="container">
      <Header />
      <About />
      <Skills />
    </div>
  );
};

export default App;
