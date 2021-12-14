import react from "react"
import { Link } from "react-router-dom"

export const  CartWidget = () => {

return <Link to="cart/"><img src="/carrito.png" alt = "carrito" style= {{height:"30px" , width: "30px"}}/></Link>

}