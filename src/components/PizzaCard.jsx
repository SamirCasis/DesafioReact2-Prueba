import React, { useContext } from "react"
import { PizzasContext } from "../context/DataPizza"
import { useParams } from "react-router-dom"
import { Button } from "react-bootstrap"

const PizzaCard = () => {
  const { selectedPizza, agregarCarrito } = useContext(PizzasContext)
  const { id } = useParams()

  if (!selectedPizza) {
    return <div>No se encontró la pizza seleccionada</div>
  }

  return (
    <>
      <article>
        <h2>Detalles de la Pizza</h2>
      </article>
      <section>
        <ul>
          <li key={id}>
            <strong>Nombre: {selectedPizza.name}</strong>,{" "}
            <strong>Precio:</strong> ${selectedPizza.price}
          </li>
          <li>
            <strong>Descripción:</strong> {selectedPizza.desc}
          </li>
          <li>
            <h4>Ingredientes:</h4>
            <ul>
              {selectedPizza.ingredients?.map((ingredient, id) => (
                <li key={id}>{ingredient}</li>
              ))}
            </ul>
          </li>
        </ul>
      </section>
      <article>
        <Button
          className="agregarCarrito bg-danger white"
          onClick={() => agregarCarrito(selectedPizza)}
        >
          {" "}
          Añadir 🛒
        </Button>
      </article>
    </>
  )
}

export default PizzaCard
