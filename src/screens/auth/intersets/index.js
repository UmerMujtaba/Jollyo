import React, {useState} from 'react';
import {Alert, ImageBackground, StatusBar, Text} from 'react-native';
import {images} from '../../../assets/images';
import {colors} from '../../../constants/colors';
import {rhp, wp} from '../../../constants/dimensions';
import {ScreenNames, Strings} from '../../../constants/strings';
import {navigateReset} from '../../../navigationHandler/navigationRef';
import {styles} from './styles';
import { HeadingText, TouchableButton } from '../../../components/atoms';
import { InterestsSelection } from '../../../components/molecules';

const KidsInterestSelectionScreen = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelectionChange = newSelectedItems => {
    setSelectedItems(newSelectedItems);
  };

  const handleCompletePress = () => {
    if (selectedItems.length === 0) {
      Alert.alert(
        'Selection Required',
        'Please select at least one interest to proceed.',
        [{text: 'OK'}],
      );
    } else {
      navigateReset('BottomStack', {screen: ScreenNames.homeScreen});
    }
  };

  return (
    <ImageBackground source={images.backgroundImage} style={styles.container}>
      <StatusBar
        translucent={true}
        backgroundColor={colors.PURPLE.backgroundClr}
      />
      <HeadingText />
      <Text style={styles.nameHeading}>{Strings.chooseKidsInterests}</Text>
      <InterestsSelection onSelectionChange={handleSelectionChange} />
      <TouchableButton
        title={'Complete'}
        btnPropStyle={{marginTop: rhp(20), width: wp(80)}}
        onPress={handleCompletePress}
        btnInside={{width: wp(80)}}
      />
    </ImageBackground>
  );
};

export default KidsInterestSelectionScreen;
