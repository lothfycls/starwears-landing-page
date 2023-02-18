import React, { useEffect, useState } from "react";
import "./App.css";
import AOS from "aos";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  });

  return (
    <div className="">
      <div className="home__and__navbar">
      <Nav/>
      <Home/>
      </div>
      <About/>
      <Contact/>
    </div>
  );
}

export default App;
