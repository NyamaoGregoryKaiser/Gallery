import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";


import Gallery from "./Gallery.js";
import Bio from "./Legends.js";
import Times from './Time.js';

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
  
    <Bio/>
    <Gallery/>
    <Times/>

  </StrictMode>
);