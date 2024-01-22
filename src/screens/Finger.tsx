import { View, Text, FlatList, SafeAreaView, Modal, Dimensions, KeyboardAvoidingView, TouchableOpacity, Image, ScrollView, ImageBackground, StatusBar, TextInput } from 'react-native'
import React, { useState, useContext, } from 'react'
import { useNavigation } from '@react-navigation/native'
import style from '../theme/style'
import { Colors } from '../theme/color'
import { Avatar } from 'react-native-paper'
import { AppBar, HStack } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

import A7 from '../../assets/image/a7.svg'
import A8 from '../../assets/image/a8.svg'

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

const Finger = () => {

    const navigation = useNavigation();

    return (

        <SafeAreaView style={[style.area, { backgroundColor: Colors.bg }]}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : null}>
                <StatusBar backgroundColor={Colors.box} translucent={true}></StatusBar>
                <View style={[style.main, { backgroundColor: Colors.bg, marginTop:Platform.OS === 'ios' ? 10 : 40 }]}>
                    <AppBar
                        centerTitle={true}
                        title='Finger authorization'
                        titleStyle={[style.b16, { color: Colors.secondary }]}
                        style={{ backgroundColor: 'transparent', }}
                        elevation={0}
                        leading={<TouchableOpacity onPress={() => navigation.goBack()} style={[style.icon, { backgroundColor: Colors.box }]}>
                            <Icon name='chevron-back' size={24} color={Colors.secondary}></Icon>
                        </TouchableOpacity>}
                    />

                    <ScrollView showsVerticalScrollIndicator={false} style={{marginTop:20}}>

                        <View style={{ backgroundColor: Colors.box, borderRadius: 30, padding: 50,marginBottom:20 }}>
                            <Text style={[style.b16, { color: Colors.txt, textAlign: 'center' }]}>Authorization</Text>
                            <Text style={[style.r12, { color: Colors.txt, textAlign: 'center' }]}>Please use finger print to login</Text>

                            <View style={{ marginTop: 100, alignSelf: 'center' }}>
                                <View
                                    style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, alignItems: 'center', justifyContent: 'center' }}>
                                    <A7 />
                                </View>
                                <A8></A8>
                            </View>

                            <Text style={[style.r20, { color: Colors.txt, marginTop: 80, textAlign: 'center' }]}>100%</Text>
                            <Text style={[style.r12, { color: Colors.txt, textAlign: 'center', marginTop: 5 }]}>Scan Success</Text>

                            <View style={{ marginTop: 70, marginBottom: 20 }}>
                                <TouchableOpacity onPress={() => navigation.navigate('MyTabs')}
                                    style={[style.btn, {}]}>
                                    <Text style={[style.btntxt]}>Continue</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default Finger;