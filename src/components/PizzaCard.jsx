import { useContext } from "react"
import { PizzasContext } from "../context/DataPizza"
import { useParams } from "react-router-dom"
import { Button } from "react-bootstrap"
import "./PizzaCard.css"

const PizzaCard = () => {
  const { id } = useParams()
  const { pizzas, agregarCarrito } = useContext(PizzasContext)

  const selectedPizza = pizzas.find(pizza => pizza.id === id)

  if (!selectedPizza) {
    return <div>No se encontró la pizza seleccionada</div>
  }

  return (
    <>
      <article className='detallesTitle'>
        <h2>MÁS SOBRE MI 🍕</h2>
      </article>
      <section className='pizzaDetails'>
        <img src={selectedPizza.img} alt={selectedPizza.name} />
        <ul>
          <li key={id}>
            <h2>{selectedPizza.name}</h2>
          </li>
          <li>
            {selectedPizza.desc}
          </li>
          <section className='ingredientesDetails'>
            <h4>Ingredientes:</h4>
            <ul>
              {selectedPizza.ingredients?.map((ingredient, id) => (
                <li key={id}>🍕{ingredient}</li>
              ))}
            </ul>
          </section>
          <h4>Precio: ${selectedPizza.price} </h4>
          <Button
            className="agregarCarrito bg-danger white"
            onClick={() => agregarCarrito(selectedPizza)}
          >
            {" "}
            Añadir 🛒
          </Button>
        </ul>
      </section>
      <article>

      </article>
    </>
  )
}

export default PizzaCard
