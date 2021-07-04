
import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image , Alert} from 'react-native';
import Lesson from '../components/lesson';
import Lesson2 from '../components/lesson2';
import Lesson3 from '../components/lesson3';
import Lesson4 from '../components/lesson4';
import Lesson5 from '../components/lesson5';
import Lesson6 from '../components/lesson6';
import NavigationBar from '../components/navigationBar';
import { Audio } from 'expo-av';





const home=function ({navigation}){
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
                {/*navigationBar start */}
                <View style={style.styleView92}>
                    <TouchableOpacity style={{}} activeOpacity={0.8}  onPress={()=>{Alert.alert("Coming Soon..","Please support us by sharing the app to get new FREE content.")}}> 
                        <Image style={style.imageVio92} source={require('../../assets/buttons/menu.png')}/>
                    </TouchableOpacity>
                    
                    <Text style={style.textStyle92}>ABCD KIDS</Text>
                    <TouchableOpacity style={{}} activeOpacity={0.8}  onPress={()=>navigation.navigate('Settings')}> 
                        <Image style={style.imageVio192} source={require('../../assets/buttons/dot.png')}/>                            
                    </TouchableOpacity>              
                </View>
                {/*navigationBar end */}
        <ScrollView> 
                <View style={style.viewStyle}>

                   
                    
                    <TouchableOpacity style={{}} activeOpacity={0.8}  onPress={()=>navigation.navigate('Alpha')}> 
                        <Lesson/>
                        
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={{}} activeOpacity={0.8}  onPress={()=>navigation.navigate('Numbers')}> 
                        <Lesson2/>
                        
                    </TouchableOpacity>
                    
                    
                    

                    <TouchableOpacity style={{}} activeOpacity={0.8}  onPress={()=>navigation.navigate('AnimalsName')}> 
                         <Lesson3/>
                    </TouchableOpacity>

                    <TouchableOpacity style={{}} activeOpacity={0.8}  onPress={()=>navigation.navigate('BirdsName')}> 
                        <Lesson4/>
                    </TouchableOpacity>


                    <TouchableOpacity style={{}} activeOpacity={0.8}  onPress={()=>{playSound(require('../../assets/audios/body/letsPlay.mp3')); navigation.navigate('BodyParts')}}> 
                        <Lesson5/>
                    </TouchableOpacity>

                    <TouchableOpacity style={{}} activeOpacity={0.8}  onPress={()=>{ }}> 
                        <Lesson6/>
                    </TouchableOpacity>
                    
                    
                </View>
                <View style={style.footer}></View>
    </ScrollView>

   
    </View>
}


const style=StyleSheet.create({

   viewStyle:{
       height:1050,
       alignItems:"center",
       justifyContent:"space-around"
   },
   viewStyle22:{
    
    alignItems:"center",
    justifyContent:"space-around"
},
   footer:{
       width:300,
       height:100
   },









   styleView92:{
    flexDirection:"row",
    
    justifyContent:"space-around",
    marginTop:30
  
    
},
imageVio92:{
    
    width:100,
    height:50,
    marginTop:10
},
imageVio192:{
    
    width:20,
    height:20,
    marginTop:22
},
textStyle92:{
    marginTop:15,
    color:"#FA4E62",
    fontWeight:"bold",
    fontSize:20
}


});


export default home;