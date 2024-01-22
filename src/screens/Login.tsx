import { View, Text, FlatList, SafeAreaView, Modal, Dimensions, KeyboardAvoidingView, TouchableOpacity, Image, ScrollView, ImageBackground, StatusBar, TextInput } from 'react-native'
import React, { useState, useContext, } from 'react'
import { useNavigation } from '@react-navigation/native'
import style from '../theme/style'
import { Colors } from '../theme/color'
import { Avatar } from 'react-native-paper'
import { AppBar, HStack } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
// import { SvgUri } from 'react-native-svg';
// import SvgUri from 'react-native-svg-uri';
import A3 from '../../assets/image/a3.svg';
import A2 from '../../assets/image/a2.svg';
import Logo from '../../assets/image/Logo.svg';
import A4 from '../../assets/image/a4.svg';
import A5 from '../../assets/image/a5.svg';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Login() {

    const navigation = useNavigation();
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)
    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.bg }]}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : null}>
                <StatusBar backgroundColor={Colors.box} translucent={true}></StatusBar>
                <View style={[style.main, { backgroundColor: Colors.bg, marginTop: 50 }]}>

                    <Text style={[style.subtitle, { color: Colors.secondary, }]}>Welcome Back</Text>
                    <Text style={[style.r16, { color: Colors.secondary, marginTop: -5 }]}>Sign in to continue</Text>

                    <ScrollView showsVerticalScrollIndicator={false}>

                        <View style={{ marginTop: 50, marginBottom: 35 }}>
                            <Logo style={{}} />
                        </View>

                        <View style={[style.txtinput]}>
                            <View style={{ backgroundColor: Colors.box, borderRadius: 18, height: 50, width: 50, alignItems: 'center', justifyContent: 'center' }}>
                                <A2 />
                            </View>
                            <View style={{ flex: 1, marginLeft: 10 }}>
                                <Text style={[style.r14, { color: Colors.disable, marginBottom: -10, lineHeight: 20, marginTop: 8 }]}>User name</Text>
                                <TextInput placeholder='saloneel'
                                    selectionColor={Colors.primary}
                                    placeholderTextColor={Colors.txt}
                                    style={[style.r16, { color: Colors.txt, height: 44, paddingBottom: -20 }]}
                                />
                            </View>
                        </View>

                        <View style={[style.txtinput, { marginTop: 25 }]}>
                            <View style={{ backgroundColor: Colors.box, borderRadius: 18, height: 50, width: 50, alignItems: 'center', justifyContent: 'center' }}>
                                <A4 />
                            </View>
                            <View style={{ flex: 1, marginLeft: 10 }}>
                                <Text style={[style.r14, { color: Colors.disable, marginBottom: -10, lineHeight: 20, marginTop: 8 }]}>Password</Text>
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

                        <TouchableOpacity onPress={() => navigation.navigate('Forgot')}>
                            <Text style={[style.r14, { color: Colors.primary, marginTop: 15 }]}>Forgot your password ?</Text>
                        </TouchableOpacity>

                        <View style={{ marginTop: 40, marginBottom: 20 }}>
                            <TouchableOpacity onPress={() => navigation.navigate('RMoney')}
                                style={[style.btn, {}]}>
                                <Text style={[style.btntxt]}>Sign in</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ marginBottom: 25 }}>
                            <TouchableOpacity onPress={() => navigation.navigate('Signup')}
                                style={[style.btn2, {}]}>
                                <Text style={[style.btntxt, { color: Colors.primary }]}>Creat an account</Text>
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity onPress={() => navigation.navigate('Finger')}
                            style={{ alignItems: 'center', marginBottom: 20 }}>
                            <A5 />
                        </TouchableOpacity>

                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}