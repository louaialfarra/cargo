import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Hero from "./Components/Hero/Hero";
import Shipping from "./Components/Shipping/Shipping";
import Global from "./Components/GlobalShipping/Global";
import Map from "./Components/Map/Map";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Hero />
      <Shipping />
      <Global />
      <Map />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
