import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image ,Dimensions} from 'react-native';

import NameCards from '../components/nameCards';
import NavBar2 from '../components/navBar2';
import { Audio } from 'expo-av';

const animalsName=function ({navigation}){

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
                                
                                        <Text style={style.textStyle33}>ANIMALS</Text>

                                        <TouchableOpacity style={{}} activeOpacity={0.8}  onPress={()=>{navigation.pop();navigation.navigate('Home')}}> 
                                            <Image style={style.imageVio133} source={require('../../assets/buttons/home.png')}/>
                                        </TouchableOpacity>
                                
                            
                            </View>



                            <ScrollView>

                        <View style={style.styleView} >

                            

                                <TouchableOpacity style={{}} activeOpacity={0.8}  onPress={()=>{playSound(require('../../assets/audios/animals/cow.mp3'));navigation.navigate('Animals1')}}> 
                                    <NameCards no="1." color="#784EC7" name="COW"/>
                                </TouchableOpacity>

                                <TouchableOpacity style={{}} activeOpacity={0.8}  onPress={()=>{playSound(require('../../assets/audios/animals/horse.mp3'));navigation.navigate('Animals')}}> 
                                    <NameCards no="2." color="#FFDE1D" name="HORSE"/>
                                </TouchableOpacity>

                                <TouchableOpacity style={{}} activeOpacity={0.8}  onPress={()=>{playSound(require('../../assets/audios/animals/elephant.mp3'));navigation.navigate('Animals3')}}> 
                                    <NameCards no="3." color="#78CAEE" name="ELEPHANT"/>
                                </TouchableOpacity>
                                

                        
                        
                                <TouchableOpacity style={{}} activeOpacity={0.8}  onPress={()=>{playSound(require('../../assets/audios/animals/goat.mp3'));navigation.navigate('Animals4')}}> 
                                    <NameCards no="4." color="#FA4E62" name="GOAT"/>
                                </TouchableOpacity>

                                <TouchableOpacity style={{}} activeOpacity={0.8}  onPress={()=>{playSound(require('../../assets/audios/animals/monkey.mp3'));navigation.navigate('Animals5')}}> 
                                    <NameCards no="5." color="#A7DA3F" name="MONKEY"/>
                                </TouchableOpacity>
                        
                        
                                <TouchableOpacity style={{}} activeOpacity={0.8}  onPress={()=>{playSound(require('../../assets/audios/animals/zebra.mp3'));navigation.navigate('Animals6')}}> 
                                    <NameCards no="6." color="#784EC7" name="ZEBRA"/>
                                </TouchableOpacity>

                                <TouchableOpacity style={{}} activeOpacity={0.8}  onPress={()=>{playSound(require('../../assets/audios/animals/camel.mp3'));navigation.navigate('Animals7')}}> 
                                    <NameCards no="7." color="#FFDE1D" name="CAMEL"/>
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
 
 
 export default animalsName;