import React, {useState} from 'react';
import {Alert, ImageBackground, Text} from 'react-native';
import {images} from '../../../assets/images';
import {TouchableButton} from '../../../components/atoms/button';
import {HeadingText} from '../../../components/atoms/heading';
import InterestsSelection from '../../../components/molecules/selectedInterests';
import {ScreenNames, Strings} from '../../../constants/strings';
import {navigate} from '../../../navigationHandler/navigationRef';
import {styles} from './styles';

const KidsInterestSelectionScreen = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  // Function to handle selected items change
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
      navigate('BottomStack', {screen: ScreenNames.homeScreen});
    }
  };

  return (
    <ImageBackground source={images.backgroundImage} style={styles.container}>
      <HeadingText />
      <Text style={styles.nameHeading}>{Strings.chooseKidsInterests}</Text>
      <InterestsSelection onSelectionChange={handleSelectionChange} />
      <TouchableButton
        title={'Complete'}
        btnPropStyle={{marginTop: 20}}
        onPress={handleCompletePress}
      />
    </ImageBackground>
  );
};

export default KidsInterestSelectionScreen;
