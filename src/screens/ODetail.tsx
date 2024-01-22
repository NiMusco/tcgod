import { View, Text, FlatList, SafeAreaView, Modal, Dimensions, KeyboardAvoidingView, TouchableOpacity, Image, ScrollView, ImageBackground, StatusBar, TextInput } from 'react-native'
import React, { useState, useContext, } from 'react'
import { useNavigation } from '@react-navigation/native'
import style from '../theme/style'
import { Colors } from '../theme/color'
import { Avatar } from 'react-native-paper'
import { AppBar, HStack } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

import A30 from '../../assets/image/a30.svg'
import A31 from '../../assets/image/a31.svg'

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function ODetail() {

    const navigation = useNavigation();

    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.bg }]}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : null}>
                <StatusBar backgroundColor={Colors.box} translucent={true}></StatusBar>
                <View style={[style.main, { backgroundColor: Colors.bg, marginTop:Platform.OS === 'ios' ? 10 : 30 }]}>

                    <AppBar
                        centerTitle={true}
                        title='Offer Details'
                        titleStyle={[style.b16, { color: Colors.secondary }]}
                        style={{ backgroundColor: 'transparent', }}
                        elevation={0}
                        leading={<TouchableOpacity onPress={() => navigation.navigate('MyTabs')} style={[style.icon, { backgroundColor: Colors.box }]}>
                            <Icon name='chevron-back' size={24} color={Colors.secondary}></Icon>
                        </TouchableOpacity>}
                    />

                    <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 10 }}>

                        <View style={{ marginTop: 20, }}>
                            <View
                                style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, height: 162, }}>
                                <A30 style={{ alignSelf: 'center' }} />

                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center', marginHorizontal: 40, marginTop: 20 }}>
                                <A31></A31>
                                <View style={{ flex: 1, marginLeft: 10 }}>
                                    <Text style={[style.b16, { color: '#FFFFFF' }]}>Spotify Premium</Text>
                                    <Text style={[style.r14, { color: '#FFFFFF' }]}>99% Off on Subscription</Text>
                                </View>
                            </View>
                            <Text style={[style.r14, { color: '#FFFFFF', textAlign: 'center', marginTop: 42, marginBottom: 10 }]}>Expires: May 10, 2022</Text>
                        </View>

                        <View style={{ backgroundColor: Colors.box, borderRadius: 20, marginVertical: 20, paddingTop: 25, paddingHorizontal: 20 }}>
                            <Text style={[style.b16, { color: Colors.txt }]}>Terms & Conditions:</Text>
                            <Text style={[style.r12, { color: Colors.txt, marginTop: 4 }]}>
                                Ut similique quis aut ut culpa atque sapiente non. Non assumenda vero sit. Est aspernatur necessitatibus delectus ipsam aperiam
                            </Text>
                            <Text style={[style.r12, { color: Colors.txt, marginTop: 15 }]}>
                                aspernatur est voluptatem suscipit. Quam eius autem reprehenderit ut omnis est dolor rerum nisi. Omnis deserunt nulla consequatur aut.
                            </Text>
                            <Text style={[style.r12, { color: Colors.txt, marginTop: 15 }]}>
                                01:  Ratione excepturi tempora officia.{'\n'}
                                02: consequatur velit in quia rerum vitae.{'\n'}
                                03: Est ut quis voluptates.{'\n'}
                                04: Placeat quia quia illo soluta.{'\n'}
                            </Text>
                            <Text style={[style.r12, { color: Colors.txt, marginTop: 5 }]}>
                                Voluptas distinctio voluptate consequatur fugiat ex illum. Iste beatae illum quisquam. Vitae dolor blanditiis corrupti dolo quatur ut ullam. Veniam max voluptas cupiditate corporis rerum.
                            </Text>

                            <View style={{ flexDirection: 'row', alignItems: 'center' ,marginBottom:40,marginTop:20}}>
                                <TouchableOpacity 
                                    style={[style.btn, {flex:0.6,backgroundColor:Colors.green}]}>
                                    <Text style={[style.btntxt]}>Visit Website</Text>
                                </TouchableOpacity>
                                <TouchableOpacity 
                                    style={[style.btn, {flex:0.4,marginLeft:8,backgroundColor:Colors.box,borderColor:Colors.green,borderWidth:1}]}>
                                    <Text style={[style.btntxt,{color:Colors.green}]}>Redeem</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>

    )
}