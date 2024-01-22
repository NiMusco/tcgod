import { View, Text, FlatList, SafeAreaView, Modal, Dimensions, KeyboardAvoidingView, TouchableOpacity, Image, ScrollView, ImageBackground, StatusBar, TextInput } from 'react-native'
import React, { useState, useContext, } from 'react'
import { useNavigation } from '@react-navigation/native'
import style from '../theme/style'
import { Colors } from '../theme/color'
import { Avatar } from 'react-native-paper'
import { AppBar, HStack } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Language() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.bg }]}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : null}>
                <StatusBar backgroundColor={Colors.box} translucent={true}></StatusBar>
                <View style={[style.main, { backgroundColor: Colors.bg, marginTop: Platform.OS === 'ios' ? 10 : 30 }]}>

                    <AppBar
                        centerTitle={true}
                        title='Language'
                        titleStyle={[style.b16, { color: Colors.secondary }]}
                        style={{ backgroundColor: 'transparent', }}
                        elevation={0}
                        leading={<TouchableOpacity onPress={() => navigation.goBack()} style={[style.icon, { backgroundColor: Colors.box }]}>
                            <Icon name='chevron-back' size={24} color={Colors.secondary}></Icon>
                        </TouchableOpacity>}
                    />

                    <View style={[style.inputContainer,{marginTop:20}]}>
                        <Icon name='search' size={20} color={Colors.secondary}></Icon>
                        <View style={{ flex: 1, marginLeft: 10 }}>
                            <TextInput placeholder='Search'
                                selectionColor={Colors.primary}
                                placeholderTextColor={Colors.txt}
                                style={[style.r16, { color: Colors.txt, height: 44, paddingBottom: Platform.OS === 'ios' ? -20 : -20, marginTop: Platform.OS === 'ios' ? -3 : -7}]}
                            />
                        </View>
                    </View>

                    <ScrollView showsVerticalScrollIndicator={false} style={{marginTop:20}}>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={require('../../assets/image/s54.png')} resizeMode='stretch' style={{height:21,width:28}}/>
                            <Text style={[style.s14,{color:Colors.secondary,marginLeft:10,flex:1}]}>English United Kingdom</Text>
                        </View>
                        <View style={[style.divider,{backgroundColor:'#F3F3F310',marginVertical:15}]}></View>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={require('../../assets/image/s55.png')} resizeMode='stretch' style={{height:21,width:28}}/>
                            <Text style={[style.s14,{color:Colors.secondary,marginLeft:10,flex:1}]}>English India</Text>
                        </View>
                        <View style={[style.divider,{backgroundColor:'#F3F3F310',marginVertical:15}]}></View>

                        <Text style={[style.s16,{color:Colors.disable,marginTop:10}]}>All Language</Text>

                        <View style={{ flexDirection: 'row', alignItems: 'center' ,marginTop:20}}>
                            <Image source={require('../../assets/image/s56.png')} resizeMode='stretch' style={{height:21,width:28}}/>
                            <Text style={[style.s14,{color:Colors.secondary,marginLeft:10,flex:1}]}>Armenia</Text>
                        </View>
                        <View style={[style.divider,{backgroundColor:'#F3F3F310',marginVertical:15}]}></View>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={require('../../assets/image/s57.png')} resizeMode='stretch' style={{height:21,width:28}}/>
                            <Text style={[style.s14,{color:Colors.secondary,marginLeft:10,flex:1}]}>Albania</Text>
                        </View>
                        <View style={[style.divider,{backgroundColor:'#F3F3F310',marginVertical:15}]}></View>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={require('../../assets/image/s58.png')} resizeMode='stretch' style={{height:21,width:28}}/>
                            <Text style={[style.s14,{color:Colors.secondary,marginLeft:10,flex:1}]}>Andorra</Text>
                        </View>
                        <View style={[style.divider,{backgroundColor:'#F3F3F310',marginVertical:15}]}></View>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={require('../../assets/image/s59.png')} resizeMode='stretch' style={{height:21,width:28}}/>
                            <Text style={[style.s14,{color:Colors.secondary,marginLeft:10,flex:1}]}>AE United Arab</Text>
                        </View>
                        <View style={[style.divider,{backgroundColor:'#F3F3F310',marginVertical:15}]}></View>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={require('../../assets/image/s60.png')} resizeMode='stretch' style={{height:21,width:28}}/>
                            <Text style={[style.s14,{color:Colors.secondary,marginLeft:10,flex:1}]}>Afghanistan</Text>
                        </View>
                        <View style={[style.divider,{backgroundColor:'#F3F3F310',marginVertical:15}]}></View>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={require('../../assets/image/s61.png')} resizeMode='stretch' style={{height:21,width:28}}/>
                            <Text style={[style.s14,{color:Colors.secondary,marginLeft:10,flex:1}]}>Anguilla</Text>
                        </View>
                        <View style={[style.divider,{backgroundColor:'#F3F3F310',marginVertical:15}]}></View>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={require('../../assets/image/s62.png')} resizeMode='stretch' style={{height:21,width:28}}/>
                            <Text style={[style.s14,{color:Colors.secondary,marginLeft:10,flex:1}]}>Angola</Text>
                        </View>
                        <View style={[style.divider,{backgroundColor:'#F3F3F310',marginVertical:15}]}></View>

                        <View style={{ flexDirection: 'row', alignItems: 'center',marginBottom:20 }}>
                            <Image source={require('../../assets/image/s63.png')} resizeMode='stretch' style={{height:21,width:28}}/>
                            <Text style={[style.s14,{color:Colors.secondary,marginLeft:10,flex:1}]}>Argentina</Text>
                        </View>

                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}