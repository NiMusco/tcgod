import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Home from '../screens/Home';
import Ionicons from "react-native-vector-icons/Ionicons"
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Colors } from '../theme/color';
import Icon from 'react-native-vector-icons/FontAwesome5'
import style from '../theme/style';
import MyDrawer from './Drawer';
import Wallet from '../screens/Wallet';
import Offer from '../screens/Offer';
import History from '../screens/History';
import Otp from '../screens/Otp';

const Tab = createBottomTabNavigator();

export default function MyTabs() {

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { height: 60, backgroundColor: '#262254', paddingBottom: 12, borderTopColor: '#262254' },
        tabBarShowLabel: false,

      }}>

      <Tab.Screen name="MyDrawer" component={MyDrawer}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color }) => {
            return <Image source={focused ? require('../../assets/image/tb1.png') : require('../../assets/image/t1.png')} resizeMode='stretch'
              style={{ height: 24, width: 24, marginTop: 10 }} />
          },
          headerShown: false,
        }}
      />

      <Tab.Screen name="Search" component={Wallet}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color }) => {
            return <Image source={focused ? require('../../assets/image/tb2.png') : require('../../assets/image/t2.png')} resizeMode='stretch'
              style={{ height: 24, width: 24, marginTop: 10 }} />
          },
          headerShown: false,
        }} />

      <Tab.Screen name="Save" component={Offer}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color }) => {
            return <Image source={focused ? require('../../assets/image/tb3.png') : require('../../assets/image/t3.png')} resizeMode='stretch'
              style={{ height: 24, width: 24, marginTop: 10 }} />
          },
          headerShown: false,
        }} />

      <Tab.Screen name="Download" component={History}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color }) => {
            return <Image source={focused ? require('../../assets/image/tb4.png') : require('../../assets/image/t4.png')} resizeMode='stretch'
              style={{ height: 24, width: 24, marginTop: 10 }} />
          },
          headerShown: false,
        }} />

      <Tab.Screen name="Profile" component={Otp}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color }) => {
            return <Image source={require('../../assets/image/t5.png')} resizeMode='stretch'
              style={{ height: 75, width: 75, marginTop: -45, marginRight: 10 }} />
          },
          headerShown: false,
        }} />


    </Tab.Navigator>
  );
}


