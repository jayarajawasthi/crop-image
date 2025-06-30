import React from "react";
import "./HeroSection.css";
import LeftPanel from "../LeftPanel/Leftpanel";
import RightPanel from "../RightPanel/RightPanel";


const HeroSection = () => {
    return(
        <section className="hero">
            <div className="hero-left">
                <LeftPanel />
            </div>
            <div className="right-panel">
                <RightPanel />
            </div>
        </section>
    )
}
export default HeroSection;