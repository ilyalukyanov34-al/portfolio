import React, { useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Info from "./components/Info";
import "./App.scss";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

const App = () => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <div className="container">
      <Header toggleTheme={toggleTheme} theme={theme} />
      <About />
      <Info />
      <Skills />
      <Projects />
      <Contacts />
      <Footer />
    </div>
  );
};

export default App;
