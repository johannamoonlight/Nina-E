import { useEffect, useState } from "react"
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";

import db from "../firebase/firebase"; 
import{ doc, getDoc } from "firebase/firestore";

export const ItemDetailContainer = () => {
    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true)
    const { itemId } = useParams();

    useEffect(() => {
        setLoading(true)

        const ref = doc(db, "productos ", itemId)

        getDoc(ref).then(resultado =>
            setItem({ id: resultado.id, ...resultado.data() })
            
        ).finally(() => setLoading(false))

    }, [itemId])



    return loading ? <h1>CARGANDO..</h1> : <ItemDetail item={item} />

};