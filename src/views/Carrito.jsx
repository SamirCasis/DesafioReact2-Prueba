import React, { useContext } from 'react'
import { PizzasContext } from '../context/DataPizza'
import { Button } from 'react-bootstrap'
import './Carrito.css'

const Carrito = () => {
  const { cart, eliminarCarrito, sumaTotal, aumentarPrecio, disminuirPrecio } = useContext(PizzasContext)

  const getCantidad = (id) => {
    return cart.filter(pizza => pizza.id === id).length
  }

  return (
    <div>
      <article className='carritoTitle'>
        <h2>Carrito de Compras</h2>
      </article>
      <section className='carritoDetalle'>
        <ul>
          {[...new Set(cart.map(pizza => pizza.id))].map((id) => {
            const pizza = cart.find(p => p.id === id)
            const cantidad = getCantidad(id)

            return (
              <li key={id} type='none'>
                <img src={pizza.img} alt={pizza.name} />
                {pizza.name} - ${pizza.price}
                <button onClick={() => disminuirPrecio(id)}>-</button>
                <span>Cantidad: {cantidad}</span>
                <button onClick={() => aumentarPrecio(id)}>+</button>
                <button onClick={() => eliminarCarrito(id)}>Eliminar Total</button>
              </li>
            )
          })}
        </ul>
      </section>
      <footer>
        <h3>Total: ${sumaTotal()}</h3>
        <Button className='bg-success'> PAGAR </Button>
      </footer>
    </div>
  )
}

export default Carrito
