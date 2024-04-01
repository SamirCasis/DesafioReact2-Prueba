import { Button } from "react-bootstrap"
import { useState } from "react"

const Contador = () => {
  const [cuenta, setCuenta] = useState(0)

  const aumentar = () => {
    setCuenta(cuenta + 1)
  }

  const disminuir = () => {
    setCuenta(cuenta - 1)
  }

  return (
    <>
      <Button onClick={aumentar}>+</Button>
      <Button onClick={disminuir}>-</Button>
    </>
  )
}

export default Contador
