import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  Alert,
  Animated,
  FlatList,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {images} from '../../../../assets/images';
import CustomAppBar from '../../../../components/atoms/customAppBar';
import PoemTileComponent from '../../../../components/atoms/poemTileComponent';
import {colors} from '../../../../constants/colors';
import {rwp} from '../../../../constants/dimensions';
import {ScreenNames, Strings} from '../../../../constants/strings';
import {useLoaderProvider} from '../../../../contextAPI';
import {useMusicPlayer} from '../../../../contextAPI/musicPlayerContext';
import {poemsDataList} from '../../../../utils/poemsData';
import {styles} from './styles';

const PoemsScreen = ({route}) => {
  const [playingSound, setPlayingSound] = useState(null);
  const {setLoader} = useLoaderProvider();
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [clickedItem, setClickedItem] = useState(null);
  const [rotation] = useState(new Animated.Value(0));
  const {loadSound, isPlaying} = useMusicPlayer();
  console.log('🚀 ~ PoemsScreen ~ isPlaying:', isPlaying);

  useEffect(() => {
    // setLoader(true);
    setLoader(false);
    setTimeout(() => {
      setLoader(false);
    }, 1000);
    return () => setLoader(false);
  }, [setLoader]);
  const renderItem = ({item}) => {
    console.log('🚀 ~ renderItem ~ item:', item);
    const {duration, name, image, screen, music} = item;
    const data = item;
    console.log('🚀 ~ renderItem ~ data:', data);
    return (
      <PoemTileComponent
        duration={duration}
        name={name}
        imageSource={image}
        onPress={() => {
          setClickedItem(item);
          loadSound(item.music);
          setTimeout(() => {
            navigation.navigate(item.screen, {data: item});
          }, 100);
        }}
      />
    );
  };

  const filteredPoems = poemsDataList.filter(item => {
    return item.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  useEffect(() => {
    if (isPlaying) {
      Animated.loop(
        Animated.timing(rotation, {
          toValue: 360,
          duration: 4000,
          useNativeDriver: true,
        }),
      ).start();
    } else {
      rotation.stopAnimation();
      rotation.setValue(0);
    }
  }, [isPlaying, rotation]);

  const rotateInterpolate = rotation.interpolate({
    inputRange: [0, 360],
    outputRange: ['0deg', '360deg'],
  });

  const handleCdPress = () => {
    if (clickedItem) {
      navigation.navigate(ScreenNames.poemMusicScreen, {data: clickedItem});
    }
  };
  return (
    <ImageBackground source={images.backgroundImage} style={styles.container}>
      <View style={styles.appBarView}>
        <CustomAppBar
          title={'P o e m s'}
          back
          onBackPress={() => navigation.goBack()}
          textProp={styles.appBarTitle}
        />
      </View>
      <View style={styles.body}>
        <Text style={styles.headerText}>{Strings.listenTheLatestPoems}</Text>
        {/* <View style={styles.roundedContainer}>
          <FontAwesome
            name="search"
            color={colors.ORANGE.darkOrange}
            style={styles.iconStyle}
          />
          <TextInput
            style={styles.textInput}
            placeholderTextColor={colors.ORANGE.darkOrange}
            placeholder={Strings.searchMusic}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View> */}
        <View style={styles.roundedContainer2}>
          <FontAwesome
            name="search"
            color={colors.WHITE.white}
            style={styles.iconStyle}
          />
          <TextInput
            style={styles.textInput}
            placeholderTextColor={colors.WHITE.white}
            placeholder={Strings.searchMusic}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        {/* {clickedItem && ( */}
        {isPlaying && (
          <TouchableOpacity style={styles.absoluteView} onPress={handleCdPress}>
            <Animated.View
              style={[
                styles.animatedContainer,
                {transform: [{rotate: rotateInterpolate}]},
              ]}>
              <FastImage
                source={{uri: clickedItem?.image}}
                resizeMode={FastImage.resizeMode.cover}
                style={styles.imgStyle}
                defaultSource={images.defaultImg}
              />
            </Animated.View>
          </TouchableOpacity>
        )}

        <FlatList
          data={filteredPoems}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={1}
          contentContainerStyle={styles.contentContainerStyle}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </ImageBackground>
  );
};

export default PoemsScreen;
