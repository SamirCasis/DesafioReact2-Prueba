import { useContext } from 'react'
import { PizzasContext } from '../context/DataPizza'
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
    const { sumaTotal } = useContext(PizzasContext)

    return (
        <Nav>
            <NavLink to="/">🍕 Pizzeria Mamma Mia!</NavLink>
            <NavLink to="/carrito">🛒 Total ${sumaTotal()}</NavLink>
        </Nav>
    )
}

export default Navigation