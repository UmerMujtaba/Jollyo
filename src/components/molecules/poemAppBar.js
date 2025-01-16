import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {images} from '../../assets/images';
import {colors} from '../../constants/colors';
import {isTablet, rhp, rwp, wp} from '../../constants/dimensions';
import ToggleView from '../atoms/toggleView';

const PoemAppBar = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.appBarView}>
      <View style={styles.space}>
        <View style={styles.btnStyle}>
          <TouchableOpacity
            style={[styles.btnStyle, styles.insideBtnStyle]}
            onPress={() => navigation.goBack()}>
            <FastImage
              source={images.icons.backIcon}
              style={styles.backIconStyle}
              resizeMode={FastImage.resizeMode.contain}
            />
          </TouchableOpacity>
        </View>
      </View>

      <ToggleView />
      <View style={styles.space} />
    </View>
  );
};
const styles = StyleSheet.create({
  appBarView: {
    marginVertical: rhp(20),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  btnStyle: {
    width: isTablet ? rwp(35) : rwp(45),
    backgroundColor: colors.ORANGE.blackishOrange,
    height: isTablet ? rhp(45) : rhp(50),
    borderRadius: 16,
  },
  insideBtnStyle: {
    height: isTablet ? rhp(39) : rhp(44),
    backgroundColor: colors.ORANGE.darkOrange,
    borderTopColor: 'orange',
    borderLeftColor: 'orange',
    borderRightColor: 'orange',
    borderBottomColor: 'white',
    justifyContent: 'center',
  },
  backIconStyle: {
    height: rhp(20),
    width: rwp(20),
    alignSelf: 'center',
  },
  space: {
    width: wp(28),
  },
});
export default PoemAppBar;
