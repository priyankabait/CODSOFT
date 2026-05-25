import heroImage from "../assets/hero.png";

import { useEffect,useState,useContext } from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";

import { CartContext } from "../context/CartContext";

function Home() {

  const [products,setProducts] = useState([]);

  const navigate = useNavigate();

  const {

    cartItems,

    addToCart

  } = useContext(CartContext);

  useEffect(()=>{

    const fetchProducts = async ()=>{

      try{

        const response = await axios.get(

          "http://localhost:5000/api/products"
        );

        setProducts(response.data);

      }

      catch(error){

        console.log(error);
      }
    };

    fetchProducts();

  },[]);

  return (

    <div>

      <nav className="navbar">

        <div className="nav-left">

          <h1 className="logo">

            PRYVORA

          </h1>

        </div>

        <ul className="nav-links">

          <li><a href="/">Home</a></li>

          <li><a href="/new-arrivals">New Arrivals</a></li>

          <li><a href="/best-sellers">Best Sellers</a></li>

          <li><a href="/gifting">Gifting</a></li>

          <li><a href="/about">About</a></li>

        </ul>

        <div className="nav-right">

          <a href="/login" className="login-link">

            Login

          </a>

          <a href="/cart">

            <div className="cart-icon">

              👜

              <span className="cart-count">

                {cartItems.length}

              </span>

            </div>

          </a>

        </div>

      </nav>

      <section className="hero">

        <div className="hero-left">

          <p className="hero-tag">

            LUXURY JEWELLERY

          </p>

          <h1>

            Timeless
            <br />
            Golden Elegance

          </h1>

          <p className="hero-text">

            Discover premium jewellery collections crafted
            for elegance and sophistication.

          </p>

          <a href="/collections">

            <button className="shop-btn">

              SHOP COLLECTION

            </button>

          </a>

        </div>

        <div className="hero-right">

          <img src={heroImage} alt="" />

        </div>

      </section>

      <section className="collections">

        <div className="section-title">

          <p>FEATURED COLLECTION</p>

          <h1>Bestseller Jewellery</h1>

        </div>

        <div className="products-grid">

          {products.map((product)=>(

            <div className="product-card" key={product._id}>

              <img src={product.image} alt="" />

              <h2>{product.name}</h2>

              <p>{product.description}</p>

              <h3>₹{product.price}</h3>

              <button

                onClick={()=>{

                  addToCart(product);

                  navigate("/cart");
                }}
              >

                Add To Cart

              </button>

            </div>
          ))}

        </div>

      </section>

    </div>
  );
}

export default Home;