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
import {images} from '../../../../assets/images';
import AlphabetComponent from '../../../../components/atoms/alphabetComponent';
import CustomAppBar from '../../../../components/atoms/customAppBar';
import {isTablet, rfs, rhp, rwp, wp} from '../../../../constants/dimensions';
import {useLoaderProvider} from '../../../../contextAPI';
import {alphabetData} from '../../../../utils/alphabetsScreenData';
import {styles} from './styles';
import PoemTileComponent from '../../../../components/atoms/poemTileComponent';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {colors} from '../../../../constants/colors';
import {Strings} from '../../../../constants/strings';
import {poemsDataList} from '../../../../utils/poemsData';
import {BlurView} from 'react-native-blur';
import FastImage from 'react-native-fast-image';

const PoemsScreen = ({route}) => {
  const [playingSound, setPlayingSound] = useState(null);
  const {setLoader} = useLoaderProvider();
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [clickedItem, setClickedItem] = useState(null);
  const [rotation] = useState(new Animated.Value(0));
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
    const {duration, name, image} = item;
    return (
      <PoemTileComponent
        duration={duration}
        name={name}
        imageSource={image}
        onPress={() => {
          setClickedItem(item);
          // Alert.alert(name);
        }}
      />
    );
  };
  useEffect(() => {
    Animated.loop(
      Animated.timing(rotation, {
        toValue: 360, // Rotate 360 degrees
        duration: 4000, // Duration for one full rotation (adjust as per your needs)
        useNativeDriver: true, // Enable native driver for smoother performance
      }),
    ).start(); // Start the animation
  }, [rotation]);

  // Interpolation to rotate the image
  const rotateInterpolate = rotation.interpolate({
    inputRange: [0, 360],
    outputRange: ['0deg', '360deg'],
  });
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
        <View style={styles.roundedContainer}>
          <FontAwesome
            name="search"
            color={colors.darkOrange}
            style={styles.iconStyle}
          />
          <TextInput
            style={styles.textInput}
            placeholderTextColor={colors.darkOrange}
            placeholder={Strings.searchMusic}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        {clickedItem && (
          <TouchableOpacity
            style={styles.absoluteView}
            onPress={() => Alert.alert('Item clicked')}>
            <Animated.View
              style={{
                height: rwp(60),
                width: rwp(60),
                borderRadius: rwp(30),
                transform: [{rotate: rotateInterpolate}], // Continuous rotation applied
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <FastImage
                source={{uri: clickedItem.image}}
                resizeMode={FastImage.resizeMode.cover}
                style={{
                  height: rwp(60),
                  width: rwp(60),
                  borderRadius: rwp(30),
                }}
              />
              {/* <View
                style={{
                  height: rwp(20),
                  width: rwp(20),
                  borderRadius: rwp(10),
                  borderWidth: 5,
                  borderColor: colors.darkOrange,
                  backgroundColor: 'transparent',
                  position: 'absolute',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}></View> */}
            </Animated.View>
          </TouchableOpacity>
        )}

        <FlatList
          data={poemsDataList}
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
