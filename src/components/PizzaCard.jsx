import React, { useContext } from 'react';
import { PizzasContext } from '../context/DataPizza';

const PizzaList = () => {
  const { pizzas } = useContext(PizzasContext);

  return (
    <div>
      <h2>Lista de Pizzas</h2>
      <ul>
        {pizzas.map((pizza, index) => (
          <li key={index}>
            <strong>Nombre:</strong> {pizza.name}, <strong>Precio:</strong> ${pizza.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PizzaList;
