import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ProductDetail from "./pages/ProductDetail";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NewArrivals from "./pages/NewArrivals";
import BestSellers from "./pages/BestSellers";
import Gifting from "./pages/Gifting";
import About from "./pages/About";
import Collections from "./pages/Collections";
import Checkout from "./pages/Checkout";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        {/* HOME */}

        <Route path="/" element={<Home />} />

        {/* CART */}

        <Route path="/cart" element={<Cart />} />

        {/* PRODUCT */}

        <Route path="/product" element={<ProductDetail />} />

        {/* AUTH */}

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        {/* PAGES */}

        <Route path="/new-arrivals" element={<NewArrivals />} />

        <Route path="/best-sellers" element={<BestSellers />} />

        <Route path="/gifting" element={<Gifting />} />

        <Route path="/about" element={<About />} />

        <Route path="/collections" element={<Collections />} />

        <Route path="/checkout" element={<Checkout />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;