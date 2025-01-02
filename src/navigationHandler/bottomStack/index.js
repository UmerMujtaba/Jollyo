// bottomStack.js
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Image, Text, StyleSheet} from 'react-native';
import HomeScreen from '../../screens/bottom/home';
import GamesScreen from '../../screens/bottom/games';
import ListsScreen from '../../screens/bottom/list';
import {isTablet, rfs, rhp, rwp} from '../../constants/dimensions';
import {images} from '../../assets/images';
import fonts from '../../constants/fonts';
import {colors} from '../../constants/colors';
import {ScreenNames} from '../../constants/strings';
import HomeNavigator from '../homeStack';
import GameNavigator from '../gameStack';
import SettingsScreen from '../../screens/bottom/setting';
import RewardsScreen from '../../screens/bottom/reward';

const Tab = createBottomTabNavigator();
const Bottom = () => {
  const TabBarIconWithLabel = ({focused, iconSource, label}) => {
    return (
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
        name={ScreenNames.gameNavigator}
        component={GameNavigator}
        options={{
          headerShown: false,
          animationEnabled: true,
          tabBarIcon: ({focused}) => (
            <TabBarIconWithLabel
              focused={focused}
              iconSource={images.icons.gameIcon}
            />
          ),
        }}
      />
      <Tab.Screen
        name={ScreenNames.homeNavigator}
        component={HomeNavigator}
        options={{
          headerShown: false,
          animationEnabled: true,
          tabBarIcon: ({focused}) => (
            <TabBarIconWithLabel
              focused={focused}
              iconSource={images.icons.speakIcon}
            />
          ),
        }}
      />
      <Tab.Screen
        name={ScreenNames.listScreen}
        component={ListsScreen}
        options={{
          headerShown: false,
          animationEnabled: true,
          tabBarIcon: ({focused}) => (
            <TabBarIconWithLabel
              focused={focused}
              iconSource={images.icons.drawIcon}
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
