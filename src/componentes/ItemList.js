
import { Item } from "./Item"
    export const ItemList = ({ items }) => {
    
    
        return items.map(i => <Item key={i.id} item={i} />)
    }
    