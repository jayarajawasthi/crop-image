import React, { useState } from "react";
import "./LeftPanel.css";

const LeftPanel = ({ onImageUpload }) => {

    const [dragOver, setDragOver] = useState(false);


    const handleDrop = (e) => {
        e.preventDefault();
        setDragOver(false);

        const file = e.dataTransfer.files[0];
        if(file && file.type.startsWith("image/")){
            onImageUpload(file);
        }
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if(file && file.type.startsWith("image/")) {
            onImageUpload(file);
        }
    }

    return(
        <div className="left-panel">
            <h2>Upload and resize</h2>
            <p>
                Drag and drop your image. we'll crop, resize and show platform specific previews.
            </p>

            <div className={`drop-zone ${dragOver ? "drag-over" : ""}`} 
            onDragOver={(e) => {
                e.preventDefault();
                setDragOver(true);
            }}
            onDragLeave={()=> setDragOver(false)}
            onDrop={handleDrop}
            >
                Drop image here or 
                <label className="upload-button">
                    select <input type="file" accept="image/*" onChange={handleFileChange} />
                </label>
            </div>
        </div>

    )
}

export default LeftPanel;