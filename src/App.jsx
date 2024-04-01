import { Routes, Route } from 'react-router-dom'
import { Home, Pizzas, Carrito, NotFound} from './views/Index'
import Navigation from './components/Navigation'
import 'bootstrap/dist/css/bootstrap.min.css'
import PizzaCard from './components/PizzaCard'

const App = () => {
  return (
    <>
    <Navigation />
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/pizza' element={<Pizzas />} />
    <Route path='/pizza/:id' element={<PizzaCard />} />
    <Route path='/carrito' element={<Carrito />} />
    <Route path='*' element={<NotFound />} />
   </Routes>
    </>
  )
}

export default App