import React from "react";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";
import "./HeroSection.css";


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