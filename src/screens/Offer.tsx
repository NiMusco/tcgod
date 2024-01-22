import { View, Text, FlatList, SafeAreaView, Dimensions, Modal, StatusBar, KeyboardAvoidingView, ImageBackground, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native'
import React, { useState, useContext, useRef } from 'react'
import { useNavigation } from '@react-navigation/native'
import style from '../theme/style'
import { Colors } from '../theme/color'
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Avatar } from 'react-native-paper'
import { AppBar, HStack } from '@react-native-material/core';
import S42 from '../../assets/image/s42.svg'
import S43 from '../../assets/image/s43.svg'
import S44 from '../../assets/image/s44.svg'
import S45 from '../../assets/image/s45.svg'
import S13 from '../../assets/image/s13.svg'
import S46 from '../../assets/image/s46.svg'
import S47 from '../../assets/image/s47.svg'
import S48 from '../../assets/image/s48.svg'
import S50 from '../../assets/image/s50.svg'
import S51 from '../../assets/image/s51.svg'

import S53 from '../../assets/image/s53.svg'

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Offer() {
    const navigation = useNavigation();
    const [visible, setVisible] = useState(false)
    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.bg }]}>
            <StatusBar backgroundColor={Colors.box} translucent={true} />
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : null}>
                <View style={[style.main, { backgroundColor: Colors.bg, marginTop: Platform.OS === 'ios' ? 10 : 30 }]}>
                    <AppBar
                        color={Colors.bg}
                        elevation={0}
                        leading={<Text style={[style.apptitle, { color: Colors.secondary }]}>Pay<Text style={{ color: '#23D288' }}>ou</Text></Text>}
                        trailing={<HStack>
                            <S42></S42>
                            <TouchableOpacity onPress={() => navigation.navigate('Notification')}
                                style={{ marginLeft: 8 }}>
                                <S43></S43>
                            </TouchableOpacity>
                            <View style={{ marginLeft: 8 }}>
                                <S44></S44>
                            </View>
                        </HStack>}
                    />
                    <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 10 }}>

                        <View style={{ marginTop: 20, }}>
                            <ScrollView horizontal showsHorizontalScrollIndicator={false} nestedScrollEnabled={true}>
                                <View style={{ padding: 15, paddingHorizontal: 25, width: width / 1.3, backgroundColor: '#FFBF35', borderRadius: 24, flexDirection: 'row', alignItems: 'center' }}>
                                    <S45 />
                                    <View style={{ marginLeft: 20, flex: 1 }}>
                                        <Text style={[style.s14, { color: Colors.active }]}>Invite your friends and get Cashback</Text>
                                    </View>
                                </View>
                                <View style={{ marginHorizontal: 10, padding: 15, paddingHorizontal: 25, width: width / 1.3, backgroundColor: Colors.primary, borderRadius: 24, flexDirection: 'row', alignItems: 'center' }}>
                                    <S13 />
                                    <View style={{ marginLeft: 20, flex: 1 }}>
                                        <Text style={[style.s14, { color: Colors.secondary }]}>Cashback 100%</Text>
                                        <Text style={[style.m11, { color: Colors.secondary }]}>Invite your friends and get Cashback</Text>
                                    </View>
                                </View>
                                <View style={{ padding: 15, paddingHorizontal: 25, width: width / 1.3, backgroundColor: '#FF4E98', borderRadius: 24, flexDirection: 'row', alignItems: 'center' }}>
                                    <S45 />
                                    <View style={{ marginLeft: 20, flex: 1 }}>
                                        <Text style={[style.s14, { color: Colors.active }]}>Invite your friends and get Cashback</Text>
                                    </View>
                                </View>
                            </ScrollView>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20, }}>
                            <Text style={[style.b16, { color: Colors.disable, flex: 1 }]}>Top Offer</Text>
                            <TouchableOpacity onPress={() => setVisible(true)}
                                style={{ paddingHorizontal: 15, paddingVertical: 10, borderRadius: 12, flexDirection: 'row', alignItems: 'center', borderColor: '#3B3759', borderWidth: 1, backgroundColor: '#1B183E' }}>

                                <Modal transparent={true}
                                    visible={visible}>
                                    <View style={{
                                        flex: 1,
                                        backgroundColor: '#000000aa',
                                        transparent: 'true'
                                    }}>
                                        <TouchableOpacity onPress={() => setVisible(false)}
                                            style={{ backgroundColor: 'transparent', justifyContent: 'center', flex: 1 }}>
                                            <View style={{justifyContent:'center', paddingHorizontal: 30, paddingVertical: 40, backgroundColor: '#F9F9F9', borderRadius: 36, width: width - 80, alignSelf: 'center' }}>
                                                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                                    <Text style={[style.b12, { color: Colors.active, flex: 1,textAlign:'center' }]}>All</Text>
                                                    <View style={{ flex: 1,alignItems:'center' }}>
                                                        <View style={{ height: 20, width: 20, backgroundColor: '#EAE6FF', borderRadius: 6 }}></View>
                                                    </View>
                                                </View>
                                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                                                    <Text style={[style.b12, { color: Colors.active, flex: 1,textAlign:'center'  }]}>Food</Text>
                                                    <View style={{ flex: 1,alignItems:'center' }}>
                                                        <View style={{ height: 20, width: 20, backgroundColor: '#EAE6FF', borderRadius: 6 }}></View>
                                                    </View>
                                                </View>
                                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                                                    <Text style={[style.b12, { color: Colors.active, flex: 1 ,textAlign:'center' }]}>Entertenment</Text>
                                                    <View style={{ flex: 1,alignItems:'center' }}>
                                                        <View style={{ height: 20, width: 20,justifyContent:'center',alignItems:'center', backgroundColor: '#EAE6FF', borderRadius: 6 }}>
                                                            <Icons name='check-bold' size={16} color='#23D288' />
                                                        </View>
                                                    </View>
                                                </View>
                                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                                                    <Text style={[style.b12, { color: Colors.active, flex: 1,textAlign:'center'  }]}>Health</Text>
                                                    <View style={{ flex: 1,alignItems:'center' }}>
                                                        <View style={{ height: 20, width: 20, backgroundColor: '#EAE6FF', borderRadius: 6 }}></View>
                                                    </View>
                                                </View>
                                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                                                    <Text style={[style.b12, { color: Colors.active, flex: 1,textAlign:'center'  }]}>Transport</Text>
                                                    <View style={{ flex: 1,alignItems:'center' }}>
                                                        <View style={{ height: 20, width: 20,justifyContent:'center',alignItems:'center', backgroundColor: '#EAE6FF', borderRadius: 6 }}>
                                                            <Icons name='check-bold' size={16} color='#23D288' />
                                                        </View>
                                                    </View>
                                                </View>
                                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                                                    <Text style={[style.b12, { color: Colors.active, flex: 1,textAlign:'center'  }]}>Shopping</Text>
                                                    <View style={{ flex: 1,alignItems:'center' }}>
                                                        <View style={{ height: 20, width: 20, backgroundColor: '#EAE6FF', borderRadius: 6 }}></View>
                                                    </View>
                                                </View>
                                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                                                    <Text style={[style.b12, { color: Colors.active, flex: 1 ,textAlign:'center' }]}>Other</Text>
                                                    <View style={{ flex: 1 ,alignItems:'center'}}>
                                                        <View style={{ height: 20, width: 20,justifyContent:'center',alignItems:'center', backgroundColor: '#EAE6FF', borderRadius: 6 }}>
                                                            <Icons name='check-bold' size={16} color='#23D288' />
                                                        </View>
                                                    </View>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </Modal>

                                <Text style={[style.b12, { color: Colors.secondary, marginRight: 5 }]}>All</Text>
                                <Icon name='chevron-down' size={20} color={Colors.secondary} />
                            </TouchableOpacity>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                            <TouchableOpacity onPress={() => navigation.navigate('ODetail')}
                                style={{ alignItems: 'center', flex: 1, paddingVertical: 20, backgroundColor: Colors.box, borderRadius: 12 }}>
                                <S46 />
                                <Text style={[style.b16, { color: Colors.secondary, textAlign: 'center', marginTop: 10 }]}>10% Off</Text>
                                <Text style={[style.r12, { color: Colors.txt1, textAlign: 'center' }]}>Spotify Pro</Text>
                                <Text style={[style.r8, { color: '#23D288', textAlign: 'center', marginTop: 5 }]}>Expires: July 10, 2022</Text>
                            </TouchableOpacity>
                            <View style={{ marginHorizontal: 10 }}></View>
                            <TouchableOpacity onPress={() => navigation.navigate('OffD')}
                                style={{ alignItems: 'center', flex: 1, paddingVertical: 20, backgroundColor: Colors.box, borderRadius: 12 }}>
                                <S47 />
                                <Text style={[style.b16, { color: Colors.secondary, textAlign: 'center', marginTop: 10 }]}>10% Off</Text>
                                <Text style={[style.r12, { color: Colors.txt1, textAlign: 'center' }]}>KFC Food</Text>
                                <Text style={[style.r8, { color: '#23D288', textAlign: 'center', marginTop: 5 }]}>Expires: July 10, 2022</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                            <TouchableOpacity onPress={() => navigation.navigate('ODetail')}
                                style={{ alignItems: 'center', flex: 1, paddingVertical: 20, backgroundColor: Colors.box, borderRadius: 12 }}>
                                <S48 />
                                <Text style={[style.b16, { color: Colors.secondary, textAlign: 'center', marginTop: 10 }]}>10% Off</Text>
                                <Text style={[style.r12, { color: Colors.txt1, textAlign: 'center' }]}>Salior</Text>
                                <Text style={[style.r8, { color: '#23D288', textAlign: 'center', marginTop: 5 }]}>Expires: July 10, 2022</Text>
                            </TouchableOpacity>
                            <View style={{ marginHorizontal: 10 }}></View>
                            <TouchableOpacity onPress={() => navigation.navigate('OffD')}
                                style={{ alignItems: 'center', flex: 1, paddingVertical: 20, backgroundColor: Colors.box, borderRadius: 12 }}>
                                <Image source={require('../../assets/image/s49.png')} resizeMode='stretch' style={{ height: 70, width: 70 }} />
                                <Text style={[style.b16, { color: Colors.secondary, textAlign: 'center', marginTop: 10 }]}>10% Off</Text>
                                <Text style={[style.r12, { color: Colors.txt1, textAlign: 'center' }]}>Nike</Text>
                                <Text style={[style.r8, { color: '#23D288', textAlign: 'center', marginTop: 5 }]}>Expires: July 10, 2022</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                            <TouchableOpacity onPress={() => navigation.navigate('ODetail')}
                                style={{ alignItems: 'center', flex: 1, paddingVertical: 20, backgroundColor: Colors.box, borderRadius: 12 }}>
                                <S50 />
                                <Text style={[style.b16, { color: Colors.secondary, textAlign: 'center', marginTop: 10 }]}>5% Cashback</Text>
                                <Text style={[style.r12, { color: Colors.txt1, textAlign: 'center' }]}>Starbucks</Text>
                                <Text style={[style.r8, { color: '#23D288', textAlign: 'center', marginTop: 5 }]}>Expires: July 10, 2022</Text>
                            </TouchableOpacity>
                            <View style={{ marginHorizontal: 10 }}></View>
                            <TouchableOpacity onPress={() => navigation.navigate('OffD')}
                                style={{ alignItems: 'center', flex: 1, paddingVertical: 20, backgroundColor: Colors.box, borderRadius: 12 }}>
                                <S51 />
                                <Text style={[style.b16, { color: Colors.secondary, textAlign: 'center', marginTop: 10 }]}>37% Cashback</Text>
                                <Text style={[style.r12, { color: Colors.txt1, textAlign: 'center' }]}>H&M</Text>
                                <Text style={[style.r8, { color: '#23D288', textAlign: 'center', marginTop: 5 }]}>Expires: July 10, 2022</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15, marginBottom: 20 }}>
                            <TouchableOpacity onPress={() => navigation.navigate('ODetail')}
                                style={{ alignItems: 'center', flex: 1, paddingVertical: 20, backgroundColor: Colors.box, borderRadius: 12 }}>
                                <Image source={require('../../assets/image/s52.png')} resizeMode='stretch' style={{ height: 70, width: 70 }} />
                                <Text style={[style.b16, { color: Colors.secondary, textAlign: 'center', marginTop: 10 }]}>10% Off</Text>
                                <Text style={[style.r12, { color: Colors.txt1, textAlign: 'center' }]}>Uber</Text>
                                <Text style={[style.r8, { color: '#23D288', textAlign: 'center', marginTop: 5 }]}>Expires: July 10, 2022</Text>
                            </TouchableOpacity>
                            <View style={{ marginHorizontal: 10 }}></View>
                            <TouchableOpacity onPress={() => navigation.navigate('OffD')}
                                style={{ alignItems: 'center', flex: 1, paddingVertical: 20, backgroundColor: Colors.box, borderRadius: 12 }}>
                                <S53 />
                                <Text style={[style.b16, { color: Colors.secondary, textAlign: 'center', marginTop: 10 }]}>5% Off</Text>
                                <Text style={[style.r12, { color: Colors.txt1, textAlign: 'center' }]}>Amazon</Text>
                                <Text style={[style.r8, { color: '#23D288', textAlign: 'center', marginTop: 5 }]}>Expires: July 10, 2022</Text>
                            </TouchableOpacity>
                        </View>

                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}