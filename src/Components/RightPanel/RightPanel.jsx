import React, { useState } from "react";
import CropperBox from "../Cropper/CropperBox";
import "./RightPanel.css";

const RightPanel = ({ imageURL }) => {
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const handleCropComplete = (pixels) => {
    setCroppedAreaPixels(pixels);
    console.log("Cropped area:", pixels); // ✅ You'll now see this!
  };

  return (
    <div className="right-panel">
      <h3>Live Preview</h3>
      <div className="preview-box">
        {imageURL ? (
          <CropperBox imageURL={imageURL} onCropComplete={handleCropComplete} />
        ) : (
          <p>No image selected</p>
        )}
      </div>
    </div>
  );
};

export default RightPanel;
