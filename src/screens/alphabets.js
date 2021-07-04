import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image , Dimensions} from 'react-native';
import AlphaCom from '../components/alphaCom';
import NavBar2 from '../components/navBar2';
import { Audio } from 'expo-av';


const alpha=function ({navigation}){
   
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
           {/*nav start*/}
           <View style={style.styleView3377}>
                            <TouchableOpacity style={{}} activeOpacity={0.8}  onPress={()=>navigation.navigate('Home')}> 
                                <Image style={style.imageVio3377} source={require('../../assets/buttons/back.png')}/>
                            </TouchableOpacity>
                    
                            <Text style={style.textStyle3377}>ALPHABETS</Text>

                            <TouchableOpacity style={{}} activeOpacity={0.8}  onPress={()=>{navigation.navigate('Home')}}> 
                                <Image style={style.imageVio13377} source={require('../../assets/buttons/home.png')}/>
                            </TouchableOpacity>
                    
                   
                </View>
                {/* nav end */}
        
        
        <View style={style.styleView1}>
                <View style={style.styleView}>

                    <TouchableOpacity style={{}} activeOpacity={0.8}  onPress={()=>{playSound(require('../../assets/audios/abcd/a.mp3'));navigation.navigate('AbcdA')}}> 
                        <Image  style={style.imageVio} source={require('../../assets/letters/a.png')}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={{}} activeOpacity={0.8}  onPress={()=>{ playSound(require('../../assets/audios/abcd/b.mp3')); navigation.navigate('AbcdB')}}> 
                        <Image  style={style.imageVio} source={require('../../assets/letters/b.png')}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={{}} activeOpacity={0.8}  onPress={()=>{playSound(require('../../assets/audios/abcd/c.mp3'));navigation.navigate('AbcdC')}}> 
                        <Image  style={style.imageVio} source={require('../../assets/letters/c.png')}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={{}} activeOpacity={0.8}  onPress={()=>{playSound(require('../../assets/audios/abcd/d.mp3'));navigation.navigate('AbcdD')}}> 
                        <Image  style={style.imageVio} source={require('../../assets/letters/d.png')}/>
                    </TouchableOpacity>
                    
                   
                    
                    
                </View>

                <View style={style.styleView}>

                    <TouchableOpacity style={{}} activeOpacity={0.8}  onPress={()=>{playSound(require('../../assets/audios/abcd/e.mp3'));navigation.navigate('AbcdE')}}> 
                        <Image  style={style.imageVio} source={require('../../assets/letters/e.png')}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={{}} activeOpacity={0.8}  onPress={()=>{playSound(require('../../assets/audios/abcd/f.mp3'));navigation.navigate('AbcdF')}}> 
                        <Image  style={style.imageVio} source={require('../../assets/letters/f.png')}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={{}} activeOpacity={0.8}  onPress={()=>{playSound(require('../../assets/audios/abcd/g.mp3'));navigation.navigate('AbcdG')}}> 
                        <Image  style={style.imageVio} source={require('../../assets/letters/g.png')}/>
                    </TouchableOpacity>


                    <TouchableOpacity style={{}} activeOpacity={0.8}  onPress={()=>{playSound(require('../../assets/audios/abcd/h.mp3'));navigation.navigate('AbcdH')}}> 
                        <Image  style={style.imageVio} source={require('../../assets/letters/h.png')}/>
                    </TouchableOpacity>

                    
                </View>
                <View style={style.styleView}>

                    <TouchableOpacity style={{}} activeOpacity={0.8}  onPress={()=>{playSound(require('../../assets/audios/abcd/i.mp3'));navigation.navigate('AbcdI')}}> 
                        <Image  style={style.imageVio} source={require('../../assets/letters/i.png')}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={{}} activeOpacity={0.8}  onPress={()=>{playSound(require('../../assets/audios/abcd/j.mp3'));navigation.navigate('AbcdJ')}}> 
                        <Image  style={style.imageVio} source={require('../../assets/letters/j.png')}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={{}} activeOpacity={0.8}  onPress={()=>{playSound(require('../../assets/audios/abcd/k.mp3'));navigation.navigate('AbcdK')}}> 
                        <Image  style={style.imageVio} source={require('../../assets/letters/k.png')}/>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={{}} activeOpacity={0.8}  onPress={()=>{playSound(require('../../assets/audios/abcd/l.mp3'));navigation.navigate('AbcdL')}}> 
                        <Image  style={style.imageVio} source={require('../../assets/letters/l.png')}/>
                    </TouchableOpacity>
                   
                </View>

                <View style={style.styleView}>

                    <TouchableOpacity style={{}} activeOpacity={0.8}  onPress={()=>{playSound(require('../../assets/audios/abcd/m.mp3'));navigation.navigate('AbcdM')}}> 
                        <Image  style={style.imageVio} source={require('../../assets/letters/m.png')}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={{}} activeOpacity={0.8}  onPress={()=>{playSound(require('../../assets/audios/abcd/n.mp3'));navigation.navigate('AbcdN')}}> 
                        <Image  style={style.imageVio} source={require('../../assets/letters/n.png')}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={{}} activeOpacity={0.8}  onPress={()=>{playSound(require('../../assets/audios/abcd/o.mp3'));navigation.navigate('AbcdO')}}> 
                        <Image  style={style.imageVio} source={require('../../assets/letters/o.png')}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={{}} activeOpacity={0.8}  onPress={()=>{playSound(require('../../assets/audios/abcd/p.mp3'));navigation.navigate('AbcdP')}}> 
                        <Image  style={style.imageVio} source={require('../../assets/letters/p.png')}/>
                    </TouchableOpacity>
                    
                    
                   
                </View>
                <View style={style.styleView}>

                    <TouchableOpacity style={{}} activeOpacity={0.8}  onPress={()=>{playSound(require('../../assets/audios/abcd/q.mp3'));navigation.navigate('AbcdQ')}}> 
                        <Image  style={style.imageVio} source={require('../../assets/letters/q.png')}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={{}} activeOpacity={0.8}  onPress={()=>{playSound(require('../../assets/audios/abcd/r.mp3'));navigation.navigate('AbcdR')}}> 
                        <Image  style={style.imageVio} source={require('../../assets/letters/r.png')}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={{}} activeOpacity={0.8}  onPress={()=>{playSound(require('../../assets/audios/abcd/s.mp3'));navigation.navigate('AbcdS')}}> 
                        <Image  style={style.imageVio} source={require('../../assets/letters/s.png')}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={{}} activeOpacity={0.8}  onPress={()=>{playSound(require('../../assets/audios/abcd/t.mp3'));navigation.navigate('AbcdT')}}> 
                        <Image  style={style.imageVio} source={require('../../assets/letters/t.png')}/>
                    </TouchableOpacity>

                    
                    
                   
                   
                </View>
                <View style={style.styleView}>

                    <TouchableOpacity style={{}} activeOpacity={0.8}  onPress={()=>{playSound(require('../../assets/audios/abcd/u.mp3'));navigation.navigate('AbcdU')}}> 
                        <Image  style={style.imageVio} source={require('../../assets/letters/u.png')}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={{}} activeOpacity={0.8}  onPress={()=>{playSound(require('../../assets/audios/abcd/v.mp3'));navigation.navigate('AbcdV')}}> 
                        <Image  style={style.imageVio} source={require('../../assets/letters/v.png')}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={{}} activeOpacity={0.8}  onPress={()=>{playSound(require('../../assets/audios/abcd/w.mp3'));navigation.navigate('AbcdW')}}> 
                        <Image  style={style.imageVio} source={require('../../assets/letters/w.png')}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={{}} activeOpacity={0.8}  onPress={()=>{playSound(require('../../assets/audios/abcd/x.mp3'));navigation.navigate('AbcdX')}}> 
                        <Image  style={style.imageVio} source={require('../../assets/letters/x.png')}/>
                    </TouchableOpacity>
                   
                   
                    
                    
                </View>
                <View style={style.styleView}>

                    <TouchableOpacity style={{}} activeOpacity={0.8}  onPress={()=>{playSound(require('../../assets/audios/abcd/y.mp3'));navigation.navigate('AbcdY')}}> 
                        <Image  style={style.imageVio} source={require('../../assets/letters/y.png')}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={{}} activeOpacity={0.8}  onPress={()=>{playSound(require('../../assets/audios/abcd/z.mp3'));navigation.navigate('AbcdZ')}}> 
                        <Image  style={style.imageVio} source={require('../../assets/letters/z.png')}/>
                    </TouchableOpacity>
                    
                    
                </View>
    </View>


    </View>
}
let ScreenHeight = Dimensions.get("window").height-90;
const style=StyleSheet.create({

    styleView:{
        flexDirection:"row",
        justifyContent:"space-around"
    },
    imageVio:{
        width:60,
        height:60
    },
    styleView1:{
        flexDirection:"column",
        justifyContent:"space-around",
        height:ScreenHeight
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
    }
 
 });
 
 
 export default alpha;