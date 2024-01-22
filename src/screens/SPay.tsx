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
import A14 from '../../assets/image/a14.svg'
import A18 from '../../assets/image/a18.svg'
import A19 from '../../assets/image/a19.svg'
import A20 from '../../assets/image/a20.svg'
import A21 from '../../assets/image/a21.svg'
import A22 from '../../assets/image/a22.svg'

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function SPay() {
    const navigation = useNavigation();
    const [visible1, setvisible1] = useState(false)

    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.bg }]}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : null}>
                <StatusBar backgroundColor={Colors.box} translucent={true}></StatusBar>
                <View style={[style.main, { backgroundColor: Colors.bg, marginTop: Platform.OS === 'ios' ? 10 : 30}]}>

                    <AppBar
                        centerTitle={true}
                        title='Scan & Pay'
                        titleStyle={[style.b16, { color: Colors.secondary }]}
                        style={{ backgroundColor: 'transparent', }}
                        elevation={0}
                        leading={<TouchableOpacity onPress={() => navigation.navigate('MyTabs')} style={[style.icon, { backgroundColor: Colors.box }]}>
                            <Icon name='chevron-back' size={24} color={Colors.secondary}></Icon>
                        </TouchableOpacity>}
                    />

                    <ScrollView showsVerticalScrollIndicator={false}>

                        <Text style={[style.subtitle,{color:Colors.txt,textAlign:'center',marginTop:20}]}>Scan QR Code</Text>

                        <View style={{ marginTop: 30, marginBottom: 35, alignItems: 'center' }}>
                            <View
                                style={{ position: "absolute", alignItems: 'center', justifyContent: 'center' }}>
                                <A22 />
                            </View>
                            
                        </View>
                        <Text style={[style.r12, { color: '#8F92A1', textAlign: 'center' ,marginTop:220}]}>Please align QR within frame to scan</Text>

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
                            <A20 />
                            <A21 style={{ marginLeft: 30 }} />
                        </View>



                    </ScrollView>
                </View>
                <View style={{ backgroundColor: Colors.box, borderTopLeftRadius: 30, borderTopRightRadius: 30, paddingBottom: 20, paddingTop: 20, paddingHorizontal: 30 }}>

                    <Text style={[style.r12, { color: Colors.txt, marginBottom: 15, textAlign: 'center' }]}>Recent Transactions</Text>

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 20 }}>
                        <View style={{ alignItems: 'center' }}>
                            <View style={{ height: 50, width: 50, borderColor: Colors.primary, borderWidth: 1, borderRadius: 15, alignItems: 'center', justifyContent: 'center' }}>
                                <A18 />
                            </View>
                            <Text style={[style.r12, { color: Colors.txt, marginTop: 10 }]}>All</Text>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <View style={{ height: 50, width: 50, borderRadius: 15, alignItems: 'center', justifyContent: 'center' }}>
                                <A15 />
                            </View>
                            <Text style={[style.r12, { color: Colors.txt, marginTop: 10 }]}>Send</Text>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <View style={{ height: 50, width: 50, borderRadius: 15, alignItems: 'center', justifyContent: 'center' }}>
                                <A16 />
                            </View>
                            <Text style={[style.r12, { color: Colors.txt, marginTop: 10 }]}>Recived</Text>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <View style={{ height: 50, width: 50, borderRadius: 15, alignItems: 'center', justifyContent: 'center' }}>
                                <A14 />
                            </View>
                            <Text style={[style.r12, { color: Colors.txt, marginTop: 10 }]}>Failed</Text>
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}