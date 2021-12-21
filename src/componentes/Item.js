import {Link} from "react-router-dom"


export const Item = ({item}) => {

    return <Link className= "sinsubrayar" to={ `/item/${item.id}` }>
<h1 className="nina1"> {item.product1}</h1> 
<h2 classname="nina2"> {item.color  }    </h2>
<img src = {item.imagen} alt ={item.product1} style={{height: "400px", width: "500px"  }} />


</Link>  
}