import React from "react";
import { Navbar, IconDesc, AboutMe, Footer } from "../components";
import '../index';

const HomePage = () => {
    return (
        <React.Fragment>
            <Navbar/>
            <AboutMe/>
            <IconDesc/>
            <Footer/>
        </React.Fragment>
    )
}

export default HomePage;