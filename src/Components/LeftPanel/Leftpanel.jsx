import React from "react";
import "./LeftPanel.css";

const LeftPanel = () => {
    return(
        <div className="left-panel">
            <h2>Upload and resize</h2>
            <p>
                Drag and drop your image. we'll crop, resize and show platform specific previews.
            </p>
            <div className="drop-zone">Drop Image Here</div>
        </div>

    )
}

export default LeftPanel;