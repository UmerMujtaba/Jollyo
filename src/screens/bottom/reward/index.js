import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';
import {images} from '../../../assets/images';
import CustomAppBar from '../../../components/atoms/customAppBar';
import {rhp} from '../../../constants/dimensions';
import {styles} from './styles';
import {Strings} from '../../../constants/strings';

const RewardsScreen = () => {
  const {animalsReward, numbersReward, shapesReward, quizzesReward} =
    useSelector(state => state.rewardsReducer);
  const navigation = useNavigation();

  const rewardSections = [
    {title: 'Animal Rewards', data: animalsReward},
    {title: 'Number Rewards', data: numbersReward},
    {title: 'Shape Rewards', data: shapesReward},
    {title: 'Quiz Rewards', data: quizzesReward},
  ];

  const renderRewardItem = ({item}) => {
    const imageSource = item.image || images.defaultImg;
    return (
      <View style={styles.rewardItem}>
        <Image
          source={imageSource}
          style={styles.rewardImage}
          defaultSource={images.defaultImg}
        />
        <Text style={styles.rewardName}>{item.name}</Text>
      </View>
    );
  };

  const renderSection = section => {
    if (section.data.length === 0) {
      return (
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>{section.title}</Text>
          <View style={styles.emptySection}>
            <Image source={images.defaultImg} style={styles.rewardImage} />
            <Text style={styles.rewardName}>{Strings.noRewards}</Text>
          </View>
        </View>
      );
    }

    return (
      <View key={section.title} style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>{section.title}</Text>
        <FlatList
          data={section.data}
          renderItem={renderRewardItem}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalList}
        />
      </View>
    );
  };

  return (
    <ImageBackground source={images.backgroundImage} style={styles.container}>
      <CustomAppBar
        title={'Your Rewards'}
        onBackPress={() => navigation.goBack()}
      />

      <ScrollView style={{marginBottom: rhp(50)}}>
        {rewardSections.map((section, index) => renderSection(section))}
      </ScrollView>
    </ImageBackground>
  );
};

export default RewardsScreen;
