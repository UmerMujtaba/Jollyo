import React from 'react';
import {ImageBackground, StatusBar, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useSelector} from 'react-redux';
import {images} from '../../../assets/images';
import ScrollableSelectionList from '../../../components/molecules/selectionContainerList';
import {styles} from './styles';

const GamesScreen = ({navigation}) => {
  const {username, imagePath, age, gender} = useSelector(
    state => state.userReducer,
  );
  console.log(
    `🚀 ~ GamesScreen ~ username: ${username}, imagePath: ${imagePath} ,age: ${age}, gender:${gender}`,
  );

  return (
    <ImageBackground source={images.backgroundImage} style={styles.container}>
      <StatusBar translucent={true} backgroundColor={'transparent'} />
      <View style={styles.appBarContainer}>
        <FastImage
          source={imagePath}
          resizeMode={FastImage.resizeMode.contain}
          style={styles.avatarImg}
        />
        <Text style={styles.nameHeading}> {`Hi, ${username}`}</Text>
      </View>
      <ScrollableSelectionList />
    </ImageBackground>
  );
};
export default GamesScreen;
