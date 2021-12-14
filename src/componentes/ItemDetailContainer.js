import { useEffect, useState } from "react"
import { somethingWillhappen } from "./promises";
import { ItemDetail} from "./ItemDetail";
import{useParams} from "react-router-dom";

export const ItemDetailContainer = () => {
    const [item, setItem] = useState ({})
    const [loading,setLoading] =useState(true)
    const {itemId} = useParams ();

useEffect(() => {
    setLoading(true)

somethingWillhappen().then(resultado =>
    itemId && setItem(resultado.find(item => item.id === itemId))
    ).finally(()=> setLoading(false))

},  [itemId])



    return  loading ? <h1>CARGANDO..</h1> :<ItemDetail item ={item} />

};