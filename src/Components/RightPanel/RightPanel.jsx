import React, { useState } from "react";
import CropperBox from "../Cropper/CropperBox";
import getCroppedImg from "../../Utils/getCroppedImage";
import "./RightPanel.css";

const RightPanel = ({ imageURL }) => {
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [croppedImageURL, setCroppedImageURL] = useState(null);
  const [croppedBlob, setCroppedBlob] = useState(null);

  const handleCropComplete = (pixels) => {
    setCroppedAreaPixels(pixels);
    console.log("Crop area:", pixels);
  };

  const handleCropAndResize = async () => {
    try {
      const { blob, fileUrl } = await getCroppedImg(
        imageURL,
        croppedAreaPixels,
        300, // ✅ Resize width
        300 // ✅ Resize height
      );
      setCroppedImageURL(fileUrl);
      setCroppedBlob(blob);
    } catch (err) {
      console.error("Cropping failed:", err);
    }
  };

  const handleDownload = () => {
    if (!croppedBlob) return;

    const link = document.createElement("a");
    link.href = croppedImageURL;
    link.download = "cropped-resized.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="right-panel">
      <h3>Live Preview</h3>
      <div className="preview-box">
        {imageURL ? (
          <>
            <CropperBox
              imageURL={imageURL}
              onCropComplete={handleCropComplete}
            />
            <button className="crop-button" onClick={handleCropAndResize}>
              Crop & Resize
            </button>
          </>
        ) : (
          <p>No image selected</p>
        )}
      </div>

      {croppedImageURL && (
        <div className="preview-cropped">
          <h4>Cropped Output</h4>
          <img src={croppedImageURL} alt="Cropped" className="cropped-img" />
          <button className="download-button" onClick={handleDownload}>
            Download Image
          </button>
        </div>
      )}
    </div>
  );
};

export default RightPanel;
