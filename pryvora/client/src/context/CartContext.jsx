import { createContext,useState } from "react";

export const CartContext = createContext();

function CartProvider({children}) {

  const [cartItems,setCartItems] = useState([]);

  /* ADD TO CART */

  const addToCart = (product)=>{

    setCartItems((prev)=>([

      ...prev,

      product
    ]));
  };

  /* REMOVE */

  const removeFromCart = (id)=>{

    const updatedCart = cartItems.filter(

      (item,index)=>index !== id
    );

    setCartItems(updatedCart);
  };

  return (

    <CartContext.Provider

      value={{

        cartItems,

        addToCart,

        removeFromCart
      }}
    >

      {children}

    </CartContext.Provider>
  );
}

export default CartProvider;