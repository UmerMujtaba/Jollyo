import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, View } from 'react-native';
import Sound from 'react-native-sound';
import { SelectionContainer } from '../../atoms';
import { styles } from './styles';
import { MainExerciseData } from '../../../utils/mainExerciseData';
import { useSound } from '../../../hooks';

Sound.setCategory('Playback');

export const ScrollableSelectionList = () => {
  const navigation = useNavigation();
  // const [isLoading, setIsLoading] = useState(true);
  // const [data, setData] = useState([]);
  const playSound = useSound(
    'https://res.cloudinary.com/dtpvy8gil/video/upload/v1736403972/click_sound_ifctk3.mp3',
  );

  const handlePress = item => {
    playSound();
    console.log(item);

    setTimeout(() => {
      navigation.navigate(item.screen);
    }, 600);
  };

  // useEffect(() => {
  //   setTimeout(() => {
  //     setData(MainExerciseData); // Simulate fetching data
  //     // setIsLoading(true);
  //     setIsLoading(false);
  //   }, 2000); // Simulate loading state for 2 seconds
  // }, []);

  const renderItem = ({item, index}) => (
    <SelectionContainer
      imageSource={item.imageSource}
      heading={item.heading}
      index={index}
      onPress={() => handlePress(item)}
      // isLoading={isLoading}
    />
  );
  return (
    <View style={styles.container}>
      {/* {isLoading ? (
        // If loading, show skeletons
        [...Array(10)].map((_, index) => (
          <SkeletonItem key={index} isEven={index % 2 === 0} />
        ))
      ) : ( */}
      <FlatList
        data={MainExerciseData}
        contentContainerStyle={styles.contentContainer}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
      {/* )} */}
    </View>
  );
};


