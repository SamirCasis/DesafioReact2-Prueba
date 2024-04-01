import { createContext, useEffect, useState } from 'react'

export const PizzasContext = createContext()

const PizzasProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([])
  const [cart, setCart] = useState([])

  const url = './pizzas.json'

  const getPizzas = async () => {
    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error("No se puede cargar la información de las pizzas")
      }
      const data = await response.json()
      setPizzas(data)
    } catch (error) {
      console.log(error.message)
    }
  }

  const addToCart = (pizza) => {
    setCart([...cart, pizza])
  }

  const removeFromCart = (index) => {
    const updatedCart = [...cart]
    updatedCart.splice(index, 1)
    setCart(updatedCart)
  }

  const sumaTotal = () => {
    return cart.reduce((total, pizza) => total + pizza.price, 0);
  }

  useEffect(() => {
    getPizzas()
  }, [])

  return (
    <PizzasContext.Provider value={{ pizzas, cart, addToCart, removeFromCart, sumaTotal }}>
      {children}
    </PizzasContext.Provider>
  )
}

export default PizzasProvider

