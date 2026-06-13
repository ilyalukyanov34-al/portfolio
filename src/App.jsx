import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Info from "./components/Info";
import "./App.scss";

const App = () => {
  return (
    <div className="container">
      <Header />
      <About />
      <Skills />
      <Info />
    </div>
  );
};

export default App;
