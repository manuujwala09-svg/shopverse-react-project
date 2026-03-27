import React from "react";
import Product from "./components/product";

function App() {
  return (
    <div>
      <h1>My E-Commerce Store</h1>

      <Product
        image="https://via.placeholder.com/180"
        title="Wireless Headphones"
        price="1999"
        rating="4.5"
      />

      <Product
        image="https://via.placeholder.com/180"
        title="Smart Watch"
        price="2999"
        rating="4.2"
      />

      <Product
        image="https://via.placeholder.com/180"
        title="Bluetooth Speaker"
        price="1499"
        rating="4.0"
      />

    </div>
  );
}

export default App;