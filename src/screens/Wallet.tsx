import { View, Text, FlatList, SafeAreaView, Dimensions, StatusBar, KeyboardAvoidingView, ImageBackground, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native'
import React, { useState, useContext, useRef } from 'react'
import { useNavigation } from '@react-navigation/native'
import style from '../theme/style'
import { Colors } from '../theme/color'
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Avatar } from 'react-native-paper'
import { AppBar, HStack } from '@react-native-material/core';
import S24 from '../../assets/image/s24.svg'
import S25 from '../../assets/image/s25.svg'
import S26 from '../../assets/image/s26.svg'
import S27 from '../../assets/image/s27.svg'
import S28 from '../../assets/image/s28.svg'
import S29 from '../../assets/image/s29.svg'
import S30 from '../../assets/image/s30.svg'
import S31 from '../../assets/image/s31.svg'
import S32 from '../../assets/image/s32.svg'
import S33 from '../../assets/image/s33.svg'
import S34 from '../../assets/image/s34.svg'
import S35 from '../../assets/image/s35.svg'
import S36 from '../../assets/image/s36.svg'
import S38 from '../../assets/image/s38.svg'
import S40 from '../../assets/image/s40.svg'
import S41 from '../../assets/image/s41.svg'

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Wallet() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.bg }]}>
            <StatusBar backgroundColor={Colors.box} translucent={true} />
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : null}>
                <View style={[style.main, { backgroundColor: Colors.bg, marginTop: Platform.OS === 'ios' ? 10 : 30 }]}>
                    <AppBar
                        color={Colors.bg}
                        elevation={0}
                        leading={<View style={[style.icon]}>
                            <Icon name='chevron-back' size={24} color={Colors.secondary} />
                        </View>}
                        title='Send'
                        titleStyle={[style.b16, { color: Colors.secondary }]}
                    />
                    <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 10 }}>

                        <View style={{ flexDirection: 'row', marginTop: 10, }}>
                            <View style={{ alignItems: 'center', flex: 1 }}>
                                <S24 />
                                <Text style={[style.r12, { color: '#FFFFFF', marginTop: 10, textAlign: 'center' }]}>Self{'\n'}Transfre</Text>
                            </View>
                            <View style={{ alignItems: 'center', flex: 1 }}>
                                <S25 />
                                <Text style={[style.r12, { color: '#FFFFFF', marginTop: 10, textAlign: 'center' }]}>Bank Account</Text>
                            </View>
                            <TouchableOpacity onPress={()=>navigation.navigate('SPay')}
                            style={{ alignItems: 'center', flex: 1 }}>
                                <S26 />
                                <Text style={[style.r12, { color: '#FFFFFF', marginTop: 10, textAlign: 'center' }]}>Scan{'\n'}& Pay</Text>
                            </TouchableOpacity>
                            <View style={{ alignItems: 'center', flex: 1 }}>
                                <S27 />
                                <Text style={[style.r12, { color: '#FFFFFF', marginTop: 10, textAlign: 'center' }]}>Wallet{'\n'}to Bank</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', marginTop: 20, }}>
                            <Text style={[style.b16, { color: Colors.disable, flex: 1 }]}>Recent Transactions</Text>
                            <S28 />
                        </View>

                        <View style={{ flexDirection: 'row', marginTop: 20, }}>
                            <View style={{ alignItems: 'center', flex: 1, marginTop: -16 }}>
                                <S29 />
                                <Text style={[style.r12, { color: '#23D288', marginTop: -18 }]}>All</Text>
                            </View>
                            <View style={{ alignItems: 'center', flex: 1 }}>
                                <S30 />
                                <Text style={[style.r12, { color: '#F9F9F9', marginTop: 10 }]}>Send</Text>
                            </View>
                            <View style={{ alignItems: 'center', flex: 1 }}>
                                <S31 />
                                <Text style={[style.r12, { color: '#F9F9F9', marginTop: 10 }]}>Recived</Text>
                            </View>
                            <View style={{ alignItems: 'center', flex: 1 }}>
                                <S32 />
                                <Text style={[style.r12, { color: '#F9F9F9', marginTop: 10 }]}>Failed</Text>
                            </View>
                        </View>

                        <View style={{ padding: 15, backgroundColor: '#1B183E', marginTop: 20, borderRadius: 12, flexDirection: 'row', alignItems: 'center' }}>
                            <S33 />
                            <View style={{ marginLeft: 18, flex: 1 }}>
                                <Text style={[style.r14, { color: Colors.secondary }]}>Paid for Netflix</Text>
                                <Text style={[style.r10, { color: Colors.secondary }]}>08 Mar 2021</Text>
                            </View>
                            <View style={{ alignItems: 'flex-end' }}>
                                <Text style={[style.b12, { color: Colors.secondary }]}>82.00$</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={[style.r10, { color: Colors.red }]}>Paid from</Text>
                                    <S34 />
                                </View>
                            </View>
                        </View>

                        <View style={{ padding: 15, backgroundColor: '#1B183E', marginTop: 15, borderRadius: 12, flexDirection: 'row', alignItems: 'center' }}>
                            <S35 />
                            <View style={{ marginLeft: 18, flex: 1 }}>
                                <Text style={[style.r14, { color: Colors.secondary }]}>sent to coco</Text>
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

                        <View style={{ padding: 15, backgroundColor: '#1B183E', marginTop: 15, borderRadius: 12, flexDirection: 'row', alignItems: 'center' }}>
                            <S40 />
                            <View style={{ marginLeft: 18, flex: 1 }}>
                                <Text style={[style.r14, { color: Colors.secondary }]}>Paid for Spotify</Text>
                                <Text style={[style.r10, { color: Colors.secondary }]}>08 Mar 2021</Text>
                            </View>
                            <View style={{ alignItems: 'flex-end' }}>
                                <Text style={[style.b12, { color: Colors.secondary }]}>22.00$</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={[style.r10, { color: Colors.red }]}>Paid from</Text>
                                    <S34 />
                                </View>
                            </View>
                        </View>

                        <View style={{ padding: 15, backgroundColor: '#1B183E', marginTop: 15, borderRadius: 12, flexDirection: 'row', alignItems: 'center' }}>
                            <S41 />
                            <View style={{ marginLeft: 18, flex: 1 }}>
                                <Text style={[style.r14, { color: Colors.secondary }]}>Broadband </Text>
                                <Text style={[style.r10, { color: Colors.secondary }]}>08 Mar 2021</Text>
                            </View>
                            <View style={{ alignItems: 'flex-end' }}>
                                <Text style={[style.b12, { color: Colors.red }]}>124.00$</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={[style.r10, { color: Colors.secondary }]}>Wallet</Text>
                                </View>
                            </View>
                        </View>

                        <View style={{ padding: 15, backgroundColor: '#1B183E', marginTop: 15, borderRadius: 12, flexDirection: 'row', alignItems: 'center' }}>
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

                        <View style={{ padding: 15, backgroundColor: '#1B183E', marginTop: 15, borderRadius: 12, flexDirection: 'row', alignItems: 'center' }}>
                            <S33 />
                            <View style={{ marginLeft: 18, flex: 1 }}>
                                <Text style={[style.r14, { color: Colors.secondary }]}>Paid for Spotify</Text>
                                <Text style={[style.r10, { color: Colors.secondary }]}>08 Mar 2021</Text>
                            </View>
                            <View style={{ alignItems: 'flex-end' }}>
                                <Text style={[style.b12, { color: Colors.secondary }]}>22.00$</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={[style.r10, { color: Colors.red }]}>Paid from</Text>
                                    <S34 />
                                </View>
                            </View>
                        </View>

                        <View style={{marginBottom:40, padding: 15, backgroundColor: '#1B183E', marginTop: 15, borderRadius: 12, flexDirection: 'row', alignItems: 'center' }}>
                            <S41 />
                            <View style={{ marginLeft: 18, flex: 1 }}>
                                <Text style={[style.r14, { color: Colors.secondary }]}>Broadband </Text>
                                <Text style={[style.r10, { color: Colors.secondary }]}>08 Mar 2021</Text>
                            </View>
                            <View style={{ alignItems: 'flex-end' }}>
                                <Text style={[style.b12, { color: Colors.red }]}>124.00$</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={[style.r10, { color: Colors.secondary }]}>Wallet</Text>
                                </View>
                            </View>
                        </View>

                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}