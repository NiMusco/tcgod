import { View, Text, FlatList, SafeAreaView, Dimensions, StatusBar, KeyboardAvoidingView, ImageBackground, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useState, useContext, } from 'react'
import { useNavigation } from '@react-navigation/native'
import style from '../theme/style'
import { Colors } from '../theme/color'
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Avatar } from 'react-native-paper'
import { AppBar } from '@react-native-material/core';
import OtpInputs from 'react-native-otp-inputs'
import Clipboard from '@react-native-clipboard/clipboard'

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Otp() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.bg }]}>
            <StatusBar backgroundColor={Colors.box} translucent={true} />
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : null}>
                <View style={[style.main, { backgroundColor: Colors.bg, marginTop:Platform.OS === 'ios' ? 10 : 25 }]}>
                    <AppBar
                        color={Colors.bg}
                        elevation={0}
                        title='OTP Verification'
                        titleStyle={[style.b16, { color: Colors.secondary }]}
                        leading={<TouchableOpacity onPress={() => navigation.navigate('Forgot')}>
                            <Icon name="chevron-back" color={Colors.secondary} size={24} />
                        </TouchableOpacity>
                        }
                    />
                    <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 10 }}>
                        <Text style={[style.subtitle, { color: Colors.disable }]}>Enter OTP</Text>

                        <OtpInputs
                            Clipboard={Clipboard}
                            numberOfInputs={4}
                            selectionColor={Colors.primary}
                            style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 20 }}
                            inputStyles={{
                                backgroundColor: '#FFFFFF10',
                                borderRadius: 18,
                                textAlign: 'center',
                                height: 60,
                                width: 60,
                                fontSize: 20,
                                color: Colors.secondary,
                            }}

                        // handleChange={(numberOfInputs) => {
                        //     if (numberOfInputs == 4)
                        //        { navigation.navigate('Intro1')}
                        // }}
                        />
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                            <Text style={[style.r14, { color: '#23D288', flex: 1 }]}>Resend code</Text>
                            <Text style={[style.b12, { color: '#FF4A4A' }]}>02:45</Text>
                        </View>
                        <Text style={[style.r14, { color: Colors.disable, marginTop: 20 }]}>We texted you a code to verify your phone
                            number <Text style={[style.s14, { color: '#614BFF' }]}>+1 9876543210</Text></Text>
                    </ScrollView>
                    <TouchableOpacity  onPress={() => navigation.navigate('NewPass')}
                    style={[style.btn, { marginVertical: 20 }]}>
                        <Text style={[style.btntxt]}>Next</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}