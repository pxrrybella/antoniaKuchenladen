import React from "react";
//import { Link } from "react-router-dom";
import logowhite from "../img/logowhite.png"

const Navbar = () => {
    return (
        <header>
            <nav className="bg-black d-flex justify-content-between align-items-center">
                <img class="logo-homepage" src={logowhite} alt="Logo"/>
                <div>
                <button class="btn btn-outline-light me-5">Home</button>
                <button class="btn btn-outline-light me-5">Productos</button>
                <button class="btn btn-outline-light me-5">Sobre mí</button>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;