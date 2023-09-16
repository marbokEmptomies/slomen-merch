import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext)
  return (
    <div className="cartItem">
      <p>{productImage}</p>
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>{price}€</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}> - </button>
          <input value={cartItems[id]} type="number" onChange={(e) => updateCartItemCount(Number(e.target.value), id)} />
          <button onClick={() => addToCart(id)}> + </button>
        </div>
      </div>
    </div>
  );
};
