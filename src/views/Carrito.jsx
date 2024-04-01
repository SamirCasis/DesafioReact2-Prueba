import { useContext, useState } from 'react';
import { PizzasContext } from '../context/DataPizza';

const carrito = () => {
  const { pizzas } = useContext(PizzasContext);
  const [cart, setCart] = useState([]);

  const addToCart = (pizza) => {
    setCart([...cart, pizza]);
  }

  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  const calculateTotal = () => {
    return cart.reduce((total, pizza) => total + pizza.price, 0);
  };

  return (
    <div>
      <h2>Carrito de Compras</h2>
      <ul>
        {cart.map((pizza, index) => (
          <li key={index}>
            {pizza.name} - ${pizza.price}
            <button onClick={() => removeFromCart(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <p>Total: ${calculateTotal()}</p>
      <hr />
      <h3>Productos Disponibles</h3>
      <ul>
        {pizzas.map((pizza) => (
          <li key={pizza.id}>
            {pizza.name} - ${pizza.price}
            <button onClick={() => addToCart(pizza)}>Agregar al Carrito</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default carrito;
