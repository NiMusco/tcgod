import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "./color";

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default StyleSheet.create({
    area: {
        flex: 1,
        backgroundColor: Colors.bg
    },
    main: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: Colors.bg,
    },
    title: {
        fontSize: 30,
        color: Colors.secondary,
        fontFamily: 'Poppins-Bold'
    },
    apptitle: {
        fontSize: 24,
        color: Colors.secondary,
        fontFamily: 'Poppins-Bold',
        marginLeft: 18
    },
    subtitle: {
        fontSize: 20,
        fontFamily: 'Poppins-Bold',
        color: Colors.secondary,
    },

    // b24: {
    //     fontSize: 24,
    //     fontFamily: 'Poppins-Bold',
    //     color: Colors.secondary,
    // },
    s26: {
        fontSize: 26,
        fontFamily: 'Poppins-SemiBold',
        color: Colors.secondary,
    },
    r20: {
        fontSize: 20,
        fontFamily: 'Poppins-Regular',
        color: Colors.secondary,
    },

    r8: {
        fontSize: 8,
        fontFamily: 'Poppins-Regular',
        color: Colors.active,
    },
    r10: {
        fontSize: 10,
        fontFamily: 'Poppins-Regular',
        color: Colors.active,
    },
    m10: {
        fontSize: 10,
        fontFamily: 'Poppins-Medium',
        color: Colors.active,
    },
    m11: {
        fontSize: 11,
        fontFamily: 'Poppins-Medium',
        color: Colors.active,
    },

    r12: {
        fontSize: 12,
        fontFamily: 'Poppins-Regular',
        color: Colors.active,
    },
    m12: {
        fontSize: 12,
        fontFamily: 'Poppins-Medium',
        color: Colors.active,
    },
    b12: {
        fontSize: 12,
        fontFamily: 'Poppins-Bold',
        color: Colors.active,
    },
    s12: {
        fontSize: 12,
        fontFamily: 'Poppins-SemiBold',
        color: Colors.active,
    },

    r13: {
        fontSize: 13,
        fontFamily: 'Poppins-Regular',
        color: Colors.active,
    },
    m13: {
        fontSize: 13,
        fontFamily: 'Poppins-Medium',
        color: Colors.active,
    },
    b13: {
        fontSize: 13,
        fontFamily: 'Poppins-Bold',
        color: Colors.active,
    },
    s13: {
        fontSize: 13,
        fontFamily: 'Poppins-SemiBold',
        color: Colors.active,
    },

    r14: {
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
        color: Colors.active,
    },
    m14: {
        fontSize: 14,
        fontFamily: 'Poppins-Medium',
        color: Colors.active,
    },
    b14: {
        fontSize: 14,
        fontFamily: 'Poppins-Bold',
        color: Colors.active,
    },
    s14: {
        fontSize: 14,
        fontFamily: 'Poppins-SemiBold',
        color: Colors.active,
    },

    r15: {
        fontSize: 15,
        fontFamily: 'Poppins-Regular',
        color: Colors.active,
    },
    m15: {
        fontSize: 15,
        fontFamily: 'Poppins-Medium',
        color: Colors.active,
    },
    b15: {
        fontSize: 15,
        fontFamily: 'Poppins-Bold',
        color: Colors.active,
    },
    s15: {
        fontSize: 15,
        fontFamily: 'Poppins-SemiBold',
        color: Colors.active,
    },

    r16: {
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
        color: Colors.active,
    },
    m16: {
        fontSize: 16,
        fontFamily: 'Poppins-Medium',
        color: Colors.active,
    },
    b16: {
        fontSize: 16,
        fontFamily: 'Poppins-Bold',
        color: Colors.active,
    },
    s16: {
        fontSize: 16,
        fontFamily: 'Poppins-SemiBold',
        color: Colors.active,
    },

    r17: {
        fontSize: 17,
        fontFamily: 'Poppins-Regular',
        color: Colors.active,
    },
    m17: {
        fontSize: 17,
        fontFamily: 'Poppins-Medium',
        color: Colors.active,
    },
    b17: {
        fontSize: 17,
        fontFamily: 'Poppins-Bold',
        color: Colors.active,
    },
    s17: {
        fontSize: 17,
        fontFamily: 'Poppins-SemiBold',
        color: Colors.active,
    },

    r18: {
        fontSize: 18,
        fontFamily: 'Poppins-Regular',
        color: Colors.active,
    },
    m18: {
        fontSize: 18,
        fontFamily: 'Poppins-Medium',
        color: Colors.active,
    },
    b18: {
        fontSize: 18,
        fontFamily: 'Poppins-Bold',
        color: Colors.active,
    },
    s18: {
        fontSize: 18,
        fontFamily: 'Poppins-SemiBold',
        color: Colors.active,
    },


    modalcontainer: {
        flex: 1,
        borderRadius: 20,
        paddingHorizontal: 10,
        // marginVertical: 140,
        paddingTop: 20,
        marginHorizontal: -10,
        alignSelf: 'center',
    },

    btn: {
        backgroundColor: Colors.primary,
        alignItems: 'center',
        height: 58,
        borderRadius: 24,
        justifyContent: 'center'
    },
    btn2: {
        backgroundColor: '#EAE6FF',
        alignItems: 'center',
        height: 58,
        borderRadius: 24,
        justifyContent: 'center'
    },
    btntxt: {
        fontSize: 16,
        color: Colors.secondary,
        fontFamily: 'Poppins-Bold',
    },
    btnoutline: {
        alignItems: 'center',
        height: 58,
        borderRadius: 24,
        justifyContent: 'center',
        borderColor: Colors.secondary,
        borderWidth: 1,

    },
    inputContainer: {
        paddingHorizontal: 10,
        height: 44,
        // paddingBottom: 3,
        alignItems: 'center',
        flexDirection: 'row',
        borderWidth: 1,
        backgroundColor: '#1B183E',
        borderColor:'#3B3759',
        borderRadius:12
    },
    txtinput: {
        alignItems: 'center',
        flexDirection: 'row',
        paddingBottom: 5,
        height: 65,
        borderBottomWidth: 1,
        borderBottomColor: '#FFFFFF37'
    },

    indicator: {
        borderColor: '#00133D',
        height: 8,
        width: 8,
        borderRadius: 5,
        backgroundColor: '#FFFFFF',
        marginHorizontal: 5
    },


    shadow: {
        shadowColor: Colors.active,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 5,
        backgroundColor: Colors.bg,

    },

    divider: {
        height: 1,
        backgroundColor: Colors.border,
    },

    divider1: {
        height: 1.5,
        backgroundColor: Colors.border,
        marginTop: 20,
        marginBottom: 20,
        flex: 1
    },

    dividertxt: {
        color: Colors.disable,
        fontFamily: 'Poppins-Regular'
    },

    verticaldivider: {
        height: '60%',
        width: 1,
    },

    modalcontainer: {
        flex: 1,
        borderRadius: 20,
        paddingHorizontal: 10,
        marginVertical: 140,
        paddingTop: 20,
        marginHorizontal: -10,
        alignSelf: 'center',
    },

    follow: {
        paddingVertical: 10, borderRadius: 6, backgroundColor: Colors.primary, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 15
    },
    following: {
        paddingVertical: 10, borderRadius: 6, backgroundColor: Colors.bg1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 15
    },
    follow1: {
        height: 64, width: 64, borderRadius: 32, justifyContent: 'center', alignItems: 'center', backgroundColor: Colors.primary
    },
    following1: {
        height: 64, width: 64, borderRadius: 32, justifyContent: 'center', alignItems: 'center', borderColor: '#97979720', borderWidth: 1, backgroundColor: '#F8F8F8'
    },
    bord2: {
        height: 24, width: 24, borderRadius: 12, borderColor: Colors.bord2, borderWidth: 1, justifyContent: 'center', alignItems: 'center'
    },
    categoryTextSelected: {
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 20,
        borderWidth: 0,
        backgroundColor: Colors.primary,
        borderColor: Colors.primary,
        color: Colors.secondary,
        fontFamily: 'Poppins-Regular'
    },
    categoryText: {
        fontSize: 12,
        color: Colors.primary,
        borderWidth: 0,
        borderColor: Colors.primary,
        borderRadius: 20,
        paddingBottom: 5,
        paddingTop: 7,
        paddingHorizontal: 15,
        marginHorizontal: 5,
        fontFamily: 'Poppins-Regular'
    },
    categorycontainer: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 0,
        justifyContent: 'space-between',
    },
    wrapper: {},

    icon: {
        height: 38, width: 38, borderRadius: 12, backgroundColor: '#1B183E',
        justifyContent: 'center', alignItems: 'center'
    },

}
);