import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { images } from '../../../assets/images';
import { colors } from '../../../constants/colors';
import { styles } from './styles';
import { useNetworkImageHandler } from '../../../hooks';
export const PoemTileComponent = ({imageSource, name, duration, onPress}) => {
  const [isFavorited, setIsFavorited] = useState(false);

  const handleFavoritePress = () => {
    setIsFavorited(prevState => !prevState);
  };
  const {imageError, setImageError, isConnected} = useNetworkImageHandler();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.innerCOntainer}
        onPress={onPress}
        activeOpacity={0.5}>
        <FastImage
          defaultSource={images.defaultImg}
          source={
            imageError || !isConnected ? images.defaultImg : {uri: imageSource}
          }
          style={styles.imgStyle}
          resizeMode={FastImage.resizeMode.cover}
          onError={() => setImageError(true)}
        />
        <View style={styles.detailContainer}>
          <Text style={styles.poemName}>{name}</Text>
          <Text style={styles.poemDuration}>{duration}</Text>
        </View>
        <MaterialIcons
          name={isFavorited ? 'favorite' : 'favorite-border'}
          color={isFavorited ? colors.RED.red : colors.GREY.darkGrey}
          style={styles.iconStyle2}
          onPress={handleFavoritePress}
        />
      </TouchableOpacity>
    </View>
  );
};
