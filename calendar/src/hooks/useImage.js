import { useState } from 'react';

export const useImage = () => {
  const [image, setImage] = useState('');

  const handleSetImage = (element) => {
    // const files = element;
    // const reader = new FileReader();
    // reader.onload = function () {
    //   setImage(reader.result);
    // };
    // reader.readAsDataURL(files);
    const fd = new FormData();
    fd.append('image', element)
    setImage(fd);
  };

  return {
    image,
    handleSetImage,
  };
};
