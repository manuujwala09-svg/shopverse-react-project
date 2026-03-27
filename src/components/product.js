import React from "react";

function Product(props) {
  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "15px",
      margin: "10px",
      width: "200px"
    }}>
      <img src={props.image} alt={props.title} width="180" />
      <h3>{props.title}</h3>
      <p>Price: ₹{props.price}</p>
      <p>Rating: {props.rating}</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default Product;