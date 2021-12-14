import { useEffect, useState } from "react"
import { somethingWillhappen } from "./promises";
import { ItemList} from "./ItemList";
import{useParams} from "react-router-dom";

export const ItemListContainer = ({greeting}) => {
    const [items, setItem] = useState ([])
    const {catId} = useParams ();
    const [loading,setLoading] =useState(true)
    
    
useEffect(() => {
    setLoading (true)
    somethingWillhappen().then(resultado =>
    catId ? setItem(resultado.filter(item => item.category === catId))
    :
    setItem(resultado)
    )
    .finally(() => setLoading (false))


},[catId])

    return loading ? <h1> CARGANDO...</h1>: <ItemList items={items}/>

};