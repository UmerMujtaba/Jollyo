// bottomStack.tsx
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Pressable, StyleSheet, View, ImageSourcePropType } from 'react-native';
import { images } from '../../assets/images';
import { colors, fonts, isTablet, rfs, rhp, rwp, ScreenNames, soundAssets } from '../../constants';
import { useSound } from '../../hooks';
import CanvasScreen from '../../screens/bottom/canvas';
import RewardsScreen from '../../screens/bottom/reward';
import SettingsScreen from '../../screens/bottom/setting';
import HomeNavigator from '../homeStack';
import PronunciationNavigator from '../pronounciationStack';


const Tab = createBottomTabNavigator();

interface TabBarIconProps {
  focused: boolean;
  iconSource: ImageSourcePropType;
  screenName: string;
}

const TabBarIconWithLabel = ({ focused, iconSource, screenName }: TabBarIconProps) => {
  const navigation = useNavigation<any>();
  const playSound = useSound(soundAssets.click);

  const handlePress = () => {
    if (playSound) {
      playSound();
    }
    navigation.navigate(screenName);
  };

  return (
    <Pressable
      onPress={handlePress}
      hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}>
      <View
        style={[
          styles.iconContainer,
          {
            backgroundColor: focused ? colors.WHITE.white : 'transparent',
            width: rwp(40),
            height: rhp(40),
            borderRadius: 12,
          },
        ]}>
        <Image
          source={iconSource}
          resizeMode="contain"
          style={[
            styles.icon,
            {
              tintColor: focused
                ? colors.PURPLE.backgroundClr
                : colors.WHITE.white,
            },
          ]}
        />
      </View>
    </Pressable>
  );
};

export const Bottom = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: rhp(65),
          backgroundColor: 'orange',
          paddingTop: rhp(2),
          borderTopLeftRadius: 30,
          borderColor: 'transparent',
          borderTopRightRadius: 30,
          borderLeftWidth: 0.2,
          borderRightWidth: 0.2,
          position: 'absolute',
          overflow: 'hidden',
        },
        tabBarLabel: () => null,
      }}>
      <Tab.Screen
        name={ScreenNames.homeNavigator}
        component={HomeNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
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
          tabBarIcon: ({ focused }) => (
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
          tabBarIcon: ({ focused }) => (
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
          tabBarIcon: ({ focused }) => (
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
          tabBarIcon: ({ focused }) => (
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
});

export default Bottom;
