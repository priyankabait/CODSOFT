import { useEffect,useState,useContext } from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";

import { CartContext } from "../context/CartContext";

function Collections() {

  const [products,setProducts] = useState([]);

  const [category,setCategory] = useState("");

  const navigate = useNavigate();

  const {

    cartItems,

    addToCart

  } = useContext(CartContext);

  useEffect(()=>{

    const fetchProducts = async ()=>{

      let url =

        "http://localhost:5000/api/products";

      if(category){

        url += `?category=${category}`;
      }

      const response = await axios.get(url);

      setProducts(response.data);
    };

    fetchProducts();

  },[category]);

  return (

    <div className="collections">

      <div className="section-title">

        <p>PRYVORA COLLECTION</p>

        <h1>All Jewellery</h1>

      </div>

      <div
        style={{
          display:"flex",
          justifyContent:"center",
          gap:"20px",
          marginBottom:"50px",
          flexWrap:"wrap"
        }}
      >

        <button onClick={()=>setCategory("")}>

          All

        </button>

        <button onClick={()=>setCategory("necklace")}>

          Necklace

        </button>

        <button onClick={()=>setCategory("earrings")}>

          Earrings

        </button>

        <button onClick={()=>setCategory("ring")}>

          Rings

        </button>

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

    </div>
  );
}

export default Collections;