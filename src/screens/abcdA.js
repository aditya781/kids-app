
import React from 'react';
import { StyleSheet, Text, View,  Image, TouchableOpacity, Dimensions } from 'react-native';
import NavBar2 from '../components/navBar2';
import AbcdCardCom from '../components/abcdCardCom';
import ButtonsCom from '../components/buttonsCom';
import { Audio } from 'expo-av';


const buttonsCom=function ({navigation}){

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
                <View style={style.styleView3377}>
                            <TouchableOpacity style={{}} activeOpacity={0.8}  onPress={()=>navigation.navigate('Alpha')}> 
                                <Image style={style.imageVio3377} source={require('../../assets/buttons/back.png')}/>
                            </TouchableOpacity>
                    
                            <Text style={style.textStyle3377}>ALPHABETS</Text>

                            <TouchableOpacity style={{}} activeOpacity={0.8}  onPress={()=>{navigation.navigate('Home')}}> 
                                <Image style={style.imageVio13377} source={require('../../assets/buttons/home.png')}/>
                            </TouchableOpacity>
                    
                   
                </View>
                {/* nav end */}

                <View style={style.styleView}>
                       
                        {/*<AbcdCardCom/>*/}

                        <View style={style.styleView1535}>
                            <TouchableOpacity style={{}} activeOpacity={0.8}  onPress={()=>{playSound(require('../../assets/audios/abcd/a.mp3'))}}> 
                            <View style={style.styleView535}>
                                    <Text style={style.textStyle535} >A</Text>
                                </View>  
                            </TouchableOpacity>
                                

                                <View style={style.styleView3535}>
                                        <TouchableOpacity style={{}} activeOpacity={0.8}  onPress={()=>{playSound(require('../../assets/audios/for/ant.mp3'))}}> 
                                                <View style={style.styleView4535}>
                                                        <Image style={style.imageVio535} source={require('../../assets/abcd/ant.png')}/>
                                                    </View>         
                                            </TouchableOpacity>

                                            <TouchableOpacity style={{}} activeOpacity={0.8} onPress={()=>{playSound(require('../../assets/audios/for/apple.mp3'))}}> 
                                            <View style={style.styleView4535}>
                                        <Image style={style.imageVio1535} source={require('../../assets/abcd/apple.png')}/>
                                    </View>          
                                    </TouchableOpacity> 
                                    
                                    
                                </View>
                                        

                                        
                            </View>
                        {/*<AbcdCardCom/>*/}

                         {/*start buttonCom */}
                         <View style={style.styleView78}>
                            <TouchableOpacity style={{}} activeOpacity={0.8}  onPress={()=>{playSound(require('../../assets/audios/abcd/z.mp3'));navigation.pop();navigation.navigate('AbcdZ')}}> 
                                    <Image style={style.imageVio78} source={require('../../assets/buttons/prev.png')}/>
                                </TouchableOpacity>
                                <Image style={style.imageVio78} source={require('../../assets/buttons/play.png')}/>
                                <TouchableOpacity style={{}} activeOpacity={0.8}  onPress={()=>{playSound(require('../../assets/audios/abcd/b.mp3'));navigation.pop();navigation.navigate('AbcdB')}}> 
                                    <Image style={style.imageVio78} source={require('../../assets/buttons/next.png')}/>
                                </TouchableOpacity>
                            </View>
                    {/*start buttonCom */}
                </View>
                   

                   
    </View>
}

let ScreenHeight = Dimensions.get("window").height-90;
const style=StyleSheet.create({

    styleView:{
        
        alignItems:"center",
        height:ScreenHeight,
        justifyContent:"space-around"
        
    },
    imageVio:{
        
        width:50,
        height:50
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
    },















    styleView3377:{
        flexDirection:"row",
       
        
        justifyContent:"space-around",
        marginTop:30,
        alignItems:"center",
        
      
        
    },
    imageVio3377:{
        
        width:20,
        height:20,
        marginTop:15
    },
    imageVio13377:{
        
        width:20,
        height:20,
        marginTop:15
    },
    textStyle3377:{
        marginTop:10,
        color:"#FA4E62",
        fontWeight:"bold",
        fontSize:20
    },



















    styleView535:{

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
styleView1535:{
    alignItems:"center",
    justifyContent:"space-around"
},
imageVio535:{
    
    width:150,
    height:150,
    marginLeft:-15,
    marginTop:-10
},
imageVio1535:{
    
    width:90,
    height:100,
    marginTop:20,
    marginLeft:15
},
styleView3535:{
    flexDirection:"row",
    width:250,
    justifyContent:"space-between"
},
styleView4535:{
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
textStyle535:{
    color:"white",
    fontSize:150,
    marginVertical:20
}

   
   

});


export default buttonsCom;