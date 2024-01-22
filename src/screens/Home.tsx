import { View, Text, FlatList, SafeAreaView, Dimensions, StatusBar, KeyboardAvoidingView, ImageBackground, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native'
import React, { useState, useContext, useRef } from 'react'
import { useNavigation } from '@react-navigation/native'
import style from '../theme/style'
import { Colors } from '../theme/color'
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Avatar } from 'react-native-paper'
import { AppBar, HStack } from '@react-native-material/core';
import S2 from '../../assets/image/s2.svg'
import S3 from '../../assets/image/s3.svg'
import S4 from '../../assets/image/s4.svg'
import S5 from '../../assets/image/s5.svg'
import S6 from '../../assets/image/s6.svg'
import S7 from '../../assets/image/s7.svg'
import S8 from '../../assets/image/s8.svg'
import S9 from '../../assets/image/s9.svg'
import S10 from '../../assets/image/s10.svg'
import S11 from '../../assets/image/s11.svg'
import S12 from '../../assets/image/s12.svg'
import S13 from '../../assets/image/s13.svg'
import S14 from '../../assets/image/s14.svg'
import S15 from '../../assets/image/s15.svg'
import S16 from '../../assets/image/s16.svg'
import S17 from '../../assets/image/s17.svg'
import S18 from '../../assets/image/s18.svg'
import S19 from '../../assets/image/s19.svg'
import S20 from '../../assets/image/s20.svg'
import S21 from '../../assets/image/s21.svg'
import S22 from '../../assets/image/s22.svg'
import S23 from '../../assets/image/s23.svg'

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Home() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.bg }]}>
            <StatusBar backgroundColor={Colors.box} translucent={true} />
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : null}>
                <View style={[style.main, { backgroundColor: Colors.bg, marginTop: Platform.OS === 'ios' ? 10 : 30 }]}>
                    <AppBar
                        style={{paddingTop: 20}}
                        color={Colors.bg}
                        elevation={0}
                        leading={<View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <TouchableOpacity onPress={() => navigation.openDrawer()}>
                                <Icon name='menu-outline' size={24} color={Colors.secondary} />
                            </TouchableOpacity>
                            <Text style={[style.apptitle, { color: Colors.secondary }]}>TC<Text style={{ color: Colors.red }}>GOD</Text></Text>
                        </View>}
                        trailing={<HStack>
                            <TouchableOpacity onPress={() => navigation.navigate('Notification')}
                                style={{ marginLeft: 8 }}>
                                <S3></S3>
                            </TouchableOpacity>
                        </HStack>}
                    />
                    <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 10 }}>

                    <Text style={[style.subtitle, { color: '#FFFFFF', marginTop: 20 }]}>Mi cuenta</Text>
                        <Text style={[style.r14, { color: '#FFFFFF', marginTop: 0 }]}>Atajos rápidos</Text>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 30, }}>
                            <View style={{ alignItems: 'center', flex: 1 }}>
                                <Icon name='scan' size={24} color={Colors.red} style={{backgroundColor: Colors.box, borderRadius: 20, width: 50, height: 50, textAlign: "center", verticalAlign: "middle", fontWeight: "bold"}}/>
                                <Text style={[style.r12, { color: '#FFFFFF', marginTop: 10 }]}>Nuevo Scan</Text>
                            </View>
                            <View style={{ alignItems: 'center', flex: 1 }}>
                                <Icon name='book-outline' size={24} color={Colors.red} style={{backgroundColor: Colors.box, borderRadius: 20, width: 50, height: 50, textAlign: "center", verticalAlign: "middle", fontWeight: "bold"}}/>
                                <Text style={[style.r12, { color: '#FFFFFF', marginTop: 10 }]}>Mis carpetas</Text>
                            </View>
                            <View style={{ alignItems: 'center', flex: 1 }}>
                                <Icon name='sparkles-outline' size={24} color={Colors.red} style={{backgroundColor: Colors.box, borderRadius: 20, width: 50, height: 50, textAlign: "center", verticalAlign: "middle", fontWeight: "bold"}}/>
                                <Text style={[style.r12, { color: '#FFFFFF', marginTop: 10 }]}>Lista de Deseos</Text>
                            </View>
                            <View style={{ alignItems: 'center', flex: 1 }}>
                                <Icon name='storefront-outline' size={24} color={Colors.red} style={{backgroundColor: Colors.box, borderRadius: 20, width: 50, height: 50, textAlign: "center", verticalAlign: "middle", fontWeight: "bold"}}/>
                                <Text style={[style.r12, { color: '#FFFFFF', marginTop: 10 }]}>Mercado</Text>
                            </View>
                        </View>

                        <Text style={[style.subtitle, { color: '#FFFFFF', marginTop: 30 }]}>Explora</Text>
                        <Text style={[style.r14, { color: '#FFFFFF', marginTop: 0 }]}>Cartas recomendadas para ti</Text>
                        
                        <View style={{ marginTop: 10, }}>
                            <ScrollView horizontal showsHorizontalScrollIndicator={false} nestedScrollEnabled={true}>
                                
                                <View style={{ marginHorizontal: 10 }}>
                                    <Image source={require('../../assets/image/card_1.png')} style={{width: 200, height: 280}} resizeMode="contain"/>
                                </View>
                                <View style={{ marginHorizontal: 10 }}>
                                    <Image source={require('../../assets/image/card_2.png')} style={{width: 200, height: 280}} resizeMode="contain"/>
                                </View>
                                <View style={{ marginHorizontal: 10 }}>
                                    <Image source={require('../../assets/image/card_3.png')} style={{width: 200, height: 280}} resizeMode="contain"/>
                                </View>
                                <View style={{ marginHorizontal: 10 }}>
                                    <Image source={require('../../assets/image/card_4.png')} style={{width: 200, height: 280}} resizeMode="contain"/>
                                </View>
                                <View style={{ marginHorizontal: 10 }}>
                                    <Image source={require('../../assets/image/card_1.png')} style={{width: 200, height: 280}} resizeMode="contain"/>
                                </View>
                                <View style={{ marginHorizontal: 10 }}>
                                    <Image source={require('../../assets/image/card_1.png')} style={{width: 200, height: 280}} resizeMode="contain"/>
                                </View>
                            </ScrollView>
                        </View>

                        <Text style={[style.subtitle, { color: '#FFFFFF', marginTop: 30 }]}>Explora</Text>
                        <Text style={[style.r14, { color: '#FFFFFF', marginTop: 0 }]}>Albumes que podrian gustarte</Text>
                        
                        <View style={{ marginTop: 10, }}>
                            <ScrollView horizontal showsHorizontalScrollIndicator={false} nestedScrollEnabled={true}>
                                
                                <View style={{ marginHorizontal: 10 }}>
                                    <Image source={require('../../assets/image/card_1.png')} style={{width: 200, height: 280}} resizeMode="contain"/>
                                </View>
                                <View style={{ marginHorizontal: 10 }}>
                                    <Image source={require('../../assets/image/card_2.png')} style={{width: 200, height: 280}} resizeMode="contain"/>
                                </View>
                                <View style={{ marginHorizontal: 10 }}>
                                    <Image source={require('../../assets/image/card_3.png')} style={{width: 200, height: 280}} resizeMode="contain"/>
                                </View>
                                <View style={{ marginHorizontal: 10 }}>
                                    <Image source={require('../../assets/image/card_4.png')} style={{width: 200, height: 280}} resizeMode="contain"/>
                                </View>
                                <View style={{ marginHorizontal: 10 }}>
                                    <Image source={require('../../assets/image/card_1.png')} style={{width: 200, height: 280}} resizeMode="contain"/>
                                </View>
                                <View style={{ marginHorizontal: 10 }}>
                                    <Image source={require('../../assets/image/card_1.png')} style={{width: 200, height: 280}} resizeMode="contain"/>
                                </View>
                            </ScrollView>
                        </View>

                        <View style={{ padding: 20, marginTop: 20, backgroundColor: '#1B183E', borderTopLeftRadius: 40, borderTopRightRadius: 40 }}>
                            <Text style={[style.s14, { color: Colors.secondary, textAlign: 'center' }]}>Menu</Text>
                            <View style={{ height: 4, width: 20, backgroundColor: Colors.secondary, borderRadius: 15, alignSelf: 'center' }}></View>

                            <View style={{ marginTop: 30, flexDirection: 'row', alignItems: 'center', }}>
                                <View style={{ alignItems: 'center', flex: 1 }}>
                                    <S16 />
                                    <Text style={[style.r12, { color: '#FFFFFF', marginTop: 10 }]}>Recharge</Text>
                                </View>
                                <View style={{ alignItems: 'center', flex: 1 }}>
                                    <S17 />
                                    <Text style={[style.r12, { color: '#FFFFFF', marginTop: 10 }]}>Travelling</Text>
                                </View>
                                <View style={{ alignItems: 'center', flex: 1 }}>
                                    <S18 />
                                    <Text style={[style.r12, { color: '#FFFFFF', marginTop: 10 }]}>Hotel</Text>
                                </View>
                                <View style={{ alignItems: 'center', flex: 1 }}>
                                    <S19 />
                                    <Text style={[style.r12, { color: '#FFFFFF', marginTop: 10 }]}>Wifi</Text>
                                </View>
                            </View>

                            <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center', }}>
                                <View style={{ alignItems: 'center', flex: 1 }}>
                                    <S20 />
                                    <Text style={[style.r12, { color: '#FFFFFF', marginTop: 10 }]}>Electricity</Text>
                                </View>
                                <View style={{ alignItems: 'center', flex: 1 }}>
                                    <S21 />
                                    <Text style={[style.r12, { color: '#FFFFFF', marginTop: 10 }]}>Movie</Text>
                                </View>
                                <View style={{ alignItems: 'center', flex: 1 }}>
                                    <S22 />
                                    <Text style={[style.r12, { color: '#FFFFFF', marginTop: 10 }]}>Store</Text>
                                </View>
                                <View style={{ alignItems: 'center', flex: 1 }}>
                                    <S23 />
                                    <Text style={[style.r12, { color: '#FFFFFF', marginTop: 10 }]}>See all</Text>
                                </View>
                            </View>

                        </View>

                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}