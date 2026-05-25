import { useContext } from "react";

import { CartContext } from "../context/CartContext";

function Cart() {

  const {

    cartItems,

    removeFromCart

  } = useContext(CartContext);

  const totalPrice = cartItems.reduce(

    (total,item)=>total + item.price,

    0
  );

  return (

    <div
      style={{
        padding:"120px 8%",
        minHeight:"100vh",
        background:"#f8f5ef"
      }}
    >

      {/* TITLE */}

      <div
        style={{
          textAlign:"center",
          marginBottom:"70px"
        }}
      >

        <p
          style={{
            letterSpacing:"4px",
            color:"#b48a52",
            marginBottom:"10px"
          }}
        >

          YOUR CART

        </p>

        <h1
          style={{
            fontSize:"90px",
            fontFamily:"Cormorant Garamond"
          }}
        >

          Shopping Bag

        </h1>

      </div>

      {/* EMPTY */}

      {cartItems.length === 0 ? (

        <h2
          style={{
            textAlign:"center",
            fontSize:"42px"
          }}
        >

          Your cart is empty

        </h2>

      ) : (

        <>

          {/* PRODUCTS */}

          <div
            style={{
              display:"grid",
              gridTemplateColumns:"repeat(auto-fit,minmax(320px,1fr))",
              gap:"40px"
            }}
          >

            {cartItems.map((item,index)=>(

              <div

                key={index}

                style={{
                  background:"white",
                  padding:"22px",
                  borderRadius:"28px",
                  boxShadow:"0 15px 35px rgba(0,0,0,0.08)",
                  transition:"0.4s ease"
                }}
              >

                <img

                  src={item.image}

                  alt=""

                  style={{
                    width:"100%",
                    height:"320px",
                    objectFit:"cover",
                    borderRadius:"18px",
                    marginBottom:"20px"
                  }}
                />

                <h2
                  style={{
                    fontSize:"34px",
                    marginBottom:"12px"
                  }}
                >

                  {item.name}

                </h2>

                <p
                  style={{
                    color:"#666",
                    marginBottom:"14px",
                    fontSize:"15px"
                  }}
                >

                  {item.description}

                </p>

                <h3
                  style={{
                    fontSize:"26px",
                    color:"#b48a52",
                    marginBottom:"20px"
                  }}
                >

                  ₹{item.price}

                </h3>

                <button

                  onClick={()=>removeFromCart(index)}

                  style={{
                    width:"100%",
                    padding:"15px",
                    border:"none",
                    borderRadius:"16px",
                    background:"#111",
                    color:"white",
                    cursor:"pointer",
                    fontSize:"15px"
                  }}
                >

                  Remove Item

                </button>

              </div>
            ))}

          </div>

          {/* TOTAL */}

          <div
            style={{
              marginTop:"80px",
              textAlign:"center"
            }}
          >

            <h2
              style={{
                fontSize:"48px",
                marginBottom:"30px"
              }}
            >

              Total: ₹{totalPrice}

            </h2>

            <a href="/checkout">

              <button

                style={{
                  padding:"20px 48px",
                  border:"none",
                  borderRadius:"18px",
                  background:"#111",
                  color:"white",
                  fontSize:"16px",
                  letterSpacing:"2px",
                  cursor:"pointer",
                  boxShadow:"0 12px 24px rgba(0,0,0,0.15)"
                }}
              >

                Proceed To Pay

              </button>

            </a>

          </div>

        </>
      )}

    </div>
  );
}

export default Cart;