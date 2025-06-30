import React, { useCallback, useState } from "react";
import Cropper from "react-easy-crop";
import "./CropperBox.css"


const CropperBox = ({ imageURL, onCropComplete}) => {
    const[crop, setCrop] = useState({x:0, y:0});
    const [zoom, setZoom] = useState(1);
    
    
    const handleCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
        onCropComplete(croppedAreaPixels);
    }, [onCropComplete]);



    return(
        <div className="cropper-container">
            <Cropper 
                image = { imageURL }
                crop = {crop} 
                zoom  = {zoom}
                aspect={1} //you can change it to 4/5, 16/9 etc
                onCropChange={setCrop}
                onZoomChange={setZoom}
                onCropComplete={handleCropComplete}
            />
        </div>
    )
}

export default CropperBox;