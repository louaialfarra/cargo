import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Hero from "./Components/Hero/Hero";
import Shipping from "./Components/Shipping/Shipping";
import Global from "./Components/GlobalShipping/Global";

function App() {
  return (
    <>
      <Hero />
      <Shipping />
      <Global />
    </>
  );
}

export default App;
