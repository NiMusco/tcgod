import { View, Text, FlatList, SafeAreaView, Modal, Dimensions, KeyboardAvoidingView, TouchableOpacity, Image, ScrollView, ImageBackground, StatusBar, TextInput } from 'react-native'
import React, { useState, useContext, } from 'react'
import { useNavigation } from '@react-navigation/native'
import style from '../theme/style'
import { Colors } from '../theme/color'
import { Avatar } from 'react-native-paper'
import { AppBar, HStack } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

import A32 from '../../assets/image/a32.svg'
import A33 from '../../assets/image/a33.svg'

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function OffD() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.bg }]}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : null}>
                <StatusBar backgroundColor={Colors.box} translucent={true}></StatusBar>
                <View style={[style.main, { backgroundColor: Colors.bg, marginTop: Platform.OS === 'ios' ? 10 : 30 }]}>

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

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 20 }}>
                            <A32 />
                            <View style={{ flex: 1, marginLeft: 15, }}>
                                <Text style={[style.b16, { color: Colors.txt }]}>Starbucks</Text>
                                <Text style={[style.r14, { color: Colors.txt }]}>90% Off on 1st Coffee</Text>
                            </View>
                        </View>

                        <View style={[style.divider, { backgroundColor: Colors.divider, marginHorizontal: 20, height: 1.5, marginVertical: 15 }]}></View>

                        <Text style={[style.r14, { color: Colors.txt, marginHorizontal: 20 }]}>Coupon Code</Text>

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 5, marginHorizontal: 20 }}>
                            <Text style={[style.r16, { color: Colors.txt, }]}>HGYT8GH574GKFDJJK753FG</Text>
                            <A33 />
                        </View>

                        <View style={{marginTop:30}}>
                            <TouchableOpacity
                                style={[style.btn, {backgroundColor:'#F0C42A',height:42 ,borderRadius:5}]}>
                                <Text style={[style.s14,{marginTop:4,color:Colors.txt}]}>Redeem Before: May 25, 2022</Text>
                            </TouchableOpacity>
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
                            <Text style={[style.r12, { color: Colors.txt, marginTop: 5,marginBottom:30 }]}>
                                Voluptas distinctio voluptate consequatur fugiat ex illum. Iste beatae illum quisquam. Vitae dolor blanditiis corrupti dolo quatur ut ullam. Veniam max voluptas cupiditate corporis rerum.
                            </Text>


                        </View>

                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}