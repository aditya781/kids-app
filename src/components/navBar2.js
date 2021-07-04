
import React from 'react';
import { StyleSheet, Text, View,  Image } from 'react-native';


const navBar2=function (){
    return <View style={style.styleView}>
                    <Image style={style.imageVio} source={require('../../assets/buttons/back.png')}/>
                    <Text style={style.textStyle}> ALPHABETS</Text>
                    <Image style={style.imageVio1} source={require('../../assets/buttons/home.png')}/>
                    

                   
    </View>
}


const style=StyleSheet.create({

    styleView:{
        flexDirection:"row",
       
        
        justifyContent:"space-around",
        marginTop:30,
        alignItems:"center",
        
      
        
    },
    imageVio:{
        
        width:20,
        height:20,
        marginTop:15
    },
    imageVio1:{
        
        width:20,
        height:20,
        marginTop:15
    },
    textStyle:{
        marginTop:10,
        color:"#FA4E62",
        fontWeight:"bold",
        fontSize:20
    }
   

});


export default navBar2;