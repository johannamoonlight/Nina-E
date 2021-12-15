import React, { useContext } from 'react'
import { CartContext } from "./CartContext"
export const CartView = () => {

    const { cart, removeItem, getPriceTotal } = useContext (CartContext)
    console.log ("En el carrito", cart)

    return <>

    {cart.map(i => {

        return <>
        <h1>{i.item.product1}</h1>
        <h2>Precio indivudual : ${i.item.precio}</h2>
        <h2>Cantidad: {i.cantidad}</h2>
        <h2>SubTotal:{i.cantidad * i.item.precio} </h2>
        <img src ={i.item.imagen} alt = {i.item.product1} style ={{height: "50px", width:"50px"}}/>
        <button onClick={ () => removeItem(i.item.id)}>Eliminar producto</button>
    </>
    }

    )}
    <h2>TOTAL: {getPriceTotal()}</h2>
    </>
} 

