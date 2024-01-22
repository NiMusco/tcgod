import React, { useContext, useState } from "react";
import { View, Text, Switch, SafeAreaView, TextInput, Modal, ImageBackground, StatusBar, Image, Dimensions, TouchableOpacity, ScrollView, StyleSheet } from 'react-native'
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    List,
    TouchableRipple,
} from "react-native-paper";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import Icons from "react-native-vector-icons/MaterialCommunityIcons";
import Icon from "react-native-vector-icons/Ionicons";
import Icon1 from "react-native-vector-icons/Octicons";
import style from "../theme/style";
import { Colors } from "../theme/color";
import Icon2 from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native';
import { EventRegister } from 'react-native-event-listeners'

import A23 from '../../assets/image/a23.svg';
import A24 from '../../assets/image/a24.svg';
import A25 from '../../assets/image/a25.svg';
import A26 from '../../assets/image/a26.svg';
import A27 from '../../assets/image/a27.svg';
import A28 from '../../assets/image/a28.svg';
import A29 from '../../assets/image/a29.svg';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export function DrawerContent(props) {


    const [visible, setVisible] = useState(false)
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, backgroundColor: Colors.box }}>
            <StatusBar backgroundColor={Colors.box} translucent={true}></StatusBar>
            <View style={{ backgroundColor: Colors.primary, paddingVertical: 30, marginTop: 35, borderTopRightRadius: 20 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 20, marginRight: 10 }}>
                    <A23></A23>
                    <View style={{ flex: 1, marginLeft: 15 }}>
                        <Text style={[style.subtitle, { color: Colors.txt }]}>Hakuna matata</Text>
                        <Text style={[style.r14, { color: Colors.txt }]}>14589632552@payou</Text>
                    </View>
                </View>
                <Text style={[style.m11, { color: Colors.txt, marginHorizontal: 20, marginTop: 10 }]}>Edit profile</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 40 }}>

                <TouchableOpacity onPress={()=>navigation.navigate('SPay')} style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 20 }}>
                    <A24></A24>
                    <Text style={[style.s14, { color: Colors.txt, marginLeft: 15, flex: 1 }]}>My QR Code</Text>
                    <Icon name="chevron-forward" size={20} color={Colors.input}></Icon>
                </TouchableOpacity>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 20, marginTop: 30 }}>
                    <A25 />
                    <Text style={[style.s14, { color: Colors.txt, marginLeft: 15, flex: 1 }]}>My Link Card</Text>
                    <Icon name="chevron-forward" size={20} color={Colors.input}></Icon>
                </View>

                <TouchableOpacity onPress={()=>navigation.navigate('Language')}
                style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 20, marginTop: 30 }}>
                    <A26 />
                    <Text style={[style.s14, { color: Colors.txt, marginLeft: 15, flex: 1 }]}>Language</Text>
                    <Icon name="chevron-forward" size={20} color={Colors.input}></Icon>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>navigation.navigate('Finger')}
                style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 20, marginTop: 30 }}>
                    <A27 />
                    <Text style={[style.s14, { color: Colors.txt, marginLeft: 15, flex: 1 }]}>Biometric</Text>
                    <Icon name="chevron-forward" size={20} color={Colors.input}></Icon>
                </TouchableOpacity>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 20, marginTop: 30 }}>
                    <A28 />
                    <Text style={[style.s14, { color: Colors.txt, marginLeft: 15, flex: 1 }]}>All Setting</Text>
                    <Icon name="chevron-forward" size={20} color={Colors.input}></Icon>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 20, marginTop: 30 }}>
                    <A29 />
                    <Text style={[style.s14, { color: Colors.txt, marginLeft: 15, flex: 1 }]}>Block Contact</Text>
                    <Icon name="chevron-forward" size={20} color={Colors.input}></Icon>
                </View>

                <View style={[style.divider, { backgroundColor: Colors.disable, marginVertical: 40, marginHorizontal: 20, height: 1.5 }]}></View>

                <Text style={[style.r14, { color: Colors.txt, marginHorizontal: 20 }]}>Private policy</Text>
                <Text style={[style.r14, { color: Colors.txt, marginTop: 20, marginHorizontal: 20 }]}>Get Help</Text>
                <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
                    <Text style={[style.r14, { color: Colors.txt, marginTop: 20, marginHorizontal: 20,marginBottom:20 }]}>Log out</Text>
                </TouchableOpacity>

            </ScrollView>
        </View>
    );
}


