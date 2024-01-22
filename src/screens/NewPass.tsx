import { View, Text, FlatList, SafeAreaView, Modal, Dimensions, KeyboardAvoidingView, TouchableOpacity, Image, ScrollView, ImageBackground, StatusBar, TextInput } from 'react-native'
import React, { useState, useContext, } from 'react'
import { useNavigation } from '@react-navigation/native'
import style from '../theme/style'
import { Colors } from '../theme/color'
import { Avatar } from 'react-native-paper'
import { AppBar, HStack } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

import Logo from '../../assets/image/Logo.svg';
import A9 from '../../assets/image/a9.svg'

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function NewPass() {
    const navigation = useNavigation();
    const [visible1, setvisible1] = useState(false)
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)
    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.bg }]}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : null}>
                <StatusBar backgroundColor={Colors.box} translucent={true}></StatusBar>
                <View style={[style.main, { backgroundColor: Colors.bg, marginTop: Platform.OS === 'ios' ? 10 : 25 }]}>

                    <AppBar
                        centerTitle={true}
                        title='Set new password'
                        titleStyle={[style.b16, { color: Colors.secondary }]}
                        style={{ backgroundColor: 'transparent', }}
                        elevation={0}
                        leading={<TouchableOpacity onPress={() => navigation.navigate('Otp')} style={[style.icon, { backgroundColor: Colors.box }]}>
                            <Icon name='chevron-back' size={24} color={Colors.secondary}></Icon>
                        </TouchableOpacity>}
                    />

                    <ScrollView showsVerticalScrollIndicator={false}>

                        <View style={{ marginTop: 50, marginBottom: 35 }}>
                            <Logo style={{}} />
                        </View>

                        <View style={[style.txtinput]}>

                            <View style={{ flex: 1, }}>
                                <Text style={[style.r14, { color: Colors.disable, marginBottom: -10, lineHeight: 20, marginTop: 8 }]}>Type your new password</Text>
                                <TextInput placeholder='saloneel'
                                    selectionColor={Colors.primary}
                                    placeholderTextColor={Colors.txt}
                                    style={[style.r16, { color: Colors.txt, height: 44, paddingBottom: -20 }]}
                                />
                            </View>
                        </View>

                        <View style={[style.txtinput, { marginTop: 25 }]}>

                            <View style={{ flex: 1, }}>
                                <Text style={[style.r14, { color: Colors.disable, marginBottom: -10, lineHeight: 20, marginTop: 8 }]}>Confirm your new password</Text>
                                <TextInput placeholder='Password'
                                    selectionColor={Colors.primary}
                                    secureTextEntry={!isPasswordVisible}
                                    placeholderTextColor={Colors.txt}
                                    style={[style.r16, { color: Colors.txt, height: 44, paddingBottom: -20 }]}
                                />

                            </View>
                            <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)} >
                                <Icon name={isPasswordVisible ? 'eye-off' : 'eye'} color={Colors.disable} size={20} />
                            </TouchableOpacity>
                        </View>

                        <Text style={[style.r14, { color: Colors.primary, marginTop: 15 }]}>Creat new account</Text>

                        <View style={{ marginTop: 40, marginBottom: 20 }}>
                            <TouchableOpacity onPress={() => setvisible1(true)}
                                style={[style.btn, {}]}>

                                <Modal transparent={true} visible={visible1}  >
                                    <View
                                        style={{ flex: 1, backgroundColor: '#00000080', justifyContent: 'center', alignSelf: 'center',width:width ,}}>
                                        <View style={{ padding: 20, backgroundColor: Colors.secondary, borderRadius: 20, width: width - 80,alignSelf:'center' }}>

                                            <A9 style={{alignSelf:'center'}}/>
                                            <Text style={[style.b16, { color: '#202046', textAlign: 'center', marginTop: 15 }]}>Password changed successfully!</Text>

                                            <TouchableOpacity onPress={() => { setvisible1(false),navigation.navigate('Signup') }}
                                                style={[style.btn, { marginVertical: 20, width: width / 2, alignSelf: 'center', }]}>
                                                <Text style={[style.btntxt]}>Cancel</Text>
                                            </TouchableOpacity>
                                            
                                        </View>
                                    </View>
                                </Modal>

                                <Text style={[style.btntxt]}>Save</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}