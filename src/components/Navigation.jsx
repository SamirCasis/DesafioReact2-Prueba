import { useContext } from 'react'
import { PizzasContext } from '../context/DataPizza'
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom'
import { Container } from 'react-bootstrap'

const Navigation = () => {
    const { sumaTotal } = useContext(PizzasContext)

    return (
        <Nav>
            <NavLink to="/">🍕 Pizzeria Mamma Mia!</NavLink>
            <Container>
                <NavLink to="/carrito">🛒 Total ${sumaTotal()}</NavLink>
            </Container>
        </Nav>
    )
}

export default Navigation