import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import colors from '../constants/Colors';
import { Image, Dimensions } from 'react-native';
import { createAppContainer } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import CalendarScreen from '../screens/CalendarScreen';
import LunchScreen from '../screens/LunchScreen';
import StaffScreen from '../screens/StaffScreen';
import Colors from '../constants/Colors';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';


const tabScreenConfig = {
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: ({ tintColor }) => {
                return <TouchableOpacity>
                    <Image source={require('../images/home.png')} style={{
                        width: Dimensions.get('window').height >= 600 ? 70 : 50,
                        height: Dimensions.get('window').height >= 600 ? 70 : 50,
                        resizeMode: 'contain'
                    }}>
                    </Image>
                </TouchableOpacity>
            }
        }
    },

    Events: {
        screen: CalendarScreen,
        navigationOptions: {
            tabBarLabel: 'Events',
            tabBarIcon: ({ tintColor }) => {
                return <TouchableOpacity>
                    <Image source={require('../images/calendar.png')} style={{
                        width: Dimensions.get('window').height >= 600 ? 70 : 50,
                        height: Dimensions.get('window').height >= 600 ? 70 : 50,
                        resizeMode: 'contain'
                    }}>
                    </Image>
                </TouchableOpacity>
            }
        }
    },

    Lunch: {
        screen: LunchScreen,
        navigationOptions: {
            tabBarLabel: 'Lunch',
            tabBarIcon: () => {
                return <TouchableOpacity>
                    <Image source={require('../images/lunch.png')} style={{
                        width: Dimensions.get('window').height >= 600 ? 70 : 50,
                        height: Dimensions.get('window').height >= 600 ? 70 : 50,
                        resizeMode: 'contain'
                    }}>
                    </Image>
                </TouchableOpacity>
            }
        }
    },

    Staff: {
        screen: StaffScreen,
        navigationOptions: {
            tabBarLabel: 'Staff',
            tabBarIcon: () => {
                return <TouchableOpacity>
                    <Image source={require('../images/staff.png')} style={{
                        width: Dimensions.get('window').height >= 600 ? 70 : 50,
                        height: Dimensions.get('window').height >= 600 ? 70 : 50,
                        resizeMode: 'contain'
                    }}>
                    </Image>
                </TouchableOpacity>
            }
        }
    }

};

const AppTabNavigator = createBottomTabNavigator(tabScreenConfig, {
    tabBarOptions: {
        labelStyle: {
            fontSize: Dimensions.get('window') >=600 ? 18 : 16,
            color: Colors.darkerAccent,
            fontFamily: 'open-sans-bold'

        },
        style: {
            height: Dimensions.get('window').height >= 600 ? 100 : 80,
            backgroundColor: Colors.accent,
            borderTopEndRadius: 15,
            borderTopStartRadius: 15

        },
    },
    
});

export default createAppContainer(AppTabNavigator);