import React, { useContext } from 'react';
import { PizzasContext } from '../context/DataPizza';
import './Carrito.css'
import { Button } from 'react-bootstrap';

const Carrito = () => {
  const { pizzas, cart, eliminarCarrito, sumaTotal, cuenta, aumentar, disminuir } = useContext(PizzasContext);

  return (
    <div>
      <article className='carritoTitle'>
        <h2>Carrito de Compras</h2>
      </article>
      <section className='carritoDetalle'>
        <ul>
          {cart.map((pizza) => (
            <li type='none' key={pizza.id}>
              <img src={pizza.img} />
              {pizza.name}
              - ${pizza.price}
              <button onClick={disminuir}>-</button>
              <button onClick={aumentar}>+</button>
              (Cantidad: {cuenta})
              <button onClick={() => eliminarCarrito(pizza.id)}>Eliminar Total</button>
            </li>
          ))}
        </ul>
      </section>
      <footer>
        <h3>Total: ${sumaTotal()}</h3>
        <Button className='bg-success'> PAGAR </Button>
      </footer>
    </div>
  );
};

export default Carrito;
