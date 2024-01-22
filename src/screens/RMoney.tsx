import { View, Text, FlatList, SafeAreaView, Modal, Dimensions, KeyboardAvoidingView, TouchableOpacity, Image, ScrollView, ImageBackground, StatusBar, TextInput } from 'react-native'
import React, { useState, useContext, } from 'react'
import { useNavigation } from '@react-navigation/native'
import style from '../theme/style'
import { Colors } from '../theme/color'
import { Avatar } from 'react-native-paper'
import { AppBar, HStack } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

import A10 from '../../assets/image/a10.svg'
import A11 from '../../assets/image/a11.svg'
import A12 from '../../assets/image/a12.svg'
import A13 from '../../assets/image/a13.svg'
import A15 from '../../assets/image/a15.svg'
import A16 from '../../assets/image/a16.svg'
import A17 from '../../assets/image/a17.svg'
import A14 from '../../assets/image/a14.svg'

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function RMoney() {
    const navigation = useNavigation();
    const [visible1, setvisible1] = useState(false)

    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.bg }]}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : null}>
                <StatusBar backgroundColor={Colors.box} translucent={true}></StatusBar>
                <View style={[style.main, { backgroundColor: Colors.bg, marginTop: Platform.OS === 'ios' ? 10 : 25 }]}>

                    <AppBar
                        centerTitle={true}
                        title='Receive money'
                        titleStyle={[style.b16, { color: Colors.secondary }]}
                        style={{ backgroundColor: 'transparent', }}
                        elevation={0}
                        leading={<TouchableOpacity onPress={() => navigation.goBack()} style={[style.icon, { backgroundColor: Colors.box }]}>
                            <Icon name='chevron-back' size={24} color={Colors.secondary}></Icon>
                        </TouchableOpacity>}
                    />

                    <ScrollView showsVerticalScrollIndicator={false}>

                        <View style={{ marginTop: 50, marginBottom: 35, alignItems: 'center' }}>
                            <A10 style={{}} />
                        </View>
                        <Text style={[style.r16, { color: Colors.txt, textAlign: 'center' }]}>24589632552@payou</Text>

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
                            <A11 />
                            <A12 style={{ marginHorizontal: 50 }} />
                            <A13 />
                        </View>

                        <TouchableOpacity onPress={() => setvisible1(true)}
                            style={[style.btn, { width: width / 2, alignSelf: 'center', height: 50, marginTop: 40 ,}]}>
                            <Modal transparent={true} visible={visible1}  >
                                <View
                                    style={{ flex: 1, backgroundColor: '#26225460', justifyContent: 'center', alignSelf: 'center', width: width, }}>
                                    <View style={{ padding: 20, backgroundColor: Colors.secondary, borderRadius: 36, width: width - 80, alignSelf: 'center',borderWidth:1,borderColor:Colors.primary }}>


                                        <Text style={[style.subtitle, { color: Colors.active, textAlign: 'center', marginTop: 15 }]}>Set amount</Text>

                                        <View style={[style.inputContainer,{width:width/2,height:50,alignSelf:'center',borderRadius:15,marginTop:20,backgroundColor:Colors.secondary,borderColor:Colors.primary}]}>
                                            <View style={{ flex: 1, marginLeft: 10 }}>
                                                <TextInput placeholder='2500$'
                                                    selectionColor={Colors.primary}
                                                    placeholderTextColor={Colors.active}
                                                    style={[style.subtitle, { color: Colors.active, height: 50, paddingBottom: -15,marginTop:-6,textAlign:'center' }]}
                                                />
                                            </View>
                                        </View>

                                        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:30}}>
                                            <TouchableOpacity onPress={() => { setvisible1(false) }}>
                                            <Text style={[style.r14,{color:Colors.active}]}>Cancel</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity onPress={() => { setvisible1(false),navigation.navigate('MyTabs') }}>
                                            <Text style={[style.s14,{color:Colors.green,marginLeft:30}]}>Confirm</Text>
                                            </TouchableOpacity>
                                        </View>

                                    </View>
                                </View>
                            </Modal>
                            <Text style={[style.btntxt]}>Set Money</Text>
                        </TouchableOpacity>

                    </ScrollView>
                </View>
                <Text style={[style.r12, { color: Colors.txt, marginBottom: 15, textAlign: 'center' ,marginTop:10}]}>Recent Transactions</Text>
                <View style={{ backgroundColor: Colors.box, borderTopLeftRadius: 30, borderTopRightRadius: 30, paddingBottom: 20, paddingTop: 40, paddingHorizontal: 30 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <View style={{ alignItems: 'center' }}>
                            <View style={{ height: 50, width: 50, backgroundColor: Colors.bg, borderRadius: 15, alignItems: 'center', justifyContent: 'center' }}>
                                <A14 />
                            </View>
                            <Text style={[style.r12, { color: Colors.txt, marginTop: 10 }]}>All</Text>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <View style={{ height: 50, width: 50, backgroundColor: Colors.bg, borderRadius: 15, alignItems: 'center', justifyContent: 'center' }}>
                                <A15 />
                            </View>
                            <Text style={[style.r12, { color: Colors.txt, marginTop: 10 }]}>Send</Text>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <View style={{ height: 50, width: 50, backgroundColor: Colors.bg, borderRadius: 15, alignItems: 'center', justifyContent: 'center' }}>
                                <A16 />
                            </View>
                            <Text style={[style.r12, { color: Colors.txt, marginTop: 10 }]}>Recived</Text>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <View style={{ height: 50, width: 50, backgroundColor: Colors.bg, borderRadius: 15, alignItems: 'center', justifyContent: 'center' }}>
                                <A17 />
                            </View>
                            <Text style={[style.r12, { color: Colors.txt, marginTop: 10 }]}>Failed</Text>
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}