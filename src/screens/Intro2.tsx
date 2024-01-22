import { View, Text, FlatList, SafeAreaView, Dimensions, StatusBar, ImageBackground, TouchableOpacity, Image } from 'react-native'
import React, { useState, useContext, } from 'react'
import { useNavigation } from '@react-navigation/native'
import style from '../theme/style'
import { Colors } from '../theme/color'
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Avatar } from 'react-native-paper'

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Intro2() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.bg }]}>
            <StatusBar backgroundColor={Colors.box} translucent={true} />
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                <ImageBackground source={require('../../assets/image/2.png')} resizeMode='stretch' style={{ height: height / 2, width: width / 3.5 }} />
                <ImageBackground source={require('../../assets/image/4.png')} resizeMode='stretch' style={{ height: height / 2, width: width / 1.4, marginHorizontal: -50 }} />
                <ImageBackground source={require('../../assets/image/3.png')} resizeMode='stretch' style={{ height: height / 2, width: width / 3.5 }} />
            </View>
            <View style={{ flex: 0.5, paddingHorizontal: 20 }}>
                <Text style={[style.subtitle, { color: Colors.secondary, textAlign: 'center', marginTop: 20 }]}>Safe Transaction</Text>
                <Text style={[style.r16, { color: '#F9F9F9', textAlign: 'center', marginTop: 8 }]}>Forgot to bring your wallet when you are shopping?</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', margin: 20 }}>
                <TouchableOpacity onPress={() => navigation.navigate('Intro1')}
                    style={{ height: 38, width: 38, borderRadius: 19, backgroundColor: '#1B183E', justifyContent: 'center', alignItems: 'center' }}>
                    <Icon name='chevron-back' size={24} color='#F9F9F9' />
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={[style.indicator, { }]}></View>
                    <View style={[style.indicator, { backgroundColor: '#26C165'}]}></View>
                    <View style={[style.indicator, {}]}></View>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('Intro3')}
                    style={{ height: 38, width: 38, borderRadius: 19, backgroundColor: '#1B183E', justifyContent: 'center', alignItems: 'center' }}>
                    <Icon name='chevron-forward' size={24} color='#F9F9F9' />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}