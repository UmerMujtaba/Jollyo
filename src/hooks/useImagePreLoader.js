import {useEffect} from 'react';
import {Image} from 'react-native';

// Preload images from a given list of URIs
const preloadImages = imageUris => {
  imageUris.forEach(uri => {
    if (typeof uri === 'string') {
      Image.prefetch(uri); // Preload the image if it's a valid string URL
    } else {
      console.warn('Invalid image URL:', uri); // Log a warning if it's not a valid URL
    }
  });
};
const usePreloadImages = imageUris => {
  useEffect(() => {
    preloadImages(imageUris); // Call this function to preload images on mount
  }, [imageUris]);
};

export default usePreloadImages;
