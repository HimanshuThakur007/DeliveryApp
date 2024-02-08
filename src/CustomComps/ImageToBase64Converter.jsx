/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Upload } from '../EntryFile/imagePath';

const ImageToBase64Converter = ({ onImageConverted }) => {
  const [base64Image, setBase64Image] = useState('');

  const handleImageInputChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setBase64Image(reader.result);
      onImageConverted(reader.result); // Pass the base64 image to the parent component
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="image-upload image-upload-new">
      <input type="file" onChange={handleImageInputChange} />
      {base64Image ? (
        <div className="image-uploads">
          <img src={base64Image} alt="Converted to Base64" />
         
        </div>
      ):(
        <div className="image-uploads">
          <img src={Upload} alt="Converted to Base64" />
          <h4>Upload Profile Picture</h4>
        </div>
      )}
    </div>
  );
};

export default ImageToBase64Converter;
