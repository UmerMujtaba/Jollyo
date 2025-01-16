import React from 'react';
import {FlatList, ImageBackground, View} from 'react-native';
import Tts from 'react-native-tts';
import {images} from '../../../../assets/images';
import AlphabetComponent from '../../../../components/atoms/alphabetComponent';
import CustomAppBar from '../../../../components/atoms/customAppBar';
import {shapesData} from '../../../../utils/shapesScreenData';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {isTablet, rhp} from '../../../../constants/dimensions';
import {Strings} from '../../../../constants/strings';

const ShapesScreen = () => {
  const navigation = useNavigation();
  const renderItem = ({item}) => {
    console.log('🚀 ~ renderItem ~ item:', item);
    const {letter, image, soundFile} = item;
    const handleSpeakerPress = () => {
      console.log('🚀 ~ handleSpeakerPress ~ item:', item);
      const word = item.letter;
      console.log('🚀 ~ handleSpeakerPress ~ word:', word);
      Tts.speak(word);
      Tts.setDefaultVoice('com.apple.speech.synthesis.voice.Albert');
      Tts.setDefaultPitch(0.5);
      Tts.setDefaultRate(0.6, true);
    };

    return (
      <AlphabetComponent
        letter={letter}
        URI={image}
        soundFile={''}
        playingSound={''}
        setPlayingSound={''}
        onPress={handleSpeakerPress}
      />
    );
  };
  return (
    <ImageBackground source={images.backgroundImage} style={styles.container}>
      <View
        style={{
          marginTop: isTablet ? rhp(20) : rhp(10),
        }}>
        <CustomAppBar
          title={Strings.shapes}
          onBackPress={() => navigation.goBack()}
          back
        />
      </View>
      <FlatList
        data={shapesData}
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

export default ShapesScreen;
