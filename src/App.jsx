import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import "./App.scss";

const App = () => {
  return (
    <div className="container">
      <Header />
      <About />
    </div>
  );
};

export default App;
