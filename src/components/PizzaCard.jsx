import React, { useContext } from 'react'
import { PizzasContext } from '../context/DataPizza'
import { useParams } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const PizzaCard = () => {
  const { selectedPizza } = useContext(PizzasContext)
  const { name } = useParams()

  if (!selectedPizza) {
    return <div>No se encontró la pizza seleccionada</div>
  }

  return (
    <div className='gallery'>
      {selectedPizza.map((pizza) => (
        <div key={pizza.id} className='pizzaCard'>
          <img className='imgCardGallery' src={selectedPizza.img} alt={selectedPizza.name}></img>
          <section>
            <h3>{pizza.name}</h3>
          </section>
          <section className='ingredientes'>
            <h5>Ingredientes:</h5>
            <ul>
              {pizza.ingredients.map((ingredient, id) => (
                <li key={id} type='none'>🍕{ingredient}</li>
              ))}
            </ul>
          </section>
          <h5 className='text-center'>${pizza.price}</h5>
          <article className='btnCardPizza'>
            <Button className='verMas bg-primary white' onClick={() => irAlDetalle(pizza.id)}>Ver Más 👀</Button>
            <Button className='agregarCarrito bg-danger white' onClick={() => handleAddToCart(pizza)}> Añadir 🛒</Button>
          </article>
        </div>
      ))}
    </div>
  )
}

export default PizzaCard

