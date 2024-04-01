import React, { createContext, useEffect, useState } from 'react'

export const PizzasContext = createContext()

const PizzasProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([])
  const url = './pizzas.json'

  const getPizzas = async () => {
    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error("No se puede cargar la información de las pizzas")
      }
      const data = await response.json()
      setPizzas(data);
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    getPizzas();
  }, [])

  const addToCart = (pizza) => {
    setCart([...cart, pizza]);
  };

  return (
    <PizzasContext.Provider value={{ pizzas, addToCart }}>
      {children}
    </PizzasContext.Provider>
  );
};

export default PizzasProvider;
