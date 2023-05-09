import React from "react";
import { Link } from "react-router-dom";
import logowhite from "../img/logowhite.png"

const Navbar = () => {
    return (
        <header>
            <nav className="bg-black d-md-flex text-center justify-content-between align-items-center">
                <img class="logo-homepage" src={logowhite} alt="Logo"/>
                <div class="">
                    <Link to="/"><button class="btn btn-outline-light m-3">Home</button></Link>
                    <Link to="/Products"><button class="btn btn-outline-light m-3">Productos</button></Link>
                    <Link to="/About"><button class="btn btn-outline-light m-3">Sobre mí</button></Link>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;