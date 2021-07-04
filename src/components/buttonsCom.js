
import React from 'react';
import { StyleSheet, Text, View,  Image } from 'react-native';


const buttonsCom=function (){
    return <View style={style.styleView78}>
                    <Image style={style.imageVio78} source={require('../../assets/buttons/prev.png')}/>
                    <Image style={style.imageVio78} source={require('../../assets/buttons/play.png')}/>
                    <Image style={style.imageVio78} source={require('../../assets/buttons/next.png')}/>

                   
    </View>
}


const style=StyleSheet.create({

    styleView78:{
        flexDirection:"row",
        borderColor:"#F5F6FA",
        width:300,
        height:60,
        justifyContent:"space-around",
        marginTop:20
        
    },
    imageVio78:{
        
        width:50,
        height:50
    }
   

});


export default buttonsCom;