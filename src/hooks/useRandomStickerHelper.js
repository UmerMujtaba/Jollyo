import {useState} from 'react';
import {stickers} from '../utils/stickersData';

const useStickerManager = () => {
  const [usedStickers, setUsedStickers] = useState([]);

  const getStickerForExercise = () => {
    const availableStickers = stickers.filter(
      sticker => !usedStickers.includes(sticker.key),
    );

    if (availableStickers.length === 0) {
      setUsedStickers([]);
      return stickers[Math.floor(Math.random() * stickers.length)];
    }

    const randomIndex = Math.floor(Math.random() * availableStickers.length);
    const selectedSticker = availableStickers[randomIndex];

    setUsedStickers(prev => [...prev, selectedSticker.key]);
    return selectedSticker;
  };

  return {getStickerForExercise};
};

export default useStickerManager;
