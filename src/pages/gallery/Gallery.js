import React, { useState } from 'react';
import './gallery.css'; // Adjust the path as needed

// Utility function to dynamically import images
function importAll(r) {
  let images = {};
  r.keys().forEach((item) => { 
    images[item.replace('./', '')] = r(item); 
  });
  return images;
}

// Import all images from the 'src/assets/posts' directory
const images = importAll(require.context('./../../assets/posts', false, /\.(jpg|jpeg|png)$/));

// Gallery Component
export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Sort images by name in descending order
  const sortedImageKeys = Object.keys(images).sort((a, b) => b.localeCompare(a));
  const imageList = sortedImageKeys.map(key => images[key]);

  const handleImageClick = (img) => {
    setSelectedImage(img);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const handleModalClick = (e) => {
    // Close the modal if the background is clicked
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  return (
    <div className="gallery-container">
      <h1>Gallery</h1>
      <div className="gallery-grid">
        {imageList.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Gallery ${index + 1}`}
            className="gallery-image"
            onClick={() => handleImageClick(img)}
          />
        ))}
      </div>

      {selectedImage && (
        <div className="modal" onClick={handleModalClick}>
          <span className="modal-close" onClick={handleCloseModal}>×</span>
          <img
            src={selectedImage}
            alt="Fullscreen View"
            className="modal-image"
          />
        </div>
      )}
    </div>
  );
};
