import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import MenuItemTile from '../atoms/menuTile';
import {images} from '../../assets/images';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {resetUserData} from '../../redux/slices/userDataSlice';
import {resetTimer} from '../../redux/slices/timerSlice';
import firebaseHelperFunctions from '../../helper/firebaseHelperFunctions';

const MenuContainer = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleClearData = () => {
    dispatch(resetUserData());
    // dispatch(resetTimer());
    setTimeout(() => {
      firebaseHelperFunctions.signOut();
      navigation.navigate('AuthStack', {screen: 'registerationScreen'});
    }, 400);
  };

  return (
    <View style={styles.container}>
      <MenuItemTile
        title={'Kids Profile Setting'}
        subHeading={'Manage your kids profile'}
        imageSource={images.icons.profileIcon}
        onPress={''}
      />
      <MenuItemTile
        title={'Kid Activity Stats'}
        subHeading={'Review your kid goals/progress'}
        imageSource={images.icons.statsIcon}
        onPress={''}
      />
      <MenuItemTile
        title={'Logout'}
        subHeading={'See you soon!'}
        imageSource={images.icons.logoutIcon}
        onPress={handleClearData}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'teal',
    // paddingVertical: 10,
  },
});
export default MenuContainer;
