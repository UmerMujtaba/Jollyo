import React, {useEffect} from 'react';
import {
  FlatList,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Tts from 'react-native-tts';
import {images} from '../../../../assets/images';
import AlphabetComponent from '../../../../components/atoms/alphabetComponent';
import CustomAppBar from '../../../../components/atoms/customAppBar';
import {rhp} from '../../../../constants/dimensions';
import {useLoaderProvider} from '../../../../contextAPI';
import {VehiclesData} from '../../../../utils/vehiclesData';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';

const Vehicle = () => {
  const {setLoader} = useLoaderProvider();
  const navigation = useNavigation();
  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 1000);
    return () => setLoader(false);
  }, [setLoader]);
  const renderItem = ({item}) => {
    console.log('🚀 ~ renderItem ~ item:', item);
    const {letter, image} = item;
    const handleSpeakerPress = () => {
      console.log('🚀 ~ handleSpeakerPress ~ item:', item);
      const word = item.letter;
      console.log('🚀 ~ handleSpeakerPress ~ word:', word);
      Tts.speak(word);
      Tts.setDefaultVoice('com.apple.speech.synthesis.voice.Albert');
      Tts.setDefaultPitch(0.7);
      Tts.setDefaultRate(0.5, true);
    };
    return (
      <View>
        <AlphabetComponent
          letter={letter}
          URI={image}
          soundFile={''}
          playingSound={''}
          setPlayingSound={''}
        />
        <View style={{alignSelf: 'center', marginTop: rhp(10)}}>
          <View style={styles.btnContainer} activeOpacity={0.7}>
            <TouchableOpacity
              style={[styles.btnContainer, styles.btnContainerInside]}
              activeOpacity={0.7}
              onPress={handleSpeakerPress}>
              <Text style={styles.animalName}>{letter}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <ImageBackground source={images.backgroundImage} style={styles.container}>
      <CustomAppBar
        title={'Vehicles'}
        onBackPress={() => navigation.goBack()}
        back
      />
      <FlatList
        data={VehiclesData}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapperStyle}
        contentContainerStyle={styles.contentContainerStyle}
        showsVerticalScrollIndicator={false}
      />
    </ImageBackground>
  );
};

export default Vehicle;
