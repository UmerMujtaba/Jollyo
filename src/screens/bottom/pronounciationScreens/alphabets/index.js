import React, {useEffect, useState} from 'react';
import {FlatList, ImageBackground, View} from 'react-native';
import {images} from '../../../../assets/images';
import AlphabetComponent from '../../../../components/atoms/alphabetComponent';
import CustomAppBar from '../../../../components/atoms/customAppBar';
import {useLoaderProvider} from '../../../../contextAPI';
import {alphabetData} from '../../../../utils/alphabetsScreenData';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {useNetworkImageHandler} from '../../../../hooks';
import {isTablet, rhp} from '../../../../constants/dimensions';

const AlphabetsScreen = ({route}) => {
  const [playingSound, setPlayingSound] = useState(null);
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
    const {letter, image, soundFile} = item;
    return (
      <AlphabetComponent
        letter={letter}
        URI={image}
        soundFile={soundFile}
        playingSound={playingSound}
        setPlayingSound={setPlayingSound}
      />
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
          title={'Alphabets'}
          back
          onBackPress={() => navigation.goBack()}
        />
      </View>
      <FlatList
        data={alphabetData}
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

export default AlphabetsScreen;
