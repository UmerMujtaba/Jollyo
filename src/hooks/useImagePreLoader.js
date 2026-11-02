import {useEffect} from 'react';
import {Image} from 'react-native';


const preloadImages = imageUris => {
  imageUris.forEach(uri => {
    if (typeof uri === 'string') {
      Image.prefetch(uri); 
    } else {
      console.warn('Invalid image URL:', uri); 
    }
  });
};
export const usePreloadImages = imageUris => {
  useEffect(() => {
    preloadImages(imageUris); 
  }, [imageUris]);
};

