import React from "react";
import { InstagramEmbed } from 'react-social-media-embed';

const AboutMe = () => {
    return (
        <React.Fragment>
            <div class="container d-md-flex mt-5 align-items-center justify-content-center">
            <div class="container animate glow d-none d-md-block">
                <InstagramEmbed url="https://www.instagram.com/p/CsByKVMuDCx/"/>
            </div>
            <div className="">
            <h2 class="text-black hover animate glow">Antonia</h2>
            <h2 class="text-black hover animate glow">Kuchenladen</h2>
            <p class="text-black about-me-text"><b>Pastelera experta en detalles</b>
            <br/>
            Con años de experiencia, en Antonia Kuchenladen encontrarás los mejores productos para días únicos,
            para tus antojos o para regalonear a esa persona especial.</p>
            </div>
            </div>
        </React.Fragment>
    )
}

export default AboutMe;