import React, {useRef, useState} from 'react';
import {FlatList, Image, StatusBar, Text, View} from 'react-native';
import {styles} from './styles';
import data from '../../../utils/onBoardingScreenData';
import {TouchableButton} from '../../../components/atoms/button';
import {navigate} from '../../../navigationHandler/navigationRef';
import {ScreenNames} from '../../../constants/strings';
import FastImage from 'react-native-fast-image';
import {rhp} from '../../../constants/dimensions';

const renderItem = ({item}) => {
  return (
    <View style={styles.renderItem_parentView1}>
      <FastImage source={item.imgUrl} style={styles.carouselImg} />
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
      <TouchableButton
        title={'Continue'}
        btnPropStyle={{marginTop: rhp(30)}}
        onPress={() => navigate(ScreenNames.loginScreen)}
      />
    </View>
  );
};

export default OnBoardingScreen;
