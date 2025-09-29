import React from "react";
import "./Header.css";

function Header({ totalPrice }) {
  return (
    <header className="header">
      <h1>Minha Loja</h1>
      {/* Exibe o total do carrinho */}
      <p>Total do Carrinho: R$ {totalPrice.toFixed(2)}</p>
    </header>
  );
}

export default Header;