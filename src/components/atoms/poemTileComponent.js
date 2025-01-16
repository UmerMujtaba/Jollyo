import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {isTablet, rfs, rhp, rwp, wp} from '../../constants/dimensions';
import FastImage from 'react-native-fast-image';
import {images} from '../../assets/images';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {colors} from '../../constants/colors';
import fonts from '../../constants/fonts';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNetworkImageHandler} from '../../hooks';
const PoemTileComponent = ({imageSource, name, duration, onPress}) => {
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

const styles = StyleSheet.create({
  container: {
    height: rhp(88),
    width: wp(90),
    // backgroundColor: 'green',
    marginBottom: rhp(10),
    marginVertical: rhp(2),
  },
  innerCOntainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // justifyContent:'space-around'
  },
  imgStyle: {
    height: isTablet ? rhp(88) : rhp(90),
    width: isTablet ? rwp(74) : rhp(100),
    borderRadius: isTablet ? 36 : 26,
  },
  detailContainer: {
    width: isTablet ? wp(60) : wp(55),
    // backgroundColor: 'purple',
    flexDirection: 'column',
    paddingVertical: rhp(5),
    paddingHorizontal: rwp(10),
  },
  poemName: {
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Bold,
    color: colors.WHITE.white,
    // color: colors.darkOrange,
    fontSize: rfs(20),
    letterSpacing: 2,
  },
  poemDuration: {
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Medium,
    // color: colors.white,
    color: colors.ORANGE.mildOrange,
    // color: colors.greyish,
    // color: colors.darkGrey,
    fontSize: rfs(14),
    letterSpacing: 1,
    marginVertical: rhp(10),
  },
  iconStyle: {
    fontSize: isTablet ? rfs(20) : rfs(24),
    marginTop: isTablet ? rhp(5) : rhp(2),
    marginHorizontal: isTablet ? rwp(5) : rwp(2),
  },
  iconStyle2: {
    fontSize: isTablet ? rfs(26) : rfs(28),
    marginTop: isTablet ? rhp(5) : rhp(2),
    marginHorizontal: isTablet ? rwp(10) : rwp(10),
  },
});
export default PoemTileComponent;
