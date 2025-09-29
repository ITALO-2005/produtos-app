import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import ProductCard from "./components/ProductCard";
import "./App.css";

function App() {
  const products = [
    { id: 1, name: "Notebook", price: 3500, description: "Notebook com 16GB RAM e 512GB SSD" },
    { id: 2, name: "Smartphone", price: 2000, description: "Tela AMOLED e câmera tripla" },
    { id: 3, name: "Fone de Ouvido", price: 300, description: "Bluetooth com cancelamento de ruído" },
    { id: 4, name: "Teclado Mecânico", price: 450, description: "Teclado mecânico RGB para gamers" }
  ];

  const [cart, setCart] = useState([]);
  const handleAddToCart = (productToAdd) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === productToAdd.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === productToAdd.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...productToAdd, quantity: 1 }];
    });
  };

  const handleRemoveFromCart = (productToRemove) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === productToRemove.id);
      if (existingProduct && existingProduct.quantity > 1) {
        return prevCart.map((item) =>
          item.id === productToRemove.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }
      return prevCart.filter((item) => item.id !== productToRemove.id);
    });
  };

  const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <div className="app-container">
      {/* Passa o total para o componente Header */}
      <Header totalPrice={totalPrice} />
      <div className="main-content">
        <Sidebar />
        <div className="content-area">
          {products.map((product) => {
            const cartItem = cart.find(item => item.id === product.id);
            return (
              <ProductCard
                key={product.id}
                name={product.name}
                price={product.price}
                description={product.description}
                cartItem={cartItem}
                onAddItem={() => handleAddToCart(product)}
                onRemoveItem={() => handleRemoveFromCart(product)}
              />
            )
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;