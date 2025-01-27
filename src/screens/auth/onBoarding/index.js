import React, {useRef, useState} from 'react';
import {
  Button,
  Dimensions,
  FlatList,
  Image,
  StatusBar,
  Text,
  View,
} from 'react-native';
import {styles} from './styles';
import data from '../../../utils/onBoardingScreenData';
import {TouchableButton} from '../../../components/atoms/button';
import {navigate} from '../../../navigationHandler/navigationRef';
import {ScreenNames} from '../../../constants/strings';
import FastImage from 'react-native-fast-image';
import {rhp, wp} from '../../../constants/dimensions';
import {images} from '../../../assets/images';
import {Linking} from 'react-native';
import {WebView} from 'react-native-webview';


const renderItem = ({item}) => {
  return (
    <View style={styles.renderItem_parentView1}>
      <FastImage
        source={item.imgUrl}
        style={styles.carouselImg}
        defaultSource={images.defaultImg}
      />
      <Text style={styles.carouserTitle}>{item.heading}</Text>
      <Text style={styles.carouserSubTitle}>{item.title}</Text>
    </View>
  );
};

const OnBoardingScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const onViewableItemsChanged = ({viewableItems, changed}) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  };
  const viewabilityConfig = {
    itemVisiblePercentThreshold: 70,
  };

  const openLink = () => {
    Linking.openURL(
      'https://stg.wowpowers.com/stream-player/edik/livestream/f615e198-1313-466d-9843-a152175d474f/video/4fe1243f-0163-4114-bb90-4fdfd7554a03',
    ).catch(err => console.error('An error occurred', err));
  };

  return (
    <View style={styles.container}>
      <StatusBar translucent={true} backgroundColor={'transparent'} />
      <View style={styles.topCircle} />
      <View style={styles.carouselWrapper}>
        <FlatList
          data={data}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onViewableItemsChanged={onViewableItemsChanged}
          renderItem={renderItem}
          viewabilityConfig={viewabilityConfig}
          keyExtractor={(item, index) => (item.title + index).toString()}
        />
        <View style={styles.dotsContainer}>
          {[...Array(data.length)].map((item, index) => {
            return <View style={styles.dotColor(index, currentIndex)} />;
          })}
        </View>
      </View>
      <View style={styles.btnView}>
        <TouchableButton
          title={'Continue'}
          btnPropStyle={{width: wp(80)}}
          btnInside={{width: wp(80)}}
          onPress={() => navigate(ScreenNames.loginScreen)}
        />
      </View>
    </View>
  );
};

export default OnBoardingScreen;
