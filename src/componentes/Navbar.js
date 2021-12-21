import React from "react"
import { CartWidget } from "./cartWidget";
import {Link} from "react-router-dom"; 

export const Navbar = () => {
    return (
    <nav className="navbar1" >
        <Link className="linknavbar" to="/">home </Link>
        <Link className="linknavbar" to="/category/accesorios">Accesorios</Link>
        <Link className="linknavbar" to="/category/abrigos">Abrigos</Link>
        <Link  className="linknavbar" to="/category/pipetas">Pipetas</Link>
        <CartWidget/> 
        
    </nav>
    );
};