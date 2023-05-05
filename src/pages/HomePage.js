import React from "react";
import { Navbar, HomeBanner, HomeSection, HomeDesc, IconDesc } from "../components";

const HomePage = () => {
    return (
        <React.Fragment>
            <Navbar/>
            <div className="mt-3 mb-3 d-flex align-items-center">
            <HomeBanner/>
            <HomeSection/>
            </div>
            <IconDesc/>
            <HomeDesc/>
        </React.Fragment>
    )
}

export default HomePage;