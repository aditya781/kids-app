
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';



const lesson5=function (){

    
    return <View style={style.viewStyle}>
                <View style={style.viewStyle1}>
                    <Image style={style.imageVio} source={require('../../assets/homeI/green.png')}/>
                </View>

                <View style={style.viewStyle1}>
                    <View style={style.viewStyle2}><Text style={style.lessonT}>LESSON-05</Text></View>
                    <View style={style.viewStyle3}><Text style={style.alpha}>Body Parts</Text></View>
                    <View><Image style={style.arr} source={require('../../assets/homeI/arrG.png')}/></View>
                </View>

                
    </View>
}


const style=StyleSheet.create({

    viewStyle :{
        
        borderRadius:20,
        height:150,
        width:320,
        backgroundColor:"#A7DA3F",
        flexDirection:'row',
        shadowColor:'black',
        shadowOffset:{ width: 0, height: 3 }, 
        shadowRadius:6,
        elevation:5
    },
    viewStyle1 :{
        height:150,
        width:150
    },
    imageVio:{
        borderColor:"white",
        borderWidth:3,
        width:110,
        height:110,
        borderRadius:15,
        marginVertical:20,
        marginLeft:20
    },
    viewStyle2 :{
        height:30,
        width:130,
        borderColor:"white",
        borderRadius:15,
        borderWidth:3,
        backgroundColor:"white",
        marginTop:20
    },
    lessonT:{
        textAlign:"center",
        color:"#A7DA3F",
        fontWeight:"bold"
    },
    viewStyle3:{
        marginTop:10
    },
    alpha:{
        color:"white",
        fontWeight:"bold",
        fontSize:20
    },
    arr:{
        width:50,
        height:50,
        marginLeft:100
    }

});


export default lesson5;