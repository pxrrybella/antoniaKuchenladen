import React from "react";
import { Navbar, HomeBanner, HomeSection, HomeDesc, IconDesc, Footer } from "../components";
import '../index';

const HomePage = () => {
    return (
        <React.Fragment>
            <Navbar/>
            <div className="animate glow mt-3 mb-3 d-flex align-items-center">
            <HomeBanner/>
            <HomeSection/>
            </div>
            <IconDesc/>
            <HomeDesc/>
            <Footer/>
        </React.Fragment>
    )
}

export default HomePage;