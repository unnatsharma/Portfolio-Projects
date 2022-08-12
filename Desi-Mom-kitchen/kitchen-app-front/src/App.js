import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartShow, setCartShow] = useState(false);

  const toggleCart = () => {
    setCartShow(!cartShow);
  };

  return (
    <CartProvider>
      {cartShow && <Cart onClose={toggleCart} />}
      <Header onShowCart={toggleCart} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
