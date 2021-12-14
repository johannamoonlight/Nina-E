import React, { useState} from "react"

export const CartContext = React.createContext();

export const CartProvider = ({ children}) => {
        const [cart, setCart] = useState([]) 
        console.log(cart )

        const addTocart = (item,cantidad)=> {
            const myItem = cart.find (i=> i.item.id === item.id)
            if (myItem) {
                myItem.cantidad = myItem.cantidad + cantidad 
                setCart ([...cart ])
            }
            else {
                setCart ([...cart, {item, cantidad }])
            }
        }

return <CartContext.Provider value = {{ cart , addTocart }} >
    {children}
</CartContext.Provider>
}