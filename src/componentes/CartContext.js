import React, { useState} from "react"

export const CartContext = React.createContext();

export const CartProvider = ({ children}) => {

        const [cart, setCart] = useState([]) 
        console.log("CART", cart )

        const addTocart = (item,cantidad)=> {
            console.log("CANTIDAD", cantidad)

            const myItem = cart.find (i=> i.item.id === item.id)
            if (myItem) {
                myItem.cantidad = myItem.cantidad + cantidad 
                setCart ([...cart ])
            }
            else {
                setCart ([...cart, {item, cantidad }])
            }
        }

        /* AGREGAMOS FUNCIONES getTotalQuantity, getPriceTotal, removeItem para manejar el cartview */
        const getTotalQuantity = () => {
            return cart.reduce((acumulador, item) => item.cantidad + acumulador, 0)
        }

        const getPriceTotal = () => {
            return cart.reduce((acumulador, item) => item.cantidad * item.item.precio + acumulador, 0)
        }

        const removeItem = (id) => {
            const cartAux = cart.filter( i => i.item.id !== id )

            setCart( [...cartAux] )

        }

        const clearCart = () => {
            setCart([])
        }

        return <CartContext.Provider value = {{ cart , addTocart, getTotalQuantity, getPriceTotal, removeItem, clearCart }} >
        {children}
    </CartContext.Provider>
    }