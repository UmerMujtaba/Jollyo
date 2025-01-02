import React, {useState} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from '../../constants/colors';
import {isTablet, rfs, rhp, rwp} from '../../constants/dimensions'; // Assuming these are already defined
import {images} from '../../assets/images';
import FastImage from 'react-native-fast-image';
const CustomBottomTab = ({onNext, onBack, onSpeak}) => {
  // const [isPlaying, setIsPlaying] = useState(false);

  // const handlePlayPause = () => {
  //   setIsPlaying(prevState => !prevState);
  // };

  return (
    <View style={styles.tabContainer}>
      <TouchableOpacity onPress={onBack} style={styles.tabButton}>
        <TouchableOpacity
          style={[styles.tabButton, styles.tabButtonInside]}
          onPress={onBack}>
          <Ionicons name={'arrow-back'} color={'white'} size={rfs(24)} />
        </TouchableOpacity>
      </TouchableOpacity>

      {onSpeak && (
        <TouchableOpacity onPress={onSpeak} style={styles.tabButton}>
          <TouchableOpacity
            style={[styles.tabButton, styles.tabButtonInside]}
            onPress={onSpeak}>
            <FastImage
              source={images.icons.speakIcon}
              style={{resizeMode: 'contain', height: rhp(20), width: rwp(20)}}
            />
            {/* {isPlaying ? (
            <Ionicons name={'pause-outline'} color={'white'} size={rfs(24)} />
          ) : (
            <Ionicons name={'play-outline'} color={'white'} size={rfs(24)} />
          )} */}
          </TouchableOpacity>
        </TouchableOpacity>
      )}
      <TouchableOpacity onPress={onNext} style={styles.tabButton}>
        <TouchableOpacity
          style={[styles.tabButton, styles.tabButtonInside]}
          onPress={onNext}>
          <Ionicons name={'arrow-forward'} color={'white'} size={rfs(24)} />
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: rwp(20),
    backgroundColor: 'orange',
    height: rhp(65),
    borderTopLeftRadius: 30,
    borderColor: 'transparent',
    borderTopRightRadius: 30,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  tabButton: {
    alignItems: 'center',
    height: isTablet ? rhp(45) : rhp(50),
    width: isTablet ? rwp(35) : rwp(45),
    backgroundColor: colors.blackishOrange,
    // height: rhp(50),
    alignSelf: 'center',
    borderRadius: 12,
  },
  tabButtonInside: {
    height: isTablet ? rhp(39) : rhp(44),
    backgroundColor: colors.darkOrange,
    borderTopColor: 'orange',
    borderLeftColor: 'orange',
    borderRightColor: 'orange',
    borderBottomColor: 'white',
    justifyContent: 'center',
  },
});

export default CustomBottomTab;
