import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { PizzasContext } from '../context/DataPizza'

const Gallery = () => {
    const { pizzas, addToCart } = useContext(PizzasContext)
    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate(`/pizza`)
    }

    const handleAddToCart = (pizza) => {
        addToCart(pizza)
        alert('Pizza agregada al carrito')
    }

    return (
        <div className='gallery'>
            {pizzas.map((pizza, id) => (
                <div key={id} className='pizzaCard'>
                    <img className='imgCardGallery' src={pizza.img} alt={pizza.name}></img>
                    <section>
                        <h3>{pizza.name}</h3>
                    </section>
                    <section>
                        <h5>Ingredientes:</h5>
                        <ul>
                            {pizza.ingredients.map((ingredient, i) => (
                                <li key={i} type='none'>🍕{ingredient}</li>
                            ))}
                        </ul>
                    </section>
                    <h5 className='text-center'>${pizza.price}</h5>
                    <article className='btnCardPizza'>
                        <Button className='verMas bg-primary white' onClick={handleNavigate}>Ver Más 👀</Button>
                        <Button className='agregarCarrito bg-danger white' onClick={() => handleAddToCart(pizza)}> Añadir 🛒</Button>
                    </article>
                </div>
            ))}
        </div>
    )
}

export default Gallery
