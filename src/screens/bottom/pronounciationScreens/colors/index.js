import {useNavigation} from '@react-navigation/native';
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
import CustomAppBar from '../../../../components/atoms/customAppBar';
import {useLoaderProvider} from '../../../../contextAPI';
import {ColorsData} from '../../../../utils/colorsData';
import {styles} from './styles';
import {isTablet, rhp} from '../../../../constants/dimensions';

const ColorsScreen = () => {
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
    const {letter, color} = item;

    const handleSpeakerPress = () => {
      Tts.speak(letter);
      Tts.setDefaultVoice('com.apple.speech.synthesis.voice.Albert');
      Tts.setDefaultPitch(0.7);
      Tts.setDefaultRate(0.5, true);
    };

    return (
      <View style={styles.circleWrapper}>
        <TouchableOpacity
          style={[styles.circle, {backgroundColor: color}]}
          activeOpacity={0.7}
          onPress={handleSpeakerPress}>
          <Text style={styles.letterText(color)}>{letter}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <ImageBackground source={images.backgroundImage} style={styles.container}>
      <View
        style={{
          marginTop: isTablet ? rhp(20) : rhp(10),
          // marginBottom: rhp(15),
        }}>
        <CustomAppBar
          title={'C o l o r s'}
          onBackPress={() => navigation.goBack()}
          back
        />
      </View>
      <FlatList
        data={ColorsData}
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

export default ColorsScreen;
