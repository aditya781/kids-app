
import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity ,Image, Linking, Dimensions, Alert} from 'react-native';




const privacy=({navigation})=>{

   

    return (
    <View>
                
                <View style={style.styleView}>
                    <TouchableOpacity style={{}} activeOpacity={0.8}  onPress={()=>{navigation.pop();navigation.navigate('Settings')}}> 
                            <Image style={style.imageVi} source={require('../../assets/buttons/back.png')}/>                       
                    </TouchableOpacity> 
                    
                    <Text style={style.textst}>PRIVACY POLICY</Text>
                    <Text></Text>
                </View>
                
                <ScrollView>
                    <View style={style.viewSt}>
                        <Text style={style.textst445}>Date  :25 JUNE 2021</Text>
                        <Text style={style.textst44}>Place :Ahmednagar Maharashtra</Text>
                        <Text style={style.textst55}>Your privacy is important for us and we are commited to protecting the privacy of parents and kids.
                        Kindly take a few minutes to go through our privacy policy and term of use. </Text>
                        <Text style={style.textst55}>If you do not agreeto this Privacy Policy, please do not use our apps & serices. We reserve the right to make changes to
                        this Privacy Policy. If we make any changes to this privacy policy, we will notify you by posting the changes in this Privacy Policy. 
                        Kindly check back time to time to ensure that you are aware of this changes. Your continued use of our apps and services will ensures your acceptance of these changes.</Text>
                        <Text style={style.textst44}>Personal Data Collected</Text>
                        <Text style={style.textst55}>Our system will not logs any of your prsonal data (like device ID, location, analytics etc..) so that you wouldn't get any push notifications.</Text>
                        <Text style={style.textst44}>Non-Personal Data</Text>
                        <Text style={style.textst55}>Our system will not collect any type of Non-Personal Data</Text>
                        <Text style={style.textst44}>Advertisement and Monetistion</Text>
                        <Text style={style.textst55}>This app didn't contain any type of ads in it. In fact its ads free app.</Text>
                        <Text style={style.textst44}>Google Play Store and Data Collection</Text>
                        <Text style={style.textst55}>It is a toddler focused app. While using the apps, the Google Play Store may use cookies, unique device identifier codes, 
                        software and hardware information, browser information, time zone and usage information or other technology to collect and process information about you and we may have access to it. We have no control over an Play Store's collection. 
                        If you have any issues to these technologies, do not use or acces our apps and services.</Text>
                        <Text style={style.textst44}>Security</Text>
                        <Text style={style.textst55}>We did not collect any type of personal information. Please be aware that most of the security measures are taken to protect your non-personal information</Text>
                        <Text style={style.textst44}>Contact or Report Us</Text>
                        <Text style={style.textst55}>If you have any questions or comments about this Policy or our terms o to report any violation of the policy or Abuse of an 
                        applications or services or the website, kindly contact us at : abcdKids58@gmail.com</Text>
                        <Text style={style.textst44}>Our Address </Text>
                        <Text style={style.textst55}>Playfield Technologies </Text>
                        <Text style={style.textst55}>abcdKids58@gmail.com </Text>
                        <Text style={style.textst55}>Ahmednagar, </Text>
                        <Text style={style.textst55}>Maharashtra, India </Text>
                    </View>
                    <View style={style.styleView74587}></View>
                </ScrollView>
    </View>
    )
}
let ScreenHeight = Dimensions.get("window").height-90;
let ScreenWidth = Dimensions.get("window").width;
const style=StyleSheet.create({
   
    styleView:{
        alignItems:"center",
        marginTop:40,
        flexDirection:"row",
        justifyContent:"space-around",
        height:50
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
    textst44:{
        color:"blue",
        fontSize:15,
        marginLeft:20, 
        fontWeight:"bold"
    },
    textst55:{
        
        fontSize:15,
        marginHorizontal:20,
        textAlign:"justify"
    },
    viewSt:{
        
    },
    styleView74587:{
        height:100
    },
    textst445:{
        marginTop:10,
        color:"blue",
        fontSize:15,
        marginLeft:20, 
        fontWeight:"bold"
    }
});


export default privacy;