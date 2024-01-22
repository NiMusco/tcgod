import { View, Text, FlatList, SafeAreaView, Modal, Dimensions, StatusBar, KeyboardAvoidingView, ImageBackground, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native'
import React, { useState, useContext, useRef } from 'react'
import { useNavigation } from '@react-navigation/native'
import style from '../theme/style'
import { Colors } from '../theme/color'
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Avatar } from 'react-native-paper'
import { AppBar, HStack } from '@react-native-material/core';
import S33 from '../../assets/image/s33.svg'
import S35 from '../../assets/image/s35.svg'
import S36 from '../../assets/image/s36.svg'
import S38 from '../../assets/image/s38.svg'
import S40 from '../../assets/image/s40.svg'
import S41 from '../../assets/image/s41.svg'

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Notification() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.bg }]}>
            <StatusBar backgroundColor={Colors.box} translucent={true} />
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : null}>
                <View style={[style.main, { backgroundColor: Colors.bg, marginTop: Platform.OS === 'ios' ? 30 : 50 }]}>
                    <AppBar
                        color={Colors.bg}
                        elevation={0}
                        title='Notifications'
                        titleStyle={[style.b16, { color: Colors.secondary }]}
                        leading={<TouchableOpacity onPress={() => navigation.navigate('Home')}
                            style={[style.icon]}>
                            <Icon name='chevron-back' size={24} color={Colors.secondary} />
                        </TouchableOpacity>}
                    />
                    <View style={[style.inputContainer, { marginTop: 15 }]}>
                        <Icon name='search-outline' size={24} color={Colors.secondary} />
                        <TextInput placeholder='Search' placeholderTextColor={Colors.secondary}
                            selectionColor={Colors.primary}
                            style={[style.r14, { color: Colors.secondary, flex: 1, marginBottom: -8 }]}
                        />
                    </View>
                    <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 10 }}>

                        <View style={{ padding: 15, backgroundColor: '#1B183E', marginTop: 20, borderRadius: 12, flexDirection: 'row', alignItems: 'center' }}>
                            <S40 />
                            <View style={{ marginLeft: 18, flex: 1 }}>
                                <Text style={[style.r14, { color: Colors.secondary }]}>Reya Grifee</Text>
                                <Text style={[style.r10, { color: Colors.secondary }]}>19 april  2021</Text>
                            </View>
                            <View style={{ alignItems: 'flex-end' }}>
                                <Text style={[style.b12, { color: Colors.red }]}>420.00$</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={[style.r10, { color: Colors.secondary }]}>Wallet</Text>
                                </View>
                            </View>
                        </View>

                        <View style={{ padding: 15, backgroundColor: '#1B183E', marginTop: 15, borderRadius: 12, flexDirection: 'row', alignItems: 'center' }}>
                            <S33 />
                            <View style={{ marginLeft: 18, flex: 1 }}>
                                <Text style={[style.r14, { color: Colors.secondary }]}>Letty rechbik</Text>
                                <Text style={[style.r10, { color: Colors.secondary }]}>15 april  2021</Text>
                            </View>
                            <View style={{ alignItems: 'flex-end' }}>
                                <Text style={[style.b12, { color: Colors.red }]}>90$</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={[style.r10, { color: Colors.secondary }]}>Money request</Text>
                                </View>
                            </View>
                        </View>

                        <View style={{ padding: 15, backgroundColor: '#1B183E', marginTop: 15, borderRadius: 12, flexDirection: 'row', alignItems: 'center' }}>
                            <S35 />
                            <View style={{ marginLeft: 18, flex: 1 }}>
                                <Text style={[style.r14, { color: Colors.secondary }]}>Reya Grifee</Text>
                                <Text style={[style.r10, { color: Colors.secondary }]}>15 april 2021</Text>
                            </View>
                            <View style={{ alignItems: 'flex-end' }}>
                                <Text style={[style.b12, { color: Colors.green }]}>420.08$</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={[style.r10, { color: Colors.secondary }]}>Wallet</Text>
                                </View>
                            </View>
                        </View>

                        

                        <View style={{ padding: 15, backgroundColor: '#1B183E', marginTop: 15, borderRadius: 12, flexDirection: 'row', alignItems: 'center' }}>
                            <S41 />
                            <View style={{ marginLeft: 18, flex: 1 }}>
                                <Text style={[style.r14, { color: Colors.secondary }]}>sent to coco </Text>
                                <Text style={[style.r10, { color: Colors.secondary }]}>02 Jan 2022</Text>
                            </View>
                            <View style={{ alignItems: 'flex-end' }}>
                                <Text style={[style.b12, { color: Colors.secondary }]}>420.00$</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={[style.r10, { color: Colors.red }]}>Paid from</Text>
                                    <S36 />
                                </View>
                            </View>
                        </View>

                        <View style={{ padding: 15, backgroundColor: '#1B183E', marginTop: 15, borderRadius: 12, flexDirection: 'row', alignItems: 'center' }}>
                            <S33 />
                            <View style={{ marginLeft: 18, flex: 1 }}>
                                <Text style={[style.r14, { color: Colors.secondary }]}>Netflix</Text>
                                <Text style={[style.r10, { color: Colors.secondary }]}>23 march 2021</Text>
                            </View>
                            <View style={{ alignItems: 'flex-end' }}>
                                <Text style={[style.b12, { color: Colors.red }]}>420.00$</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={[style.r10, { color: Colors.secondary }]}>Wallet</Text>
                                </View>
                            </View>
                        </View>

                        <View style={{ padding: 15, backgroundColor: '#1B183E', marginTop: 15, borderRadius: 12, flexDirection: 'row', alignItems: 'center' }}>
                            <S40 />
                            <View style={{ marginLeft: 18, flex: 1 }}>
                                <Text style={[style.r14, { color: Colors.secondary }]}>Reya Grifee</Text>
                                <Text style={[style.r10, { color: Colors.secondary }]}>19 april  2021</Text>
                            </View>
                            <View style={{ alignItems: 'flex-end' }}>
                                <Text style={[style.b12, { color: Colors.red }]}>420.00$</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={[style.r10, { color: Colors.secondary }]}>Wallet</Text>
                                </View>
                            </View>
                        </View>

                        <View style={{ padding: 15, backgroundColor: '#1B183E',marginBottom:20, marginTop: 15, borderRadius: 12, flexDirection: 'row', alignItems: 'center' }}>
                            <Avatar.Image source={require('../../assets/image/s39.png')} size={45} style={{backgroundColor:'#1B183E'}}/>
                            <View style={{ marginLeft: 18, flex: 1 }}>
                                <Text style={[style.r14, { color: Colors.secondary }]}>From coco</Text>
                                <Text style={[style.r10, { color: Colors.secondary }]}>08 Mar 2021</Text>
                            </View>
                            <View style={{ alignItems: 'flex-end' }}>
                                <Text style={[style.b12, { color: Colors.secondary }]}>420.00$</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={[style.r10, { color: Colors.green }]}>Recieved in</Text>
                                    <S38 />
                                </View>
                            </View>
                        </View>

                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}