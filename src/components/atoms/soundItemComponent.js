import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../../constants/colors';
import {hp, isTablet, rfs, rhp, rwp, wp} from '../../constants/dimensions';
import fonts from '../../constants/fonts';
import FastImage from 'react-native-fast-image';
import {useNetworkImageHandler} from '../../hooks';
import {images} from '../../assets/images';

const SoundItemComponent = ({title, onPress, imageSource}) => {
  const {imageError, setImageError, isConnected} = useNetworkImageHandler();

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View>
        <FastImage
          defaultSource={images.defaultImg}
          source={
            imageError || !isConnected ? images.defaultImg : {uri: imageSource}
          }
          resizeMode={FastImage.resizeMode.stretch}
          style={styles.imgStyle}
          onError={() => setImageError(true)}
        />
      </View>
      <Text style={styles.titleStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: isTablet ? hp(30) : hp(28),
    width: isTablet ? wp(42) : wp(45),
    backgroundColor: colors.ORANGE.pureOrangeWithOpacity,
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    marginBottom: rhp(20),
    marginHorizontal: isTablet ? rwp(12) : rwp(8),
  },
  imgStyle: {
    height: isTablet ? rhp(200) : rhp(180),
    width: isTablet ? wp(42) : wp(45),
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 5,
  },
  titleStyle: {
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.CondensedSemiBold,
    letterSpacing: isTablet ? 5 : 3,
    color: 'white',
    paddingVertical: rhp(10),
    fontSize: rfs(24),
  },
});

export default SoundItemComponent;
