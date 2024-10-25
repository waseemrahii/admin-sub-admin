

import React, { useState, useCallback } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../../../../../components/FormInput/Imagepreview.css";
import FileUpload from "./imageFileUpload";
import debounce from "lodash.debounce"; // Import lodash debounce

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught in error boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong. Please try again later.</h1>;
    }
    return this.props.children;
  }
}

const ProductImageWrapper = ({
  thumbnail,
  setThumbnail,
  images,
  setImages,
}) => {
  const [additionalImages, setAdditionalImages] = useState([]);
  const maxSize = 34 * 1024; // 34 KB

  const showError = useCallback(
    debounce((message) => toast.error(message), 300),
    []
  );

  const validateFile = (file) => {
    const allowedTypes = [
      "image/jpeg",
      "image/png",
      "image/webp",
      "image/gif",
      "image/bmp",
      "image/tiff",
    ];

    if (!allowedTypes.includes(file.type)) {
      showError("Invalid file format. Please upload a JPG, PNG, WEBP, GIF, BMP, or TIFF image.");
      return false;
    }

    if (file.size > maxSize) {
      showError("File size exceeds 34 KB. Please upload a smaller image.");
      return false;
    }

    return true;
  };

  const handleThumbnailChange = (e) => {
    const file = e.target.files[0];
    if (file && validateFile(file)) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setThumbnail(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAdditionalImageChange = (e, index) => {
    const file = e.target.files[0];
    if (file && validateFile(file)) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newImages = [...additionalImages];
        newImages[index] = reader.result;
        setAdditionalImages(newImages);
        setImages(newImages);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDeleteImage = (index) => {
    const updatedImages = additionalImages.filter((_, idx) => idx !== index);
    setAdditionalImages(updatedImages);
    setImages(updatedImages);
  };

  return (
    <ErrorBoundary>
      <div className="product-image-wrapper mt-6 mb-3">
        <ToastContainer />
        <div className="item-1">
          <FileUpload
            label="Product Thumbnail"
            ratio="1:1 (500 x 500 px)"
            image={thumbnail}
            onChange={handleThumbnailChange}
            onDelete={() => setThumbnail(null)}
            isThumbnail
          />
        </div>

        <div className="additional_image_column item-2 col-md-9">
          <div className="card h-100">
            <div className="card-body">
              <div className="coba-area">
                <div className="row g-2" id="additional_Image_Section">
                  {additionalImages.map((img, idx) => (
                    <div key={idx} className="col-sm-12 col-md-4">
                      <FileUpload
                        label={`Additional Image ${idx + 1}`}
                        image={img}
                        onChange={(e) => handleAdditionalImageChange(e, idx)}
                        onDelete={() => handleDeleteImage(idx)}
                      />
                    </div>
                  ))}
                  <div className="col-sm-12 col-md-4">
                    <FileUpload
                      label="Upload Additional Image"
                      ratio="1:1 (500 x 500 px)"
                      onChange={(e) =>
                        handleAdditionalImageChange(e, additionalImages.length)
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default ProductImageWrapper;






// import React, { useState } from "react";
// import { AiOutlineDelete } from "react-icons/ai";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import "../../../../../../components/FormInput/Imagepreview.css";
// import FileUpload from "./imageFileUpload";

// const ProductImageWrapper = ({
//   thumbnail,
//   setThumbnail,
//   images,
//   setImages,
// }) => {
//   const [additionalImages, setAdditionalImages] = useState([]);

//   const validateFile = (file) => {
//     const allowedTypes = [
//       "image/jpeg",
//       "image/png",
//       "image/webp",
//       "image/gif",
//       "image/bmp",
//       "image/tiff",
//     ];
//     const maxSize = 2 * 1024 * 1024; // 2 MB

//     if (!allowedTypes.includes(file.type)) {
//       toast.error(
//         "Invalid file format. Please upload a JPG, PNG, WEBP, GIF, BMP, or TIFF image."
//       );
//       return false;
//     }

//     if (file.size > maxSize) {
//       toast.error("File size exceeds 2 MB. Please upload a smaller image.");
//       return false;
//     }

//     return true;
//   };

//   const handleThumbnailChange = (e) => {
//     const file = e.target.files[0];
//     if (file && validateFile(file)) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setThumbnail(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleAdditionalImageChange = (e, index) => {
//     const file = e.target.files[0];
//     if (file && validateFile(file)) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         const newImages = [...additionalImages];
//         newImages[index] = reader.result;
//         setAdditionalImages(newImages);
//         setImages(newImages);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleDeleteImage = (index) => {
//     const updatedImages = additionalImages.filter((_, idx) => idx !== index);
//     setAdditionalImages(updatedImages);
//     setImages(updatedImages);
//   };

//   return (
//     <div className="product-image-wrapper mt-6 mb-3">
//       <ToastContainer />
//       <div className="item-1">
//         <FileUpload
//           label="Product Thumbnail"
//           ratio="1:1 (500 x 500 px)"
//           image={thumbnail}
//           onChange={handleThumbnailChange}
//           onDelete={() => setThumbnail(null)}
//           isThumbnail
//         />
//       </div>

//       <div className="additional_image_column item-2 col-md-9">
//         <div className="card h-100">
//           <div className="card-body">
//             <div className="coba-area">
//               <div className="row g-2" id="additional_Image_Section">
//                 {additionalImages.map((img, idx) => (
//                   <div key={idx} className="col-sm-12 col-md-4">
//                     <FileUpload
//                       label={`Additional Image ${idx + 1}`}
//                       image={img}
//                       onChange={(e) => handleAdditionalImageChange(e, idx)}
//                       onDelete={() => handleDeleteImage(idx)}
//                     />
//                   </div>
//                 ))}
//                 <div className="col-sm-12 col-md-4">
//                   <FileUpload
//                     label="Upload Additional Image"
//                     ratio="1:1 (500 x 500 px)"
//                     onChange={(e) =>
//                       handleAdditionalImageChange(e, additionalImages.length)
//                     }
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductImageWrapper;
