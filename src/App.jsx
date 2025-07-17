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
import Test from "./Components/Test/Test";

function App() {
  /* continue notes 
    es7+ extension in vs code  is for shortcuts for creating new compoinent we need it but i am not isntalling it so i can practice more 
  2- we can creat a file calles index js in a compnentt folder  and inport or the compnetnts and export them  all at  once, by this we  import componetnt all form one folder this could organiaze them 
  3-create tag called header is better fro seo too 
  4-create variable colors in index .css  so u can ujse them like primary and secondye u can name them  in the :root{}
  5- set border size for all elements *,*::after,*::before{boxsizeing:border-box}  we use this so we make padding and the border part form the element width and height
  6-we should creat a wrapper class in the index.css  and add a maxwidth for all the container 
  7-we can also center a dive by giving  and auto margin for left and right and   set a max width for it 
  8-  for the menu we set the position to fix  so we make the menu sticky when sccroll to bottm
  9- we have a header outside of the wrapper  in the heeader we set the backforun image then we set the wrapper 
 10-  always set the wrapper in side a main dev or section or navbar  and in the main sectio set the color and the height 
 11- in index .css weh have all the globa CSS 
 12- set the width only for images the height will be set automaticall to maintantthe orginial size   alson make object fit  so it not shrinks 
 13- call the menu items nav bar
 

  */
  return (
    <>
      <Test />
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
