import React from "react";
import "./ProductCard.css";

function ProductCard({ name, price, description, cartItem, onAddItem, onRemoveItem }) {
  const quantity = cartItem ? cartItem.quantity : 0;

  return (
    <div className="product-card">
      <h2>{name}</h2>
      <p>Preço: R$ {price}</p>
      <p>{description}</p>
      
      {/* Botão de adicionar chama a função passada por props */}
      <button onClick={onAddItem}>Add Carrinho</button>

      {/* Apenas mostra os controles se a quantidade for maior que zero */}
      {quantity > 0 && (
        <div>
          {/* Botão de remover chama a função passada por props */}
          <button onClick={onRemoveItem}>Remover Item Carrinho</button>
          <p>Quantidade de Itens no Carrinho: {quantity}</p>
        </div>
      )}
    </div>
  );
}

export default ProductCard;