import { View, Text, FlatList, SafeAreaView, Dimensions, StatusBar, KeyboardAvoidingView, ImageBackground, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native'
import React, { useState, useContext, useRef } from 'react'
import { useNavigation } from '@react-navigation/native'
import style from '../theme/style'
import { Colors } from '../theme/color'
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Avatar } from 'react-native-paper'
import { AppBar } from '@react-native-material/core';
import PhoneInput from 'react-native-phone-number-input';
import Logo from '../../assets/image/Logo.svg';
//import S1 from '../../assets/image/s1.svg';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

const Forgot = () => {
    const navigation = useNavigation();
    const [show, setshow] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('')
    const phoneInput = useRef(null);
    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.bg }]}>
            <StatusBar backgroundColor={Colors.box} translucent={true} />
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : null}>
                <View style={[style.main, { backgroundColor: Colors.bg, marginTop: Platform.OS === 'ios' ? 10 : 25  }]}>
                    <AppBar
                        color={Colors.bg}
                        elevation={0}
                        title='Forget password'
                        titleStyle={[style.b16, { color: Colors.secondary }]}
                        leading={<TouchableOpacity onPress={() => navigation.navigate('Login')}>
                            <Icon name="chevron-back" color={Colors.secondary} size={24} />
                        </TouchableOpacity>
                        }
                    />
                    <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 10 }}>
                        <View style={{ marginTop: 40, }}>
                            <Logo style={{}} />
                        </View>

                        {show ?
                            <View style={{ marginTop: 20, height: 50, flexDirection: 'row', alignItems: 'center', borderBottomColor: Colors.input, borderBottomWidth: 1 }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <S1 />
                                    <Text style={[style.b15, { color: Colors.secondary, marginLeft: 4 }]}>Email Id</Text>
                                </View>
                                <View style={[style.verticaldivider, { backgroundColor: '#FFFFFF45', marginHorizontal: 10 }]}></View>
                                <TextInput placeholder='Enter your email id' placeholderTextColor={Colors.disable}
                                    selectionColor={Colors.secondary}
                                    style={[style.r15, { color: Colors.secondary, flex: 1 }]}
                                />
                            </View>

                            :
                            <View style={{ marginTop: 20 }}>
                                <PhoneInput
                                    selectionColor={Colors.secondary}
                                    ref={phoneInput}
                                    defaultValue={phoneNumber}
                                    defaultCode="IN"
                                    layout="first"
                                    withDarkTheme
                                    codeTextStyle={{ color: Colors.secondary }}
                                    textInputProps={{ placeholderTextColor: '#FFFFFF37' }}
                                    textInputStyle={{ color: Colors.secondary }}
                                    containerStyle={{
                                        height: 50,
                                        width: '100%',
                                        borderBottomColor: Colors.input,
                                        borderBottomWidth: 1,
                                        backgroundColor: Colors.bg
                                    }}
                                    textContainerStyle={{
                                        paddingVertical: 0,
                                        backgroundColor: Colors.bg
                                    }}
                                    onChangeFormattedText={text => {
                                        setPhoneNumber(text);
                                    }}
                                />
                            </View>
                        }
                        {show ? <TouchableOpacity >
                            <Text style={[style.r14, { color: Colors.secondary, marginTop: 20 }]}>Enter your ragistered Email Id </Text>
                        </TouchableOpacity>
                            : <TouchableOpacity >
                                <Text style={[style.r14, { color: Colors.secondary, marginTop: 20 }]}>Enter your ragistered mobile number</Text>
                            </TouchableOpacity>}

                        <TouchableOpacity onPress={() => navigation.navigate('Otp')}
                            style={[style.btn, { marginVertical: 20, marginTop: 40 }]}>
                            <Text style={[style.btntxt]}>Send OTP</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => setshow(!show)}
                            style={[style.btn, { marginBottom: 20, backgroundColor: '#1B183E' }]}>
                            {show ?
                                <Text style={[style.btntxt]}>Reset with phone</Text> :
                                <Text style={[style.btntxt]}>Reset with Email</Text>}
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default Forgot;