import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity,Image , Dimensions} from 'react-native';

import BirdCom from '../components/birdCom';
import ButtonsCom from '../components/buttonsCom';
import NavBar2 from '../components/navBar2';
import { Audio } from 'expo-av';

const numbers=function ({navigation}){

    const [sound, setSound] = React.useState();


    async function playSound(para) {
      console.log('Loading Sound');
      const { sound } = await Audio.Sound.createAsync(
         para
      );
      setSound(sound);
    
      console.log('Playing Sound');
      await sound.playAsync(); }
    
    React.useEffect(() => {
      return sound
        ? () => {
            console.log('Unloading Sound');
            sound.unloadAsync(); }
        : undefined;
    }, [sound]);
    

    return <View >  


                 <View style={style.styleView33}>
                            <TouchableOpacity style={{}} activeOpacity={0.8}  onPress={()=>{navigation.pop();navigation.navigate('Home')}}> 
                                <Image style={style.imageVio33} source={require('../../assets/buttons/back.png')}/>
                            </TouchableOpacity>
                    
                            <Text style={style.textStyle33}>NUMBERS</Text>

                            <TouchableOpacity style={{}} activeOpacity={0.8}  onPress={()=>{navigation.pop();navigation.navigate('Home')}}> 
                                <Image style={style.imageVio133} source={require('../../assets/buttons/home.png')}/>
                            </TouchableOpacity>
                    
                   
                </View>







                <View  style={style.styleView}>
                    <View style={style.styleView1}>
                            <TouchableOpacity style={{}} activeOpacity={0.8}  onPress={()=>{playSound(require('../../assets/audios/numbers/1.mp3'))}}> 
                                <View style={style.styleView2}><Text style={style.textStyle}>1</Text></View>
                            </TouchableOpacity>

                            <TouchableOpacity style={{}} activeOpacity={0.8}  onPress={()=>{playSound(require('../../assets/audios/numbers/2.mp3'))}}> 
                                <View style={style.styleView2}><Text style={style.textStyle}>2</Text></View>
                            </TouchableOpacity>

                            <TouchableOpacity style={{}} activeOpacity={0.8}  onPress={()=>{playSound(require('../../assets/audios/numbers/3.mp3'))}}> 
                                <View style={style.styleView2}><Text style={style.textStyle}>3</Text></View>
                            </TouchableOpacity>

                            <TouchableOpacity style={{}} activeOpacity={0.8}  onPress={()=>{playSound(require('../../assets/audios/numbers/4.mp3'))}}> 
                                <View style={style.styleView2}><Text style={style.textStyle}>4</Text></View>
                            </TouchableOpacity>

                            
                
                            
                    </View>
                    <View style={style.styleView1}>
                            <TouchableOpacity style={{}} activeOpacity={0.8}  onPress={()=>{playSound(require('../../assets/audios/numbers/5.mp3'))}}> 
                                <View style={style.styleView2}><Text style={style.textStyle}>5</Text></View>
                            </TouchableOpacity>

                            <TouchableOpacity style={{}} activeOpacity={0.8}  onPress={()=>{playSound(require('../../assets/audios/numbers/6.mp3'))}}> 
                                <View style={style.styleView2}><Text style={style.textStyle}>6</Text></View>
                            </TouchableOpacity>

                            <TouchableOpacity style={{}} activeOpacity={0.8}  onPress={()=>{playSound(require('../../assets/audios/numbers/7.mp3'))}}> 
                                <View style={style.styleView2}><Text style={style.textStyle}>7</Text></View>
                            </TouchableOpacity>

                            <TouchableOpacity style={{}} activeOpacity={0.8}  onPress={()=>{playSound(require('../../assets/audios/numbers/8.mp3'))}}> 
                                <View style={style.styleView2}><Text style={style.textStyle}>8</Text></View>
                            </TouchableOpacity>


                            
                    </View>
                    <View style={style.styleView1}>
                            <TouchableOpacity style={{}} activeOpacity={0.8}  onPress={()=>{playSound(require('../../assets/audios/numbers/9.mp3'))}}> 
                                <View style={style.styleView2}><Text style={style.textStyle}>9</Text></View>
                            </TouchableOpacity>

                            <TouchableOpacity style={{}} activeOpacity={0.8}  onPress={()=>{playSound(require('../../assets/audios/numbers/10.mp3'))}}> 
                                <View style={style.styleView2}><Text style={style.textStyle}>10</Text></View>
                            </TouchableOpacity>

                            <TouchableOpacity style={{}} activeOpacity={0.8}  onPress={()=>{playSound(require('../../assets/audios/numbers/11.mp3'))}}> 
                                <View style={style.styleView2}><Text style={style.textStyle}>11</Text></View>
                            </TouchableOpacity>

                            <TouchableOpacity style={{}} activeOpacity={0.8}  onPress={()=>{playSound(require('../../assets/audios/numbers/12.mp3'))}}> 
                                <View style={style.styleView2}><Text style={style.textStyle}>12</Text></View>
                            </TouchableOpacity>


                
                            
                    </View>
                    <View style={style.styleView1}>
                            <TouchableOpacity style={{}} activeOpacity={0.8}  onPress={()=>{playSound(require('../../assets/audios/numbers/13.mp3'))}}> 
                                <View style={style.styleView2}><Text style={style.textStyle}>13</Text></View>
                            </TouchableOpacity>

                            <TouchableOpacity style={{}} activeOpacity={0.8}  onPress={()=>{playSound(require('../../assets/audios/numbers/14.mp3'))}}> 
                                <View style={style.styleView2}><Text style={style.textStyle}>14</Text></View>
                            </TouchableOpacity>

                            <TouchableOpacity style={{}} activeOpacity={0.8}  onPress={()=>{playSound(require('../../assets/audios/numbers/15.mp3'))}}> 
                                <View style={style.styleView2}><Text style={style.textStyle}>15</Text></View>
                            </TouchableOpacity>

                            <TouchableOpacity style={{}} activeOpacity={0.8}  onPress={()=>{playSound(require('../../assets/audios/numbers/16.mp3'))}}> 
                                <View style={style.styleView2}><Text style={style.textStyle}>16</Text></View>
                            </TouchableOpacity>

                            
                            
                            
                    </View>
                    <View style={style.styleView1}>

                    
                            <TouchableOpacity style={{}} activeOpacity={0.8}  onPress={()=>{playSound(require('../../assets/audios/numbers/17.mp3'))}}> 
                                <View style={style.styleView2}><Text style={style.textStyle}>17</Text></View>
                            </TouchableOpacity>

                            <TouchableOpacity style={{}} activeOpacity={0.8}  onPress={()=>{playSound(require('../../assets/audios/numbers/18.mp3'))}}> 
                                <View style={style.styleView2}><Text style={style.textStyle}>18</Text></View>
                            </TouchableOpacity>

                            <TouchableOpacity style={{}} activeOpacity={0.8}  onPress={()=>{playSound(require('../../assets/audios/numbers/19.mp3'))}}> 
                                <View style={style.styleView2}><Text style={style.textStyle}>19</Text></View>
                            </TouchableOpacity>

                            <TouchableOpacity style={{}} activeOpacity={0.8}  onPress={()=>{playSound(require('../../assets/audios/numbers/20.mp3'))}}> 
                                <View style={style.styleView2}><Text style={style.textStyle}>20</Text></View>
                            </TouchableOpacity>

                            
                            
                    </View>
                    
                    
                </View>
               
    </View> 

}

let ScreenHeight = Dimensions.get("window").height-90;

const style=StyleSheet.create({

    styleView:{
        justifyContent:"space-around",
        height:ScreenHeight
      
    },
    styleView1:{
        flexDirection:"row",
        justifyContent:"space-around",
        marginTop:10
    },
    styleView2:{
        width:60,
        height:60,
        borderWidth:3,
        borderColor:"#784EC7",
        alignItems:"center",
        backgroundColor:"#FFDE1D",
        
        shadowColor:'black',
        shadowOffset:{ width: 10, height: 10 }, 
        shadowOpacity:1,
        shadowRadius:3,
        elevation:3,
        borderRadius:10

    },
    textStyle:{
        marginTop:4,
        fontWeight:"bold",
        fontSize:30
    },







    styleView33:{
        flexDirection:"row",
       
        
        justifyContent:"space-around",
        marginTop:30,
        alignItems:"center",
        
      
        
    },
    imageVio33:{
        
        width:20,
        height:20,
        marginTop:15
    },
    imageVio133:{
        
        width:20,
        height:20,
        marginTop:15
    },
    textStyle33:{
        marginTop:10,
        color:"#FA4E62",
        fontWeight:"bold",
        fontSize:20
    }
   
 
 
 });
 
 
 export default numbers;