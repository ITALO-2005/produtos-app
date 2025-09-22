import React, { useState } from "react";
import "./ProductCard.css";

function ProductCard({ name, price, description }) {
  // 1. Criando o estado para controlar a quantidade de itens
  const [quantity, setQuantity] = useState(0);

  // 2. Função para adicionar um item (incrementar)
  const handleAddItem = () => {
    setQuantity(quantity + 1);
  };

  // 3. Função para remover um item (decrementar)
  const handleRemoveItem = () => {
    // Garante que a quantidade não fique negativa
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="product-card">
      <h2>{name}</h2>
      <p>Preço: R$ {price}</p>
      <p>{description}</p>
      
      {/* Botão para adicionar itens sempre visível */}
      <button onClick={handleAddItem}>Adicionar o Carrinho</button>

      {/* 4. Renderização condicional: só mostra o bloco abaixo se quantity > 0 */}
      {quantity > 0 && (
        <div>
          <button onClick={handleRemoveItem}>Remover Item Carrinho</button>
          <p>Quantidade de Itens no Carrinho: {quantity}</p>
        </div>
      )}
    </div>
  );
}

export default ProductCard;