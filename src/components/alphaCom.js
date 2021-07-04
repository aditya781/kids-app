
import React from 'react';
import { StyleSheet, Text, View,  Image, TouchableOpacity } from 'react-native';


const alphaCom=function ({navigation}){
    return <View style={style.styleView1}>
                <View style={style.styleView}>

                    <TouchableOpacity style={{}} activeOpacity={0.8}  onPress={()=>navigation.navigate('AbcdA')}> 
                        <Image  style={style.imageVio} source={require('../../assets/letters/a.png')}/>
                    </TouchableOpacity>
                    
                    <Image  style={style.imageVio} source={require('../../assets/letters/b.png')}/>
                    <Image  style={style.imageVio} source={require('../../assets/letters/c.png')}/>
                    <Image  style={style.imageVio} source={require('../../assets/letters/d.png')}/>
                </View>

                <View style={style.styleView}>
                    <Image  style={style.imageVio} source={require('../../assets/letters/e.png')}/>
                    <Image  style={style.imageVio} source={require('../../assets/letters/f.png')}/>
                    <Image  style={style.imageVio} source={require('../../assets/letters/g.png')}/>
                    <Image  style={style.imageVio} source={require('../../assets/letters/h.png')}/>
                </View>
                <View style={style.styleView}>
                    <Image  style={style.imageVio} source={require('../../assets/letters/i.png')}/>
                    <Image  style={style.imageVio} source={require('../../assets/letters/j.png')}/>
                    <Image  style={style.imageVio} source={require('../../assets/letters/k.png')}/>
                    <Image  style={style.imageVio} source={require('../../assets/letters/l.png')}/>
                </View>
                <View style={style.styleView}>
                    <Image  style={style.imageVio} source={require('../../assets/letters/m.png')}/>
                    <Image  style={style.imageVio} source={require('../../assets/letters/n.png')}/>
                    <Image  style={style.imageVio} source={require('../../assets/letters/o.png')}/>
                    <Image  style={style.imageVio} source={require('../../assets/letters/p.png')}/>
                </View>
                <View style={style.styleView}>
                    <Image  style={style.imageVio} source={require('../../assets/letters/q.png')}/>
                    <Image  style={style.imageVio} source={require('../../assets/letters/r.png')}/>
                    <Image  style={style.imageVio} source={require('../../assets/letters/s.png')}/>
                    <Image  style={style.imageVio} source={require('../../assets/letters/t.png')}/>
                </View>
                <View style={style.styleView}>
                    <Image  style={style.imageVio} source={require('../../assets/letters/u.png')}/>
                    <Image  style={style.imageVio} source={require('../../assets/letters/v.png')}/>
                    <Image  style={style.imageVio} source={require('../../assets/letters/w.png')}/>
                    <Image  style={style.imageVio} source={require('../../assets/letters/x.png')}/>
                </View>
                <View style={style.styleView}>
                    <Image  style={style.imageVio} source={require('../../assets/letters/y.png')}/>
                    <Image  style={style.imageVio} source={require('../../assets/letters/z.png')}/>
                </View>
    </View>
}


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
        
        justifyContent:"space-around",
        height:600
    }
   

});


export default alphaCom;