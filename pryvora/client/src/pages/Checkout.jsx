import { useContext,useState } from "react";

import { CartContext } from "../context/CartContext";

function Checkout() {

  const {

    cartItems

  } = useContext(CartContext);

  const [name,setName] = useState("");

  const [address,setAddress] = useState("");

  const [city,setCity] = useState("");

  const [pincode,setPincode] = useState("");

  /* TOTAL */

  const totalPrice = cartItems.reduce(

    (total,item)=>total + item.price,

    0
  );

  /* DUMMY PAYMENT */

  const handlePayment = ()=>{

    if(

      !name ||

      !address ||

      !city ||

      !pincode
    ){

      alert("Please fill all details");

      return;
    }

    alert(

      "Payment Successful! Order Placed Successfully."
    );
  };

  return (

    <div className="checkout-page">

      {/* TITLE */}

      <div className="section-title">

        <p>

          CHECKOUT

        </p>

        <h1>

          Complete Your Order

        </h1>

      </div>

      <div className="checkout-container">

        {/* LEFT */}

        <div className="checkout-form">

          <h2>

            Shipping Details

          </h2>

          <input

            type="text"

            placeholder="Full Name"

            value={name}

            onChange={(e)=>setName(e.target.value)}
          />

          <input

            type="text"

            placeholder="Address"

            value={address}

            onChange={(e)=>setAddress(e.target.value)}
          />

          <input

            type="text"

            placeholder="City"

            value={city}

            onChange={(e)=>setCity(e.target.value)}
          />

          <input

            type="text"

            placeholder="Pincode"

            value={pincode}

            onChange={(e)=>setPincode(e.target.value)}
          />

          {/* PAYMENT BUTTON */}

          <button onClick={handlePayment}>

            PAY NOW

          </button>

        </div>

        {/* RIGHT */}

        <div className="checkout-summary">

          <h2>

            Order Summary

          </h2>

          {cartItems.map((item,index)=>(

            <div
              className="summary-item"
              key={index}
            >

              <img src={item.image} alt="" />

              <div>

                <h3>

                  {item.name}

                </h3>

                <p>

                  ₹{item.price}

                </p>

              </div>

            </div>
          ))}

          <div className="checkout-total">

            <h2>

              Total: ₹{totalPrice}

            </h2>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Checkout;