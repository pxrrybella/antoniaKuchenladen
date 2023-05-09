import React from "react";
import { Navbar, IconDesc, Products } from "../components";
import '../index';

const HomePage = () => {
    return (
        <React.Fragment>
            <Navbar/>
            <Products/>
            <IconDesc/>
        </React.Fragment>
    )
}

export default HomePage;