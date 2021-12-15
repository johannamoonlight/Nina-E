import { useEffect, useState } from "react"
import { somethingWillhappen } from "./promises";
import { ItemList} from "./ItemList";
import{useParams} from "react-router-dom";

import db from ".../firebase/firebase";
import{ collection, query, where, getDocs } from "firebase/firestore";

export const ItemListContainer = ({greeting}) => {
    const [items, setItem] = useState ([])
    const {catId} = useParams ();
    const [loading,setLoading] =useState(true)
    
    
useEffect(() => {
    setLoading (true)
    
    const myItems = catId ? query (collection(db, "productos " ), where ("category","==",catId)): collection (db,"productos");

    getDocs(myItems).then(resultado => {
    const res = resultado.docs.maps(doc => {return { id: doc.id,...doc.data()} })
    console.log(res)

    }
    )
    .finally(() => setLoading (false))


},[catId])

    return loading ? <h1> CARGANDO...</h1>: <ItemList items={items}/>

};