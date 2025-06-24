// App.js - Shopping Cart Challenge Starter Code
import React, { useState } from "react";
import "./App.css";

// Sample product data
const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 79.99,
    image: "🎧",
    description: "High-quality wireless headphones with noise cancellation",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 199.99,
    image: "⌚",
    description: "Feature-packed smartwatch with health tracking",
  },
  {
    id: 3,
    name: "Laptop Stand",
    price: 29.99,
    image: "💻",
    description: "Ergonomic laptop stand for better posture",
  },
  {
    id: 4,
    name: "Coffee Mug",
    price: 12.99,
    image: "☕",
    description: "Insulated coffee mug that keeps drinks hot",
  },
  {
    id: 5,
    name: "Phone Case",
    price: 24.99,
    image: "📱",
    description: "Protective phone case with wireless charging support",
  },
  {
    id: 6,
    name: "Desk Lamp",
    price: 45.99,
    image: "💡",
    description: "LED desk lamp with adjustable brightness",
  },
];

function App() {
  // TODO: Add cart state here
  // const [cart, setCart] = useState([]);

  // TODO: Create addToCart function
  // const addToCart = (product) => {
  //   // Your logic here
  // };

  return (
    <div className="App">
      <header className="app-header">
        <h1>🛒 Smart Shopping Cart</h1>
        <p>Add products to your cart and watch the magic happen!</p>
      </header>

      <div className="shop-container">
        <div className="products-section">
          <h2>Products</h2>
          {/* TODO: Create ProductList component or map through products here */}
          <div className="products-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image">{product.image}</div>
                <h3>{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <p className="product-price">${product.price}</p>
                <button className="add-to-cart-btn">Add to Cart</button>
              </div>
            ))}
          </div>
        </div>

        <div className="cart-section">
          <h2>Shopping Cart</h2>
          {/* TODO: Create Cart component here */}
          <div className="cart-placeholder">
            <p>Your cart is empty</p>
            <p>Add some products to get started!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

// Suggested components to create:

// ProductCard.js
// export const ProductCard = ({ product, onAddToCart }) => {
//   return (
//     <div className="product-card">
//       {/* Product card content */}
//     </div>
//   );
// };

// Cart.js
// export const Cart = ({ cartItems, total }) => {
//   return (
//     <div className="cart">
//       {/* Cart content */}
//     </div>
//   );
// };

// CartItem.js
// export const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
//   return (
//     <div className="cart-item">
//       {/* Cart item content */}
//     </div>
//   );
// };
