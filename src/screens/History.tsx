import { View, Text, FlatList, SafeAreaView, Modal, Dimensions, StatusBar, KeyboardAvoidingView, ImageBackground, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native'
import React, { useState, useContext, useRef } from 'react'
import { useNavigation } from '@react-navigation/native'
import style from '../theme/style'
import { Colors } from '../theme/color'
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Avatar } from 'react-native-paper'
import { AppBar, HStack } from '@react-native-material/core';
import S29 from '../../assets/image/s29.svg'
import S30 from '../../assets/image/s30.svg'
import S31 from '../../assets/image/s31.svg'
import S32 from '../../assets/image/s32.svg'
import S33 from '../../assets/image/s33.svg'
import S35 from '../../assets/image/s35.svg'
import S38 from '../../assets/image/s38.svg'
import S40 from '../../assets/image/s40.svg'
import S41 from '../../assets/image/s41.svg'

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function History() {
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
                        title='History'
                        titleStyle={[style.b16, { color: Colors.secondary }]}
                        leading={<View style={[style.icon]}>
                            <Icon name='chevron-back' size={24} color={Colors.secondary} />
                        </View>}
                        trailing={<TouchableOpacity onPress={() => setVisible(true)} >

                            <Modal transparent={true}
                                visible={visible}>
                                <View style={{
                                    flex: 1,
                                    backgroundColor: '#000000aa',
                                    transparent: 'true'
                                }}>
                                    <TouchableOpacity onPress={() => setVisible(false)}
                                    style={{ backgroundColor: 'transparent', justifyContent: 'center', flex: 1 }}>
                                        <View style={{ paddingHorizontal: 25, paddingVertical: 40, backgroundColor: Colors.bg, borderColor: '#3D0CFF', borderWidth: 1, borderRadius: 36, width: width - 40, alignSelf: 'center' }}>
                                            <Text style={[style.subtitle, { color: Colors.secondary, textAlign: 'center' }]}>Filter</Text>
                                            <View style={{ padding: 15, backgroundColor: '#1B183E', borderRadius: 12, marginVertical: 15, flexDirection: 'row', alignItems: 'center' }}>
                                                <Text style={[style.b12, { color: '#23D288', flex: 1, textAlign: 'right' }]}>Fab 01/2020</Text>
                                                <Icon name='chevron-forward' size={24} color='#23D288' style={{ marginHorizontal: 5 }} />
                                                <Text style={[style.b12, { color: '#23D288', flex: 1 }]}>April 15/2021</Text>
                                            </View>
                                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                                <View style={{ height: 20, width: 20, backgroundColor: '#1B183E', borderRadius: 6 }}></View>
                                                <Text style={[style.b12, { color: Colors.secondary ,marginLeft:10}]}>Spent</Text>
                                                <View style={{marginLeft:20, height: 20, width: 20,justifyContent:'center',alignItems:'center', backgroundColor: '#1B183E', borderRadius: 6 }}>
                                                <Icons name='check-bold' size={16} color='#23D288'  />
                                                </View>
                                                <Text style={[style.b12, { color: Colors.secondary ,marginLeft:10}]}>Received</Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </Modal>

                            <Icons name='filter-outline' size={24} color={Colors.secondary} />
                        </TouchableOpacity>}
                    />
                    <View style={[style.inputContainer, { marginTop: 15 }]}>
                        <Icon name='search-outline' size={24} color={Colors.secondary} />
                        <TextInput placeholder='Search' placeholderTextColor={Colors.secondary}
                            selectionColor={Colors.primary}
                            style={[style.r14, { color: Colors.secondary, flex: 1, marginBottom: Platform.OS === 'ios' ? -2 : -8,marginLeft:10 }]}
                        />
                    </View>
                    <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 10 }}>

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
                            <S40 />
                            <View style={{ marginLeft: 18, flex: 1 }}>
                                <Text style={[style.r14, { color: Colors.secondary }]}>Spotify Premium</Text>
                                <Text style={[style.r10, { color: Colors.secondary }]}>08 Mar 2021</Text>
                            </View>
                            <View style={{ alignItems: 'flex-end' }}>
                                <Text style={[style.b12, { color: Colors.red }]}>20.00$</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={[style.r10, { color: Colors.secondary }]}>Wallet</Text>
                                </View>
                            </View>
                        </View>

                        <View style={{ padding: 15, backgroundColor: '#1B183E', marginTop: 15, borderRadius: 12, flexDirection: 'row', alignItems: 'center' }}>
                            <S35 />
                            <View style={{ marginLeft: 18, flex: 1 }}>
                                <Text style={[style.r14, { color: Colors.secondary }]}>Reya Grifee</Text>
                                <Text style={[style.r10, { color: Colors.secondary }]}>15 Feb 2021</Text>
                            </View>
                            <View style={{ alignItems: 'flex-end' }}>
                                <Text style={[style.b12, { color: Colors.green }]}>420.08$</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={[style.r10, { color: Colors.secondary }]}>Wallet</Text>
                                </View>
                            </View>
                        </View>

                        <View style={{ padding: 15, backgroundColor: '#1B183E', marginTop: 15, borderRadius: 12, flexDirection: 'row', alignItems: 'center' }}>
                            <S33 />
                            <View style={{ marginLeft: 18, flex: 1 }}>
                                <Text style={[style.r14, { color: Colors.secondary }]}>Paid for Netflix</Text>
                                <Text style={[style.r10, { color: Colors.secondary }]}>08 Mar 2021</Text>
                            </View>
                            <View style={{ alignItems: 'flex-end' }}>
                                <Text style={[style.b12, { color: Colors.red }]}>146.00$</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={[style.r10, { color: Colors.secondary }]}>Bank</Text>
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
                                <Text style={[style.b12, { color: Colors.red }]}>420.00$</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={[style.r10, { color: Colors.secondary }]}>Wallet</Text>
                                </View>
                            </View>
                        </View>

                        <View style={{ padding: 15, backgroundColor: '#1B183E', marginTop: 15, borderRadius: 12, flexDirection: 'row', alignItems: 'center' }}>
                            <Avatar.Image source={require('../../assets/image/s39.png')} size={45} style={{ backgroundColor: '#1B183E' }} />
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
                                <Text style={[style.r14, { color: Colors.secondary }]}>Spotify</Text>
                                <Text style={[style.r10, { color: Colors.secondary }]}>28 Feb 2021</Text>
                            </View>
                            <View style={{ alignItems: 'flex-end' }}>
                                <Text style={[style.b12, { color: Colors.red }]}>12.00$</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={[style.r10, { color: Colors.secondary }]}>Credit card</Text>
                                </View>
                            </View>
                        </View>

                        <View style={{ padding: 15, marginBottom: 40, backgroundColor: '#1B183E', marginTop: 15, borderRadius: 12, flexDirection: 'row', alignItems: 'center' }}>
                            <S41 />
                            <View style={{ marginLeft: 18, flex: 1 }}>
                                <Text style={[style.r14, { color: Colors.secondary }]}>Grocery Store </Text>
                                <Text style={[style.r10, { color: Colors.secondary }]}>08 Mar 2021</Text>
                            </View>
                            <View style={{ alignItems: 'flex-end' }}>
                                <Text style={[style.b12, { color: Colors.red }]}>420.00$</Text>
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