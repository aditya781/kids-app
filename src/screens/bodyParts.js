
import React from 'react';
import { StyleSheet, Text, View,  Image ,TouchableOpacity, Dimensions} from 'react-native';
import NavBar2 from '../components/navBar2';
import { Audio } from 'expo-av';

const timePass=function ({navigation}){
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

    
    return <View>
                
                
                    <View style={style.styleView33}>
                            <TouchableOpacity style={{}} activeOpacity={0.8}  onPress={()=>{navigation.pop();navigation.navigate('Home')}}> 
                                <Image style={style.imageVio33} source={require('../../assets/buttons/back.png')}/>
                            </TouchableOpacity>
                    
                            <Text style={style.textStyle33}>BODY PARTS</Text>

                            <TouchableOpacity style={{}} activeOpacity={0.8}  onPress={()=>{navigation.pop();navigation.navigate('Home')}}> 
                                <Image style={style.imageVio133} source={require('../../assets/buttons/home.png')}/>
                            </TouchableOpacity>
                    
                   
                    </View>



                <View style={style.styleView456}>
                        
                 <View style={style.styleView}>
                        <View style={style.styleView1}> 
                                <TouchableOpacity style={{}} activeOpacity={1}  onPress={()=>{playSound(require('../../assets/audios/body/hair.mp3'))}}> 
                                            <Image  style={style.imageView} source={require('../../assets/body2/hair.png')}/>
                                </TouchableOpacity>
                                
                        </View>
                        <View style={style.styleView2}>
                                <Image  style={style.imageView1} source={require('../../assets/body2/bb1.png')}/>

                                <TouchableOpacity style={{}} activeOpacity={1}  onPress={()=>{playSound(require('../../assets/audios/body/eyebrow.mp3'))}}> 
                                    <Image  style={style.imageView2} source={require('../../assets/body2/bb2.png')}/>
                                </TouchableOpacity>
                                
                                <Image  style={style.imageView3} source={require('../../assets/body2/bb3.png')}/>
                        </View>

                        <View style={style.styleView2}>
                                <TouchableOpacity style={{}} activeOpacity={1}  onPress={()=>{playSound(require('../../assets/audios/body/ears.mp3'))}}> 
                                    <Image  style={style.imageView4} source={require('../../assets/body2/bb4.png')}/>
                                </TouchableOpacity>

                                <TouchableOpacity style={{}} activeOpacity={1}  onPress={()=>{playSound(require('../../assets/audios/body/eyes.mp3'))}}> 
                                    <Image  style={style.imageView5} source={require('../../assets/body2/bb5.png')}/>
                                </TouchableOpacity>

                                <TouchableOpacity style={{}} activeOpacity={1}  onPress={()=>{playSound(require('../../assets/audios/body/ears.mp3'))}}> 
                                    <Image  style={style.imageView6} source={require('../../assets/body2/bb6.png')}/>
                                </TouchableOpacity>
                                
                                
                                
                        </View>
                        <View style={style.styleView2}>
                            <Image  style={style.imageView7} source={require('../../assets/body2/bb7.png')}/>

                                <TouchableOpacity style={{}} activeOpacity={1}  onPress={()=>{playSound(require('../../assets/audios/body/nose.mp3'))}}> 
                                    <Image  style={style.imageView8} source={require('../../assets/body2/bb8.png')}/>
                                </TouchableOpacity>

                            <Image  style={style.imageView9} source={require('../../assets/body2/bb9.png')}/>
                        </View>

                        <View style={style.styleView2}>
                            <Image  style={style.imageView10} source={require('../../assets/body2/bb10.png')}/>

                                <TouchableOpacity style={{}} activeOpacity={1}  onPress={()=>{playSound(require('../../assets/audios/body/leap.mp3'))}}> 
                                    <Image  style={style.imageView11} source={require('../../assets/body2/bb11.png')}/>
                                </TouchableOpacity>
                            
                            <Image  style={style.imageView12} source={require('../../assets/body2/bb12.png')}/>
                        </View>
                        <View style={style.styleView2}>

                                <TouchableOpacity style={{}} activeOpacity={1}  onPress={()=>{playSound(require('../../assets/audios/body/hand.mp3'))}}> 
                                    <Image  style={style.imageView13} source={require('../../assets/body2/bb13.png')}/>
                                </TouchableOpacity>
                            
                                <Image  style={style.imageView14} source={require('../../assets/body2/bb14.png')}/>

                                <TouchableOpacity style={{}} activeOpacity={1}  onPress={()=>{playSound(require('../../assets/audios/body/hand.mp3'))}}> 
                                    <Image  style={style.imageView15} source={require('../../assets/body2/bb15.png')}/>
                                </TouchableOpacity>
                           
                        </View>

                        <View style={style.styleView2}>

                                <TouchableOpacity style={{}} activeOpacity={1}  onPress={()=>{playSound(require('../../assets/audios/body/leg.mp3'))}}> 
                                    <Image  style={style.imageView16} source={require('../../assets/body2/bb16.png')}/>
                                </TouchableOpacity>
                           
                          
                        </View>
                 </View>

                    </View>
                
                  
    </View>
}

let ScreenHeight = Dimensions.get("window").height-90;


const style=StyleSheet.create({ 
    styleView456:{
        justifyContent:"space-around",
        height:ScreenHeight
    },
    styleView:{
        alignItems:"center",
        marginTop:40
    },
    styleView1:{
       
    },
    styleView2:{
        flexDirection:"row"
    },
    imageView:{
        width:308,
        height:86
    },
    imageView1:{
        width:97,
        height:35
    },
    imageView2:{
        width:114,
        height:35
    },
    imageView3:{
        width:97,
        height:35
    },
    imageView4:{
        width:86,
        height:35
    },
    imageView5:{
        width:136,
        height:35
    },
    imageView6:{
        width:86,
        height:35
    },
    imageView7:{
        width:135,
        height:18
    },
    imageView8:{
        width:38,
        height:18
    },
    imageView9:{
        width:135,
        height:18
    },
    imageView10:{
        width:124,
        height:32
    },
    imageView11:{
        width:58,
        height:32
    },
    imageView12:{
        width:125,
        height:32
    },
    imageView13:{
        width:112,
        height:169
    },
    imageView14:{
        width:84,
        height:169
    },
    imageView15:{
        width:112,
        height:169
    },
    imageView16:{
        width:308,
        height:135
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


export default timePass;