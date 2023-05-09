import React from "react";
import { Link } from "react-router-dom";
import prdone from "../img/prdA.png"
import prdtwo from "../img/prdB.png"
import prdthree from "../img/prdC.png"
import prdfour from "../img/prdD.png"
import prdfive from "../img/prdE.png"

const Products = () => {
    return (
        <React.Fragment>
            <main className="container">
                <article class="m-5 text-center">
                    <h1>No te pierdas los productos especiales.</h1>
                    <h2>¡Navidad, Día de la Madre, y mucho más!</h2>
                    <Link to="https://www.instagram.com/antonia.kuchenladen/"><button class="btn btn-lg btn-outline-dark">Consulta aquí</button></Link>
                </article>
                <article class="d-md-flex text-center-sm align-items-center justify-content-center">
                    <img class="hover animate glow" src={prdone} alt="imagen cupcake"/>
                    <div>
                        <h2 class="text-dark">Cupcakes</h2>
                    <div>
                        <h4 class="text-dark">Sabores: Red Velvet, Tiramisú, Birthday Cake, Carrot Cupcake, Oreo, Limón, Manjarate.</h4>
                        <h4 class="text-dark">Sabores Premium: Lemon Raspberry, Lemon Blueberry, Coconut Strawberry, Ferrero Rocher, Banofee, Snickers.</h4>
                    </div>
                    </div>
                </article>
                <article class="mt-4 d-md-flex text-center-sm align-items-center justify-content-center">
                    <img class="hover animate glow" src={prdtwo} alt="imagen cupcake"/>
                    <div>
                        <h2 class="text-dark">Mini-Cupcakes</h2>
                    <div>
                        <h4 class="text-dark">Sabores: Red Velvet, Tiramisú, Birthday Cake, Carrot Cupcake, Oreo, Limón, Manjarate.</h4>
                        <h4 class="text-dark">Sabores Premium: Lemon Raspberry, Lemon Blueberry, Coconut Strawberry, Ferrero Rocher, Banofee, Snickers.</h4>
                    </div>
                    </div>
                </article>
                <article class="mt-4 d-md-flex text-center-sm align-items-center justify-content-center">
                    <img class="hover animate glow" src={prdthree} alt="imagen cupcake"/>
                    <div>
                        <h2 class="text-dark">Alfajores de Maicena</h2>
                    <div>
                        <h4 class="text-dark">Alfajores de maicena rellenos con dulce de leche bañados en chocolate y alfajores de maicena relleno de dulce de leche con coco rallado.</h4>
                    </div>
                    </div>
                </article>
                <article class="mt-4 d-md-flex text-center-sm align-items-center justify-content-center">
                    <img class="hover animate glow" src={prdfour} alt="imagen cupcake"/>
                    <div>
                        <h2 class="text-dark">Cakesicles</h2>
                    <div>
                        <h4 class="text-dark">Perfectos para ti y todos tus eventos o antojos, consulta tu sabor favorito.</h4>
                    </div>
                    </div>
                </article>
                <article class="mt-4 mb-4 d-md-flex text-center-sm align-items-center justify-content-center">
                    <img class="hover animate glow" src={prdfive} alt="imagen cupcake"/>
                    <div>
                        <h2 class="text-dark">Blondies</h2>
                    <div>
                        <h4 class="text-dark">De la familia de los brownies por lo que es húmedo por dentro, con cubierta crujiente.</h4>
                        <h4 class="text-dark">Sabores: Limón Arándanos, Chocolate blanco y Frambuesas, Vainilla Chips, Nutella Oreo.</h4>
                    </div>
                    </div>
                </article>
            </main>
            
        </React.Fragment>
    )
}

export default Products;