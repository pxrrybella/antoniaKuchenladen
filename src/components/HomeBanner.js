import React from "react";
import photoone from "../img/a.PNG"
import phototwo from "../img/b.PNG"
import photothree from "../img/c.PNG"

const HomeBanner = () => {
  return (
    <div className="d-none d-md-block container w-50">
      <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={photoone} class="d-block w-100 rounded" alt="Cupcake"/>
          </div>
          <div class="carousel-item">
            <img src={phototwo} class="d-block w-100 rounded" alt="Cupcake"/>
          </div>
        <div class="carousel-item">
            <img src={photothree} class="d-block w-100 rounded" alt="Cupcake"/>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
        </div>
    </div>
)
}

export default HomeBanner;