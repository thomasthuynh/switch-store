import { useState } from "react";
import "./scss/_global.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Landing from "./components/Landing";
import Highlights from "./components/Highlights";
import Featured from "./components/Featured";
import Discounted from "./components/Discounted";
import Explore from "./components/Explore";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Games from "./pages/Games";
import GameInfo from "./pages/GameInfo";
import Cart from "./pages/Cart";

function App() {
  return (
    <Router>
      <div>

        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<Games />} />
          <Route path="/games/:id" element={<GameInfo />}/>
          <Route path="/cart" element={<Cart />}/>
        </Routes>
        <Footer />

      </div>
    </Router>
  );
}

export default App;
