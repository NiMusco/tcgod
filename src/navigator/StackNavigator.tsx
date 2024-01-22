import { View, Text, StatusBar } from 'react-native'
import React, { useState, useEffect } from 'react';
// import { createStackNavigator } from '@react-navigation/stack';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Colors } from '../theme/color';

import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Finger from '../screens/Finger';
import NewPass from '../screens/NewPass';
import RMoney from '../screens/RMoney';
import SPay from '../screens/SPay';
import MyDrawer from './Drawer';
import { DrawerContent } from '../screens/DrawerContent';
import Language from '../screens/Language';
import ODetail from '../screens/ODetail';
import OffD from '../screens/OffD';
import Intro1 from '../screens/Intro1';
import Intro2 from '../screens/Intro2';
import Intro3 from '../screens/Intro3';
import Otp from '../screens/Otp';
import Forgot from '../screens/Forgot';
import Home from '../screens/Home';
import Wallet from '../screens/Wallet';
import History from '../screens/History';
import Notification from '../screens/Notification';
import Offer from '../screens/Offer';
import MyTabs from '../navigator/BottomNavigator'


const Stack = createNativeStackNavigator();

export default function StackNavigator() {

  const [showSplashScreen, setshowSplashScreen] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setshowSplashScreen(false);
    }, 4000);


  }, [])


  return (

    <NavigationContainer>

      <Stack.Navigator>


        <Stack.Screen
          name="Intro1"
          component={Home}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="Intro2"
          component={Intro2}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="Intro3"
          component={Intro3}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="MyTabs"
          component={MyTabs}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="OffD"
          component={OffD}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="Offer"
          component={Offer}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="Notification"
          component={Notification}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="History"
          component={History}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="Wallet"
          component={Wallet}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="Forgot"
          component={Forgot}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="Otp"
          component={Otp}
          options={{ headerShown: false }} />



        <Stack.Screen
          name="ODetail"
          component={ODetail}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="Language"
          component={Language}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="MyDrawer"
          component={MyDrawer}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="DrawerContent"
          component={DrawerContent}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="SPay"
          component={SPay}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="RMoney"
          component={RMoney}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="NewPass"
          component={NewPass}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="Finger"
          component={Finger}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }} />

      </Stack.Navigator>
    </NavigationContainer>

  )
}