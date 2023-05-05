import React from "react";
import circle from "../img/circle.png"

const HomeDesc = () => {
    return (
        <React.Fragment>
            <main className="p-5 d-flex align-items-center justify-content-center">
                <div>
                <h1 class="text-dark">Aprende, disfruta y emprende <br/>con mis recetas</h1>
                <h3 class="text-dark">E-book disponible</h3>
                <button class="btn btn-outline-dark">Consulta aquí</button>
                </div>
                <img src={circle} alt="imagen cupcake"/>
            </main>
        </React.Fragment>
    )
}

export default HomeDesc;