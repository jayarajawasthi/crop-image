import React, {  useState } from "react";
import "./HeroSection.css";
import LeftPanel from "../LeftPanel/Leftpanel";
import RightPanel from "../RightPanel/RightPanel";


const HeroSection = () => {
    
    const [imageURL, setImageURl] = useState(null);

    const handleImageUpload = (file) => {
        const url = URL.createObjectURL(file);
        setImageURl(url);
    }


    
    return(
        <section className="hero">
            <div className="hero-left">
                <LeftPanel onImageUpload={handleImageUpload} />
            </div>
            <div className="right-panel">
                <RightPanel imageURL={imageURL}  />
            </div>
        </section>
    )
}
export default HeroSection;