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
  /* continue notes 
 10-  always set the wrapper in side a main dev or section or navbar  and in the main sectio set the color and the height 
 11- in index .css weh have all the globa CSS 
 12- set the width only for images the height will be set automaticall to maintantthe orginial size   alson make object fit  so it not shrinks 
 13- call the menu items nav bar
 
 
  */
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
