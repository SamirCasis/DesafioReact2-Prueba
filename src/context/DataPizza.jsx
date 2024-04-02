import React, { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const PizzasContext = createContext()

const PizzasProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([])
  const [selectedPizza, setSelectedPizza] = useState(null)
  const [cart, setCart] = useState([])
  const url = './pizzas.json'
  const navigate = useNavigate()

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

  const pizzaHandle = (pizza) => {
    setSelectedPizza(pizza)
  }

  const irAlDetalle = (id) => {
    navigate(`/pizza/${id}`)
  }

  const agregarCarrito = (pizza) => {
    setCart([...cart, pizza])
  }

  const handleAddToCart = (pizza) => {
    agregarCarrito(pizza)
    alert('Pizza agregada al carrito')
  }

  const eliminarCarrito = (id) => {
    const updatedCart = cart.filter(pizza => pizza.id !== id)
    setCart(updatedCart)
  }

  const sumaTotal = () => {
    return cart.reduce((total, pizza) => total + pizza.price, 0)
  }

  const aumentarPrecio = (id) => {
    const updatedCart = cart.map(pizza => {
      if (pizza.id === id) {
        return { ...pizza, price: pizza.price + 1 }
      }
      return pizza
    })
    setCart(updatedCart)
  }

  const disminuirPrecio = (id) => {
    const updatedCart = cart.map(pizza => {
      if (pizza.id === id) {
        const updatedPrice = pizza.price - 1
        if (updatedPrice <= 0) {
          return null
        } else {
          return { ...pizza, price: updatedPrice }
        }
      }
      return pizza
    }).filter(Boolean)
    setCart(updatedCart)
  }

  useEffect(() => {
    getPizzas()
  }, [])

  return (
    <PizzasContext.Provider value={{ pizzas, cart, agregarCarrito, eliminarCarrito, aumentarPrecio, disminuirPrecio, sumaTotal, pizzaHandle, handleAddToCart, irAlDetalle, selectedPizza }}>
      {children}
    </PizzasContext.Provider>
  )
}

export default PizzasProvider
