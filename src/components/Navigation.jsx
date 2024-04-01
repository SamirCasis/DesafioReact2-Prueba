import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
    return (
        <Nav>
                <NavLink to="/">🍕 Pizzeria Mamma Mia!</NavLink>
                <NavLink to="/carrito">🛒 Total ${}</NavLink>
        </Nav>
    )
}

export default Navigation