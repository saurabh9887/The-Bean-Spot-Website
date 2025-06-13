import React from "react";
import "./App.css";
// main.jsx or App.jsx
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./Pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
