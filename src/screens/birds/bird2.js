import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity ,Image, Dimensions} from 'react-native';

import ButtonsCom from '../../components/buttonsCom';
import NavBar2 from '../../components/navBar2';
import { Audio } from 'expo-av';


const bird2=function ({navigation}){

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
                {/*nav start*/}
                <View style={style.styleView33}>
                            <TouchableOpacity style={{}} activeOpacity={0.8}  onPress={()=>navigation.navigate('BirdsName')}> 
                                <Image style={style.imageVio33} source={require('../../../assets/buttons/back.png')}/>
                            </TouchableOpacity>
                    
                            <Text style={style.textStyle33}>BIRDS</Text>

                            <TouchableOpacity style={{}} activeOpacity={0.8}  onPress={()=>{navigation.navigate('Home')}}> 
                                <Image style={style.imageVio133} source={require('../../../assets/buttons/home.png')}/>
                            </TouchableOpacity>
                    
                   
                </View>
                {/* nav end */}
                <View  style={style.styleView456}>
                                <TouchableOpacity style={{}} activeOpacity={0.8}  onPress={()=>{playSound(require('../../../assets/audios/birds/peacock.mp3'))}}> 
                                                <View  style={style.styleView}>
                                                    
                                                    <View style={style.styleView888}>
                                                        <View style={style.styleView8882}>
                                                            <Image style={style.imageVio888} source={require('../../../assets/birds/peacock.png')}/>
                                                            <Text style={{marginTop:100, marginHorizontal:10 , fontSize:20, fontWeight:"bold"}}>PEACOCK</Text>
                                                        </View>

                                                
                                                    </View>
                                                </View>
                                </TouchableOpacity>
                            

                                <View style={style.styleView}>

                                    {/*start buttonCom */}
                                    <View style={style.styleView78}>
                                        <TouchableOpacity style={{}} activeOpacity={0.8}  onPress={()=>{playSound(require('../../../assets/audios/birds/hen.mp3'));navigation.pop();navigation.navigate('Birds')}}> 
                                            <Image style={style.imageVio78} source={require('../../../assets/buttons/prev.png')}/>
                                        </TouchableOpacity>
                                        <Image style={style.imageVio78} source={require('../../../assets/buttons/play.png')}/>
                                        <TouchableOpacity style={{}} activeOpacity={0.8}  onPress={()=>{playSound(require('../../../assets/audios/birds/parrot.mp3')); navigation.pop();navigation.navigate('Bird3')}}> 
                                            <Image style={style.imageVio78} source={require('../../../assets/buttons/next.png')}/>
                                        </TouchableOpacity>
                                        
                                    </View>
                                    {/*start buttonCom */}
                                    
                                </View>
                </View>
    </View> 

}
let ScreenHeight = Dimensions.get("window").height-90;
const style=StyleSheet.create({
    styleView456:{
        height:ScreenHeight,
        justifyContent:"space-around"
    },
    styleView:{
        flexDirection:"row",
        justifyContent:"space-around",
        paddingTop:20
    },
    styleView888:{
        borderColor:"black",
        width:300,
        height:500,
        borderRadius:20,
        alignItems:"center",
        borderWidth:3
        
    },
    imageVio888:{
        
        width:270,
        height:250,
        marginTop:60
    },
    styleView8882:{
        alignItems:"center"
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
    },













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
 
 
 export default bird2;