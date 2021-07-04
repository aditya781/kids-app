import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity ,Image,Alert} from 'react-native';


const timepass=()=>{
    return <View>
        <View style={style.styleView}>
             <Image style={style.imageVi} source={require('../../assets/buttons/back.png')}/>
             <Text style={style.textst}>SETTINGS</Text>
             <Text></Text>
        </View>
        <View style={style.styleView52}>
            <Image style={style.imageVi1} source={require('../../assets/buttons/feedback.png')}/>
            <Text style={style.textst1}>FEEDBACK</Text>
        </View>
        <View style={style.styleView52}>
            <Image style={style.imageVi1} source={require('../../assets/buttons/privacy.png')}/>
            <Text style={style.textst1}>PRIVACY POLICY</Text>
        </View>

        
    </View>
}

const style=StyleSheet.create({
    styleView:{
        alignItems:"center",
        marginTop:40,
        flexDirection:"row",
        justifyContent:"space-around"
    },
    imageVi:{
        width:20,
        height:20
    },
    textst:{
        fontSize:20,
        fontWeight:"bold",
        marginLeft:40
    },
    imageVi1:{
        width:20,
        height:20,
        marginLeft:15
    },
    textst1:{
        fontSize:15,
        fontWeight:"bold",
        marginLeft:30,
        color:"#FF5756"
    },
    styleView52:{
        alignItems:"center",
        marginTop:10,
        flexDirection:"row",
        justifyContent:"flex-start",
        padding:20
    }
})


export default timepass;