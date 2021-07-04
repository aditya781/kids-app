
import React from 'react';
import { StyleSheet, Text, View,  Image } from 'react-native';


const navigationBar=function (){
    return <View style={style.styleView92}>
                    <Image style={style.imageVio92} source={require('../../assets/buttons/menu.png')}/>
                    <Text style={style.textStyle92}>ABCD KIDS</Text>
                    <Image style={style.imageVio192} source={require('../../assets/buttons/dot.png')}/>
                    

                   
    </View>
}


const style=StyleSheet.create({

    styleView92:{
        flexDirection:"row",
       
        width:350,
        height:60,
        justifyContent:"space-around",
        marginTop:30
      
        
    },
    imageVio92:{
        
        width:100,
        height:50,
        marginTop:10
    },
    imageVio192:{
        
        width:20,
        height:20,
        marginTop:22
    },
    textStyle92:{
        marginTop:15,
        color:"#FA4E62",
        fontWeight:"bold",
        fontSize:20
    }
   

});


export default navigationBar;