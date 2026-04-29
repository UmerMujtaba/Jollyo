import React, {useEffect, useState} from 'react';
import {
  FlatList,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Tts from 'react-native-tts';
import Sound from 'react-native-nitro-sound';
import {images} from '../../../../assets/images';
import {isTablet, rhp} from '../../../../constants/dimensions';
import {useLoaderProvider} from '../../../../contextAPI';
import {AnimalsData} from '../../../../utils/animalsData';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {Strings} from '../../../../constants/strings';
import { AnimalSoundComponent, CustomAppBar } from '../../../../components/atoms';

const AnimalsScreen = () => {
  const [playingSound, setPlayingSound] = useState(null);
  const {setLoader} = useLoaderProvider();
  const navigation = useNavigation();

  useEffect(() => {
    setLoader(true);
    const timer = setTimeout(() => setLoader(false), 1000);
    return () => {
      clearTimeout(timer);
      Sound.stopPlayer();
    };
  }, [setLoader]);

  const stopAndGoBack = async () => {
    await Sound.stopPlayer();
    setPlayingSound(null);
    navigation.goBack();
  };

  const renderItem = ({item}) => {
    const {letter, image, soundFile} = item;

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
        <AnimalSoundComponent
          letter={letter}
          URI={image}
          soundFile={soundFile}
          setPlayingSound={setPlayingSound}
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
      <View
        style={{
          marginTop: isTablet ? rhp(20) : rhp(10),
        }}>
        <CustomAppBar
          title={Strings.animals}
          onBackPress={stopAndGoBack}
          back
        />
      </View>
      <FlatList
        data={AnimalsData}
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

export default AnimalsScreen;

