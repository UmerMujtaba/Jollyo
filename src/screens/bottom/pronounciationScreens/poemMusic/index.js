import Slider from '@react-native-community/slider';
import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {images} from '../../../../assets/images';
import PoemAppBar from '../../../../components/molecules/poemAppBar';
import {colors} from '../../../../constants/colors';
import {isTablet, rfs, rwp} from '../../../../constants/dimensions';
import {useMusicPlayer} from '../../../../contextAPI/musicPlayerContext';
import {poemsDataList} from '../../../../utils/poemsData';
import {styles} from './styles';
import {IconNames} from '../../../../constants/strings';

const formatTime = seconds => {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? `0${secs}` : secs}`;
};

const PoemMusicScreen = ({route}) => {
  const {data} = route.params;
  const navigation = useNavigation();
  const {
    sound,
    isPlaying,
    currentTime,
    duration,
    progress,
    loadSound,
    togglePlayPause,
    skipForward,
    skipBackward,
    setCurrentTime,
    onSeek,
  } = useMusicPlayer();
  const currentIndex = poemsDataList.findIndex(poem => poem.id === data.id);
  useEffect(() => {
    loadSound(data.music);
  }, [data.music]);

  const nextPoem = () => {
    const nextPoem = poemsDataList[(currentIndex + 1) % poemsDataList.length];
    loadSound(nextPoem.music);
    navigation.navigate(nextPoem.screen, {data: nextPoem});
  };

  const previousPoem = () => {
    const prevPoem =
      poemsDataList[
        (currentIndex - 1 + poemsDataList.length) % poemsDataList.length
      ];
    loadSound(prevPoem.music);
    navigation.navigate(prevPoem.screen, {data: prevPoem});
  };

  return (
    <ImageBackground source={images.backgroundImage} style={styles.container}>
      <PoemAppBar />
      <View style={styles.body}>
        <View style={{position: 'relative'}}>
          <FastImage
            source={{uri: data.image}}
            resizeMode={FastImage.resizeMode.cover}
            defaultSource={images.defaultImg}
            style={styles.imgMain}
          />

          <LinearGradient
            start={{x: 1, y: 1}}
            end={{x: 0.1, y: 0.2}}
            colors={['rgba(0, 0, 0, 0.9)', 'transparent']}
            style={styles.gradientStyle}
          />
        </View>

        <View style={styles.sliderContainer}>
          <Text style={styles.headingName}>{data.name}</Text>
          <Slider
            value={progress}
            maximumValue={duration}
            onSlidingComplete={onSeek}
            minimumTrackTintColor={colors.GREY.darkGrey}
            maximumTrackTintColor={colors.BLACK.pureBlack}
            thumbTintColor={colors.ORANGE.darkOrange}
            style={styles.slider}
          />
        </View>

        <View style={styles.timeContainer}>
          <Text style={styles.timeText}>{`${formatTime(currentTime)}`}</Text>
          <Text style={styles.timeText}>{`${formatTime(duration)}`}</Text>
        </View>

        <View style={styles.btnContainer}>
          <TouchableOpacity onPress={skipBackward}>
            <Ionicons
              name={IconNames.playBackOutline}
              size={rfs(30)}
              color={colors.WHITE.white}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={previousPoem}>
            <Ionicons
              name={IconNames.playSkipBackOutline}
              size={rfs(30)}
              color={colors.WHITE.white}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={togglePlayPause}
            style={styles.playPauseContainer}>
            <Ionicons
              name={
                isPlaying
                  ? `${IconNames.pauseOutline}`
                  : `${IconNames.playOutline}`
              }
              size={rfs(30)}
              color={colors.WHITE.white}
              style={{
                paddingHorizontal: isTablet ? rwp(8) : rwp(10),
                alignSelf: 'center',
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={nextPoem}>
            <Ionicons
              name={IconNames.playSkipForwardOutline}
              size={rfs(30)}
              color={colors.WHITE.white}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={skipForward}>
            <Ionicons
              name={IconNames.playForwardOutline}
              size={rfs(30)}
              color={colors.WHITE.white}
            />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};
export default PoemMusicScreen;
