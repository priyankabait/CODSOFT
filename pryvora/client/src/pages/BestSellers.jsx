import { useContext } from "react";

import { useNavigate } from "react-router-dom";

import { CartContext } from "../context/CartContext";

function BestSellers() {

  const navigate = useNavigate();

  const {

    cartItems,

    addToCart

  } = useContext(CartContext);

  const bestProducts = [

    {
      id:1,
      name:"Golden Luxe",
      description:"Premium Necklace",
      price:7999,
      image:"https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=1470&auto=format&fit=crop"
    },

    {
      id:2,
      name:"Diamond Queen",
      description:"Luxury Earrings",
      price:6999,
      image:"https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1470&auto=format&fit=crop"
    }
  ];

  return (

    <div className="collections">

      <div className="section-title">

        <p>MOST LOVED</p>

        <h1>Best Sellers</h1>

      </div>

      <div
        className="products-grid"
        style={{
          gridTemplateColumns:"repeat(2,320px)",
          justifyContent:"center"
        }}
      >

        {bestProducts.map((product)=>(

          <div className="product-card" key={product.id}>

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

    </div>
  );
}

export default BestSellers;