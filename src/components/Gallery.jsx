import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { PizzasContext } from '../context/DataPizza'
import './Gallery.css'

const Gallery = () => {
    const { pizzas, handleAddToCart, irAlDetalle } = useContext(PizzasContext)

    return (
        <div className='gallery'>
            {pizzas.map((pizza) => (
                <div key={pizza.id} className='pizzaCard'>
                    <img className='imgCardGallery' src={pizza.img} alt={pizza.name}></img>
                    <section>
                        <h3>{pizza.name}</h3>
                    </section>
                    <section className='ingredientes'>
                        <h5>Ingredientes:</h5>
                        <ul className='ulG'>
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

export default Gallery


