export default function getCroppedImg(
  imageSrc,
  crop,
  resizeWidth = null,
  resizeHeight = null
) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.src = imageSrc;

    image.onload = () => {
      const canvas = document.createElement("canvas");

      // If resize dimensions provided, use them; else use crop size
      const outputWidth = resizeWidth || crop.width;
      const outputHeight = resizeHeight || crop.height;

      canvas.width = outputWidth;
      canvas.height = outputHeight;

      const ctx = canvas.getContext("2d");

      ctx.drawImage(
        image,
        crop.x,
        crop.y,
        crop.width,
        crop.height,
        0,
        0,
        outputWidth,
        outputHeight
      );

      canvas.toBlob((blob) => {
        if (!blob) {
          reject("Canvas is empty");
          return;
        }
        const fileUrl = URL.createObjectURL(blob);
        resolve({ blob, fileUrl }); // return blob + URL
      }, "image/jpeg");
    };

    image.onerror = () => {
      reject("Failed to load image");
    };
  });
}
