import {useState, useEffect} from 'react';
import NetInfo from '@react-native-community/netinfo';

const useNetworkImageHandler = () => {
  const [imageError, setImageError] = useState(false);
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });

    // console.log('🚀 ~ useEffect ~ unsubscribe:', isConnected);

    return () => {
      unsubscribe();
    };
  }, []);

  return {imageError, setImageError, isConnected};
};

export default useNetworkImageHandler;
