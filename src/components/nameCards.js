
import React from 'react';
import { StyleSheet, Text, View,  Image } from 'react-native';


const nameCards=function (props){

   
    return <View style={{
       
        width:320,
        height:70,
        backgroundColor:props.color,
        flexDirection:"row",
        borderRadius:15,
        shadowColor:'black',
        shadowOffset:{ width: 0, height: 3 }, 
        shadowRadius:6,
        elevation:5
        
        
    }}>
                  <Image style={style.imageVio} source={require('../../assets/buttons/circle.png')}/>
                  <Text style={{
                        marginLeft:-35,
                        marginTop:15,
                        fontSize:20,
                        fontWeight:"bold",
                        color:props.color
                    }}>{props.no}</Text>

                  <Text style={style.styleText}>{props.name}</Text>

                   
    </View>
}


const style=StyleSheet.create({

    styleView:{
       
        width:320,
        height:70,
        backgroundColor:"#784EC7",
        flexDirection:"row",
        borderRadius:15,
        shadowColor:'black',
        shadowOffset:{ width: 10, height: 10 }, 
        shadowOpacity:1,
        shadowRadius:3,
        elevation:3
        
        
    },
    imageVio:{
        width:54,
        height:54,
        marginVertical:6,
        marginLeft:10
    },
    styleText:{
        marginLeft:30,
        marginTop:15,
        fontSize:20,
        fontWeight:"bold",
        color:"white"
    },
    styleText1:{
        marginLeft:-35,
        marginTop:15,
        fontSize:20,
        fontWeight:"bold",
        color:"#784EC7"
    }

});


export default nameCards;