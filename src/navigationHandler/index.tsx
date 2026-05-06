import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { ScreenNames } from '../constants/strings';
import AlphabetsExercise from '../screens/bottom/exerciseScreens/alphabetExercise';
import AlphabetsExerciseMain from '../screens/bottom/exerciseScreens/alphabetExerciseMain';
import AnimalsExercise from '../screens/bottom/exerciseScreens/animalsExercise';
import KidsGameExercise from '../screens/bottom/exerciseScreens/kidsGameExercise';
import NumbersExercise from '../screens/bottom/exerciseScreens/numbersExercise';
import ShapesExercise from '../screens/bottom/exerciseScreens/shapesExercise';
import PremiumScreen from '../screens/bottom/premium';
import UserGuide from '../screens/bottom/userGuide';
import UnderProgressScreen from '../screens/underProgressScreen';
import { Auth } from './authStack';
import { Bottom } from './bottomStack';
import { navigationRef } from './navigationRef';
import BannerAdView from '../components/atoms/Ads/BannerAdView';

const NavigationStack = createNativeStackNavigator();

export const NavigationHandler = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
    const [refreshKey, setRefreshKey] = useState(0);
    const [isTabScreen, setIsTabScreen] = useState(false);

    useEffect(() => {
        const unsubscribe = auth().onAuthStateChanged(currentUser => {
            setUser(currentUser);
            setIsLoading(false);
        });

        return unsubscribe;
    }, []);

    const handleStateChange = () => {
        setRefreshKey(prev => prev + 1);
        // Safely check if the current root route is the BottomStack (which has the tab bar)
        const state = navigationRef.current?.getRootState();
        if (state) {
            const currentRoute = state.routes[state.index]?.name;
            setIsTabScreen(currentRoute === ScreenNames.BottomStack);
        }
    };

    if (isLoading) {
        return null;
    }

    return (
        <NavigationContainer 
            ref={navigationRef}
            onStateChange={handleStateChange}
        >
            <View style={{ flex: 1 }}>
                <BannerAdView key={refreshKey} isTabScreen={isTabScreen} />

                <NavigationStack.Navigator
                    initialRouteName={
                        user ? ScreenNames.BottomStack : ScreenNames.AuthStack
                    }>
                    <NavigationStack.Screen
                        name={ScreenNames.AuthStack}
                        component={Auth}
                        options={{ headerShown: false }}
                    />
                    <NavigationStack.Screen
                        name={ScreenNames.BottomStack}
                        component={Bottom}
                        options={{ headerShown: false }}
                    />
                    <NavigationStack.Screen
                        name={ScreenNames.alphabetExerciseScreen}
                        component={AlphabetsExercise}
                        options={{ headerShown: false }}
                    />
                    <NavigationStack.Screen
                        name={ScreenNames.shapesExerciseScreen}
                        component={ShapesExercise}
                        options={{ headerShown: false }}
                    />
                    <NavigationStack.Screen
                        name={ScreenNames.numbersExerciseScreen}
                        component={NumbersExercise}
                        options={{ headerShown: false }}
                    />
                    <NavigationStack.Screen
                        name={ScreenNames.animalsExerciseScreen}
                        component={AnimalsExercise}
                        options={{ headerShown: false }}
                    />
                    <NavigationStack.Screen
                        name={ScreenNames.alphabetExerciseMainScreen}
                        component={AlphabetsExerciseMain}
                        options={{ headerShown: false }}
                    />
                    <NavigationStack.Screen
                        name={ScreenNames.kidsGameExerciseScreen}
                        component={KidsGameExercise}
                        options={{ headerShown: false }}
                    />
                    <NavigationStack.Screen
                        name={ScreenNames.premiumScreen}
                        component={PremiumScreen}
                        options={{ headerShown: false }}
                    />
                    <NavigationStack.Screen
                        name={ScreenNames.userGuide}
                        component={UserGuide}
                        options={{ headerShown: false }}
                    />
                    <NavigationStack.Screen
                        name={ScreenNames.UnderProgressScreen}
                        component={UnderProgressScreen}
                        options={{ headerShown: false }}
                    />
                </NavigationStack.Navigator>
            </View>
        </NavigationContainer>
    );
};
