import { useContext, useState } from 'react'
import { PizzasContext } from '../context/DataPizza'
import { Button } from 'react-bootstrap'
import './Carrito.css'

const Carrito = () => {
  const { cart, eliminarCarrito, sumaTotal, irAlHome } = useContext(PizzasContext)
  const [multiplicador, setMultiplicador] = useState(1)

  const aumentarMultiplicador = () => {
    setMultiplicador(prevMultiplicador => prevMultiplicador + 1)
  }

  const disminuirMultiplicador = (id) => {
    if (multiplicador === 1) {
      eliminarCarrito(id)
    } else {
      setMultiplicador(prevMultiplicador => prevMultiplicador - 1)
    }
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

            return (
              <li key={id} type='none'>
                <img src={pizza.img} alt={pizza.name} />
                {pizza.name} - ${pizza.price * multiplicador}
                <button className='bg-danger text-white' onClick={() => disminuirMultiplicador(id)} disabled={multiplicador === 0}>-</button>
                <span>Multiplicador: {multiplicador}</span>
                <button className='bg-primary text-white' onClick={() => aumentarMultiplicador()}>+</button>
                <button className='bg-warning' onClick={() => eliminarCarrito(id)}>Eliminar Total</button>
              </li>
            )
          })}
        </ul>
      </section>
      <footer>
        <h3>Total: ${sumaTotal()}</h3>
        <Button className='bg-success' onClick={irAlHome}> PAGAR </Button>
      </footer>
    </div>
  )
}

export default Carrito
