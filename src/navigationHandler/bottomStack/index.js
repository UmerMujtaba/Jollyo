// bottomStack.js
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Image, Pressable, StyleSheet, View} from 'react-native';
import {images} from '../../assets/images';
import {colors} from '../../constants/colors';
import {isTablet, rfs, rhp, rwp} from '../../constants/dimensions';
import fonts from '../../constants/fonts';
import {ScreenNames} from '../../constants/strings';
import CanvasScreen from '../../screens/bottom/canvas';
import RewardsScreen from '../../screens/bottom/reward';
import SettingsScreen from '../../screens/bottom/setting';
import HomeNavigator from '../homeStack';
import PronunciationNavigator from '../pronounciationStack';
import useSound from '../../hooks/buttonClickHook';
import Sound from 'react-native-sound';
import {useNavigation} from '@react-navigation/native';

Sound.setCategory('Playback');

const Tab = createBottomTabNavigator();
const Bottom = () => {
  const TabBarIconWithLabel = ({focused, iconSource, label, screenName}) => {
    const navigation = useNavigation();
    const playSound = useSound(
      'https://res.cloudinary.com/dtpvy8gil/video/upload/v1736403972/click_sound_ifctk3.mp3',
    );
    const handlePress = () => {
      // Play sound on press
      if (playSound) {
        playSound(); // Play the sound
      }

      // Navigate to the appropriate screen
      navigation.navigate(screenName);
    };

    return (
      <Pressable
        onPress={handlePress}
        hitSlop={{top: 10, bottom: 10, right: 10, left: 10}}>
        <View
          style={[
            styles.iconContainer,
            {
              backgroundColor: focused ? colors.white : 'transparent',
              width: rwp(40),
              height: rhp(40),
              borderRadius: 12,
              //   width: focused ? rwp(30) : rwp(55),
              //   borderTopColor: focused ? colors.gradientColor2 : undefined,
              // borderTopWidth:3,
              //   bottom: 4,
              //   borderRadius: 0,
              //   borderTopWidth: focused ? 2 : 0,
              // borderTopColor:colors.lightGrey,
              // backgroundColor: colors.white,
              //   backgroundColor:"pink",
            },
          ]}>
          <Image
            source={iconSource}
            resizeMode="contain"
            style={[
              styles.icon,
              {tintColor: focused ? colors.backgroundClr : colors.white},
            ]}
          />
        </View>
      </Pressable>
    );
  };
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: rhp(65),
          animation: 'shift',
          animationEnabled: true,
          backgroundColor: 'orange',
          paddingTop: 2,
          borderTopLeftRadius: 30,
          borderColor: 'transparent',
          borderTopRightRadius: 30,
          // borderRadius:20,
          borderLeftWidth: 0.2,
          borderRightWidth: 0.2,
          position: 'absolute',
          overflow: 'hidden',
        },
        tabBarLabel: () => null, // Hide default labels
      }}>
      <Tab.Screen
        name={ScreenNames.homeNavigator}
        component={HomeNavigator}
        options={{
          headerShown: false,
          animationEnabled: true,
          tabBarIcon: ({focused}) => (
            <TabBarIconWithLabel
              focused={focused}
              iconSource={images.icons.gameIcon}
              screenName={ScreenNames.homeNavigator}
            />
          ),
        }}
      />
      <Tab.Screen
        name={ScreenNames.pronunciationNavigator}
        component={PronunciationNavigator}
        options={{
          headerShown: false,
          animationEnabled: true,
          tabBarIcon: ({focused}) => (
            <TabBarIconWithLabel
              focused={focused}
              iconSource={images.icons.speakIcon}
              screenName={ScreenNames.pronunciationNavigator}
            />
          ),
        }}
      />
      <Tab.Screen
        name={ScreenNames.canvasScreen}
        component={CanvasScreen}
        options={{
          headerShown: false,
          animationEnabled: true,
          tabBarIcon: ({focused}) => (
            <TabBarIconWithLabel
              focused={focused}
              iconSource={images.icons.drawIcon}
              screenName={ScreenNames.canvasScreen}
            />
          ),
        }}
      />
      <Tab.Screen
        name={ScreenNames.rewardScreen}
        component={RewardsScreen}
        options={{
          headerShown: false,
          animationEnabled: true,
          tabBarIcon: ({focused}) => (
            <TabBarIconWithLabel
              focused={focused}
              iconSource={images.icons.rewardsIcon}
              screenName={ScreenNames.rewardScreen}
            />
          ),
        }}
      />
      <Tab.Screen
        name={ScreenNames.settingScreen}
        component={SettingsScreen}
        options={{
          headerShown: false,
          animationEnabled: true,
          tabBarIcon: ({focused}) => (
            <TabBarIconWithLabel
              focused={focused}
              iconSource={images.icons.settingsIcon}
              screenName={ScreenNames.settingScreen}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Bottom;

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: isTablet ? rhp(0) : rhp(15),
  },
  icon: {
    width: rwp(25),
    height: rhp(25),
  },
  label: focused => ({
    color: focused ? colors.gradientColor2 : colors.grey,
    fontWeight: '500',
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Medium,
    fontSize: rfs(12),
  }),
});
