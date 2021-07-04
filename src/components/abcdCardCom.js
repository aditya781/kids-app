
import React from 'react';
import { StyleSheet, Text, View,  Image } from 'react-native';



const abcdCardCom=function (){
    return <View style={style.styleView1}>

        <View style={style.styleView}>
            <Text style={style.textStyle} >A</Text>
        </View>

        <View style={style.styleView3}>
            <View style={style.styleView4}>
                <Image style={style.imageVio} source={require('../../assets/abcd/ant.png')}/>
            </View>
            <View style={style.styleView4}>
                <Image style={style.imageVio1} source={require('../../assets/abcd/apple.png')}/>
            </View>
        </View>
                   

                   
    </View>
}


const style=StyleSheet.create({

    styleView:{
       
        borderColor:"black",
        borderRadius:20,
        width:250,
        height:300,
        borderWidth:3,
       marginTop:20,
        backgroundColor:"#784EC7",
        alignItems:"center",
        shadowColor:'black',
        shadowOffset:{ width: 10, height: 10 }, 
        shadowOpacity:1,
        shadowRadius:3,
        elevation:5
        
        
    },
    styleView1:{
        alignItems:"center",
        justifyContent:"space-around"
    },
    imageVio:{
        
        width:150,
        height:150,
        marginLeft:-15,
        marginTop:-10
    },
    imageVio1:{
        
        width:90,
        height:100,
        marginTop:20,
        marginLeft:15
    },
    styleView3:{
        flexDirection:"row",
        width:250,
        justifyContent:"space-between"
    },
    styleView4:{
        width:120,
        height:150,
        borderColor:"black",
        borderWidth:2,
        marginTop:30,
        marginBottom:20,
        backgroundColor:"#78CAEE",
        borderRadius:20,

        shadowColor:'black',
        shadowOffset:{ width: 10, height: 10 }, 
        shadowOpacity:1,
        shadowRadius:3,
        elevation:5
    },
    textStyle:{
        color:"white",
        fontSize:150,
        marginVertical:20
    }
   

});


export default abcdCardCom;