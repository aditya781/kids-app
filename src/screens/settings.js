
import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity ,Image, Linking, Dimensions, Alert} from 'react-native';

const ScreenHeight = Dimensions.get("window").height;
let ScreenWidth = Dimensions.get("window").width;
const message="mailto:abcdKids58@gmail.com?subject=Feedback&body=Screen Height  "+ScreenHeight+"\nScreen Width   "+ScreenWidth+"\n...............\nWrite your Name and Feedback here.\n...............\n\nName : \nFeedback : "
console.log(message)



const settings=({navigation})=>{

    const openUrl = async (url)=>{
        const isSupported= await Linking.canOpenURL(url);
        if(isSupported){
            await Linking.openURL(url);
        }else{
            Alert.alert("Not Opening.." ,"Your device didn't has Gmail.")
        }
    }

    return <View>
        <View style={style.styleView}>
                    <TouchableOpacity style={{}} activeOpacity={0.8}  onPress={()=>{navigation.pop();navigation.navigate('Home')}}> 
                        <Image style={style.imageVi} source={require('../../assets/buttons/back.png')}/>                       
                    </TouchableOpacity> 
            
             <Text style={style.textst}>SETTINGS</Text>
             <Text></Text>
        </View>
        
        <View style={style.styleView86}>
                    <TouchableOpacity style={{}} activeOpacity={0.8}  onPress={()=>openUrl(message)}> 
                        <View style={style.styleView52}>
                                <Image style={style.imageVi1} source={require('../../assets/buttons/feedback.png')}/>
                                <Text style={style.textst1}>FEEDBACK</Text>
                        </View>                 
                    </TouchableOpacity>

                    <TouchableOpacity style={{}} activeOpacity={0.8}  onPress={()=>{navigation.navigate('Privacy')}}> 
                        <View style={style.styleView52}>
                            <Image style={style.imageVi1} source={require('../../assets/buttons/privacy.png')}/>
                            <Text style={style.textst1}>PRIVACY POLICY</Text>
                        </View>                 
                    </TouchableOpacity>
                    
                    
        </View>
        
    </View>
}

const style=StyleSheet.create({
    styleView86:{
        alignItems:"center"
    },
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
        padding:20,
        width:350
    }
})


export default settings;