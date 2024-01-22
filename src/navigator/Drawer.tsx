import React,{useContext,useState} from 'react';
import {StyleSheet,Text,View,Dimensions} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContentScrollView,DrawerItem} from '@react-navigation/drawer';
import { Colors } from '../theme/color';
import Ionicons from "react-native-vector-icons/Ionicons";
import Icon1 from 'react-native-vector-icons/Octicons';
import { DrawerContent } from '../screens/DrawerContent';
import Home from '../screens/Home';

const width =Dimensions.get('screen').width
const height = Dimensions.get('screen').height

const Drawer = createDrawerNavigator();

export default function MyDrawer() {

  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}
    screenOptions={{
      drawerPosition:'left',
      drawerStyle:{width:width/1.15,backgroundColor:Colors.bg,borderTopRightRadius:25}
    }}>
      <Drawer.Screen name="Home" component={Home} 
      options={{
      // drawerLabel:({focused, color,}) => (
      //   <Text style={{color: focused ? Colors.primary : Colors.disable,fontFamily:'Urbanist-Regular'}}>Inbox</Text>
      // ),
      // drawerIcon:({focused,color}) => {
      //   return <Icon1 name="inbox" size={25} 
      //   color={focused ? Colors.primary : Colors.disable} />
      // },
      headerShown:false,
      }}
      />
      {/* <Drawer.Screen name="Starred" component={NewPass} 
      options={{
        drawerLabel:({focused, color,}) => (
          <Text style={{color: focused ? Colors.primary : Colors.disable,fontFamily:'Urbanist-Regular'}}>Starred</Text>
        ),
        drawerIcon:({focused,color}) => {
          return <Ionicons name="star-outline" size={25} 
          color={focused ? Colors.primary : Colors.disable} />
        },
        // headerShown:false,
        }}/>
      <Drawer.Screen name="Sent" component={NewPass} 
      options={{
        drawerLabel:({focused, color,}) => (
          <Text style={{color: focused ? Colors.primary : Colors.disable,fontFamily:'Urbanist-Regular'}}>Sent</Text>
        ),
        drawerIcon:({focused,color}) => {
          return <Ionicons name="paper-plane-outline" size={25} 
          color={focused ? Colors.primary : Colors.disable} />
        },
        // headerShown:false,
        }}/>
      <Drawer.Screen name="Draft" component={WriteMessage} 
      options={{
        drawerLabel:({focused, color,}) => (
          <Text style={{color: focused ? Colors.primary : Colors.disable,fontFamily:'Urbanist-Regular'}}>Draft</Text>
        ),
        drawerIcon:({focused,color}) => {
          return <Icon1 name="file" size={25} 
          color={focused ? Colors.primary : Colors.disable} />
        },
        // headerShown:false,
        }}/>

      <Drawer.Screen name="Trash" component={NewPass} 
      options={{
        drawerLabel:({focused, color,}) => (
          <Text style={{color: focused ? Colors.primary : Colors.disable,fontFamily:'Urbanist-Regular'}}>Trash</Text>
        ),
        drawerIcon:({focused,color}) => {
          return <Ionicons name="trash" size={25} 
          color={focused ? Colors.primary : Colors.disable} />
        },
        // headerShown:false,
        }}/> */}

        

    </Drawer.Navigator>
  );
}