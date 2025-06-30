import React from "react";
import "./RightPanel.css";


const RightPanel = ({ imageURL }) => {
    return(
        <div className="right-panel">
            <h3>Live Preview</h3>
            <div className="preview-box">
                {imageURL ? (<img src={imageURL} alt="Preview" className="preview-image" />): (
                    <p> No image selected</p>
                )}
            </div>
        </div>
    )
}

export default RightPanel;
