import { useContext } from "react";

import { useNavigate } from "react-router-dom";

import { CartContext } from "../context/CartContext";

function NewArrivals() {

  const navigate = useNavigate();

  const {

    cartItems,

    addToCart

  } = useContext(CartContext);

  const products = [

    {
      id:1,
      name:"Diamond Aura",
      description:"Elegant Necklace",
      price:4999,
      image:"https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=1470&auto=format&fit=crop"
    },

    {
      id:2,
      name:"Royal Pearl",
      description:"Luxury Earrings",
      price:3499,
      image:"https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1470&auto=format&fit=crop"
    }
  ];

  return (

    <div className="collections">

      <div className="section-title">

        <p>LATEST COLLECTION</p>

        <h1>New Arrivals</h1>

      </div>

      <div className="new-arrivals-grid">

        {products.map((product)=>(

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

export default NewArrivals;