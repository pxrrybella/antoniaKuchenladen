import React from "react";
import { Link } from "react-router-dom";
import circle from "../img/circle.png"

const HomeDesc = () => {
    return (
        <React.Fragment>
            <main className="p-5 d-md-flex align-items-center justify-content-center">
                <div>
                    <h1 class="text-dark animate glow">Aprende, disfruta y emprende <br/>con mis recetas</h1>
                    <h3 class="text-dark animate glow">E-book disponible</h3>
                    <Link to="https://www.instagram.com/antonia.kuchenladen/"><button class="btn btn-outline-dark animate glow delay-1">Consulta aquí</button></Link>
                </div>
                <img class="hover" src={circle} alt="imagen cupcake"/>
            </main>
        </React.Fragment>
    )
}

export default HomeDesc;