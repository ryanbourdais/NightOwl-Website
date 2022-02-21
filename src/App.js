import React from "react";
import NavBar from "./components/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Games from "./pages/games";
import Blog from "./pages/blog";
import Game1 from "./pages/game1";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/games" element={<Games />} />
          <Route path="/game1" element={<Game1 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
