import { useState } from "react";

import { useNavigate } from "react-router-dom";
function Gifting() {

  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {

    setCartCount(cartCount + 1);
  };

  return (

    <div>

      {/* NAVBAR */}

      <nav className="navbar">

        <div className="nav-left">

          <h1 className="logo">

            PRYVORA

          </h1>

        </div>

        <ul className="nav-links">

          <li>

            <a href="/new-arrivals">

              New Arrivals

            </a>

          </li>

          <li>

            <a href="/best-sellers">

              Best Sellers

            </a>

          </li>

          <li>

            <a href="/gifting">

              Gifting

            </a>

          </li>

          <li>

            <a href="/">

              About

            </a>

          </li>

        </ul>

        <div className="nav-right">

          <a href="/login" className="login-link">

            Login

          </a>

          <a href="/cart">

            <div className="cart-icon">

              👜

              <span className="cart-count">

                {cartCount}

              </span>

            </div>

          </a>

        </div>

      </nav>

      {/* HERO BANNER */}

      <section className="gift-hero">

        <img

          src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?q=80&w=1600&auto=format&fit=crop"

          alt=""
        />

        <div className="gift-overlay">

          <p>

            GIFT COMBOS

          </p>

          <h1>

            FLAT 50% OFF

          </h1>

          <button>

            SHOP NOW

          </button>

        </div>

      </section>

      {/* PRODUCTS */}

      <section className="collections">

        <div className="section-title">

          <p>

            CURATED LUXURY GIFTS

          </p>

          <h1>

            Gift Boxes

          </h1>

        </div>

        <div className="products-grid">

          {/* PRODUCT 1 */}

          <div className="product-card">

            <img

              src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=1470&auto=format&fit=crop"

              alt=""
            />

            <h2>

              Golden Love Box

            </h2>

            <p>

              Necklace + Earrings Set

            </p>

            <h3>

              ₹5,999

            </h3>

            <button onClick={addToCart}>

              Add To Cart

            </button>

          </div>

          {/* PRODUCT 2 */}

          <div className="product-card">

            <img

              src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1470&auto=format&fit=crop"

              alt=""
            />

            <h2>

              Velvet Luxe Box

            </h2>

            <p>

              Premium Earrings Collection

            </p>

            <h3>

              ₹4,499

            </h3>

            <button onClick={addToCart}>

              Add To Cart

            </button>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Gifting;