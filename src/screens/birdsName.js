import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity , Image,Dimensions} from 'react-native';

import NameCards from '../components/nameCards';
import NavBar2 from '../components/navBar2';
import { Audio } from 'expo-av';


const birdsName=function ({navigation}){

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

    
    return <View style={style.styleView3389}>
       
                <View style={style.styleView33}>
                            <TouchableOpacity style={{}} activeOpacity={0.8}  onPress={()=>{navigation.pop();navigation.navigate('Home')}}> 
                                <Image style={style.imageVio33} source={require('../../assets/buttons/back.png')}/>
                            </TouchableOpacity>
                    
                            <Text style={style.textStyle33}>BIRDS</Text>

                            <TouchableOpacity style={{}} activeOpacity={0.8}  onPress={()=>{navigation.pop();navigation.navigate('Home')}}> 
                                <Image style={style.imageVio133} source={require('../../assets/buttons/home.png')}/>
                            </TouchableOpacity>
                    
                   
                </View>


                <ScrollView>

            <View style={style.styleView} >

                   

                    <TouchableOpacity style={{}} activeOpacity={0.8}  onPress={()=>{playSound(require('../../assets/audios/birds/hen.mp3'));navigation.navigate('Birds')}}> 
                         <NameCards no="1." color="#784EC7" name="HEN"/>
                    </TouchableOpacity>

                    <TouchableOpacity style={{}} activeOpacity={0.8}  onPress={()=>{playSound(require('../../assets/audios/birds/peacock.mp3'));navigation.navigate('Bird2')}}> 
                        <NameCards no="2." color="#FFDE1D" name="PEACOCK"/>
                    </TouchableOpacity>

                    <TouchableOpacity style={{}} activeOpacity={0.8}  onPress={()=>{playSound(require('../../assets/audios/birds/parrot.mp3'));navigation.navigate('Bird3')}}> 
                    <NameCards no="3." color="#78CAEE" name="PARROT"/>
                    </TouchableOpacity>

                    <TouchableOpacity style={{}} activeOpacity={0.8}  onPress={()=>{playSound(require('../../assets/audios/birds/duck.mp3'));navigation.navigate('Bird4')}}> 
                    <NameCards no="4." color="#FA4E62" name="DUCK"/>
                    </TouchableOpacity>

                    <TouchableOpacity style={{}} activeOpacity={0.8}  onPress={()=>{playSound(require('../../assets/audios/birds/sparrow.mp3'));navigation.navigate('Bird5')}}> 
                    <NameCards no="5." color="#A7DA3F" name="SPARROW"/>
                    </TouchableOpacity>

                    <TouchableOpacity style={{}} activeOpacity={0.8}  onPress={()=>{playSound(require('../../assets/audios/birds/owl.mp3'));navigation.navigate('Bird6')}}> 
                    <NameCards no="6." color="#784EC7" name="OWL"/>
                    </TouchableOpacity>

                    <TouchableOpacity style={{}} activeOpacity={0.8}  onPress={()=>{playSound(require('../../assets/audios/birds/penguin.mp3'));navigation.navigate('Bird7')}}> 
                    <NameCards no="7." color="#FFDE1D" name="PENGUIN"/>
                    </TouchableOpacity>
                    
               
                
                </View> 
                
    </ScrollView>
    </View>

}
let ScreenHeight = Dimensions.get("window").height;
const style=StyleSheet.create({
    styleView3389:{
        height:ScreenHeight
    },

    styleView:{
        alignItems:"center",
        justifyContent:"space-around",
        height:650
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
 
 
 export default birdsName;