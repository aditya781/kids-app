
import React from 'react';
import { StyleSheet, Text, View,  Image } from 'react-native';


const birdCom=function (props){
    return <View style={style.styleView}>
                    <View>
                         <Image style={style.imageVio} source={props.image}/>
                         <Text style={{marginTop:100, marginHorizontal:100 , fontSize:20, fontWeight:"bold"}}>{props.name}</Text>
                    </View>

                   
    </View>
}


const style=StyleSheet.create({

    styleView:{
        borderColor:"black",
        width:300,
        height:500,
        borderRadius:20,
        alignItems:"center",
        borderWidth:3
        
    },
    imageVio:{
        
        width:210,
        height:270,
        marginTop:60
    }
   

});


export default birdCom;