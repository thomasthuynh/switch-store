import { useState, useEffect } from "react";
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
  const [cart, setCart] = useState([]);

  const addToCart = (game) => {
    setCart([...cart, {...game, quantity: 1}])
  }

  const changeQuantity = (game, amount) => {
    setCart(cart.map((item) => {
      if (item.id === game.id) {
        return {
          ...item,
          quantity: +amount
        }
      } else {
        return item
      }
    }))
  }

  const removeItem = (game) => {
    setCart(cart.filter((item) => {
      return item.id !== game.id
    }))
  }

  const numberOfItems = () => {
    let counter = 0;

    cart.forEach((item) => {
      counter += item.quantity
    })

    return counter;
  }

  useEffect(() => {
    console.log(cart)
  }, [cart])

  return (
    <Router>
      <div>
        <Nav numberOfItems={numberOfItems()}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<Games />} />
          <Route
            path="/games/:id"
            element={<GameInfo addToCart={addToCart} cart={cart} />}
          />
          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                changeQuantity={changeQuantity}
                removeItem={removeItem}
              />
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
