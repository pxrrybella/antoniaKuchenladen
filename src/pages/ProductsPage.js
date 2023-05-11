import React from "react";
import { Navbar, IconDesc, Products, Footer } from "../components";
import '../index';

const HomePage = () => {
    return (
        <React.Fragment>
            <Navbar/>
            <Products/>
            <IconDesc/>
            <Footer/>
        </React.Fragment>
    )
}

export default HomePage;