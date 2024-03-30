import React, { useState } from "react";

function Item({ name, category }) {
  // State to track whether the item is in the cart
  const [isInCart, setIsInCart] = useState(false);

  // Function to handle adding/removing items from cart
  const toggleIsInCart = () => {
    setIsInCart(!isInCart);
  };

  return (
    <li className={isInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={toggleIsInCart}>
        {isInCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
