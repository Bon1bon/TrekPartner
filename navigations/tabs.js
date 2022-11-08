
import SettingsScreen from '../screens/SearchScreen';
import SearchScreen from '../screens/SearchScreen';
import PostScreen from '../screens/PostScreen';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }) => (
    <TouchableOpacity
        style={[styles.customTabBarButton, styles.shadow]}
        onPress={onPress}>
        <View style={styles.customTabBarView}>
            {children}
        </View>
    </TouchableOpacity>
);

export default function Tabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: [styles.navigator, styles.shadow]
            }}
        >
            <Tab.Screen name="Home" component={SearchScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.icon}>
                            <Image
                                source={require('../assets/icons/home.png')}
                                resizeMode='contain'
                                style={{
                                    tintColor: focused ? '#e32f45' : '#748c94',
                                    ...styles.image
                                }} />
                            <Text
                                style={{
                                    color: focused ? '#e32f45' : '#748c94',
                                    fontSize: 12
                                }}
                            >Home</Text>
                        </View>
                    )
                }} />
            <Tab.Screen name="Search" component={SearchScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.icon}>
                            <Image
                                source={require('../assets/icons/search.png')}
                                resizeMode='contain'
                                style={{
                                    tintColor: focused ? '#e32f45' : '#748c94',
                                    ...styles.image
                                }} />
                            <Text
                                style={{
                                    color: focused ? '#e32f45' : '#748c94',
                                    fontSize: 12
                                }}
                            >Search</Text>
                        </View>
                    )
                }} />

            <Tab.Screen name="Post" component={PostScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={require('../assets/icons/plus.png')}
                            resizeMode='contain'
                            style={{
                                tintColor: focused ? '#748c94' : 'white',
                                ...styles.image
                            }} />
                    ),
                    tabBarButton: (props) => (
                        <CustomTabBarButton {...props} />
                    )
                }} />

            <Tab.Screen name="Settings" component={SettingsScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.icon}>
                            <Image
                                source={require('../assets/icons/settings.png')}
                                resizeMode='contain'
                                style={{
                                    tintColor: focused ? '#e32f45' : '#748c94',
                                    ...styles.image
                                }} />
                            <Text
                                style={{
                                    color: focused ? '#e32f45' : '#748c94',
                                    fontSize: 12
                                }}
                            >Settings</Text>
                        </View>
                    )
                }} />
            <Tab.Screen name="Login" component={SearchScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.icon}>
                            <Image
                                source={require('../assets/icons/login.png')}
                                resizeMode='contain'
                                style={{
                                    tintColor: focused ? '#e32f45' : '#748c94',
                                    ...styles.image
                                }} />
                            <Text
                                style={{
                                    color: focused ? '#e32f45' : '#748c94',
                                    fontSize: 12
                                }}
                            >Login</Text>
                        </View>
                    )
                }} />
        </Tab.Navigator>
    );
}


const styles = StyleSheet.create({
    navigator: {
        position: 'absolute',
        bottom: 25,
        left: 20,
        right: 20,
        elevation: 0,
        backgroundColor: '#ffffff',
        borderRadius: 15,
        height: 90
    },
    shadow: {
        shadowColor: '#7F5DF8',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    },
    customTabBarButton: {
        top: -30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    customTabBarView: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#e32f45'
    },
    image: {
        width: 25,
        height: 25,
    },
    icon: { 
        alignItems: 'center', 
        justifyContent: 'center', 
        top: 10 
    }

});