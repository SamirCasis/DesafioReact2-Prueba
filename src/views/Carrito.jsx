import { useContext } from 'react'
import { PizzasContext } from '../context/DataPizza'

const Carrito = () => {
  const { pizzas, cart, addToCart, removeFromCart, sumaTotal } = useContext(PizzasContext);

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
      <p>Total: ${sumaTotal()}</p>
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
  )
}

export default Carrito

