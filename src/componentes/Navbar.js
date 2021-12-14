import React from "react"
import { CartWidget } from "./cartWidget";
import {Link} from "react-router-dom"; 

export const Navbar = () => {
    return (
    <nav className="lasclases" style= { {background: "violet"}}>
        <Link to="/">home </Link>
        <Link to="/category/accesorios">Accesorios</Link>
        <Link to="/category/abrigos">Abrigos</Link>
        <Link to="/category/pipetas">Pipetas</Link>
        <CartWidget/> 
        
    </nav>
    );
};