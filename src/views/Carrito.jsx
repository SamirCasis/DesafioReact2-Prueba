import React, { useContext } from 'react';
import { PizzasContext } from '../context/DataPizza';

const Carrito = () => {
  const { pizzas, cart, removeFromCart, sumaTotal, cuenta, aumentar, disminuir } = useContext(PizzasContext);

  return (
    <div>
      <h2>Carrito de Compras</h2>
      <ul>
        {cart.map((pizza) => (
          <li key={pizza.id}>
            {pizza.name} - ${pizza.price} (Cantidad: {cuenta})
            <button onClick={disminuir}>-</button>
            <button onClick={aumentar}>+</button>
            <button onClick={() => removeFromCart(pizza.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <p>Total: ${sumaTotal()}</p>
    </div>
  );
};

export default Carrito;
