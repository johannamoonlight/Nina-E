import {Link} from "react-router-dom"


export const Item = ({item}) => {

    return <Link to={ `/item/${item.id}` }>
<h1> {item.product1}</h1> 
<h2> {item.color  }    </h2>
<img src = {item.imagen} alt ={item.product1} style={{height: "600px", width: "800px"  }} />


</Link>  
}