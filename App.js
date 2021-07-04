import {  Navigation, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import home from './src/screens/home';
import alpha from './src/screens/alphabets';
import birds from './src/screens/birds';
import nameCards from './src/components/nameCards';
import birdsName from './src/screens/birdsName';
import abcdA from './src/screens/abcdA';
import abcdB from './src/screens/abcdScreens/abcdB';
import abcdC from './src/screens/abcdScreens/abcdC';
import abcdD from './src/screens/abcdScreens/abcdD';
import abcdE from './src/screens/abcdScreens/abcdE';
import abcdF from './src/screens/abcdScreens/abcdF';
import abcdG from './src/screens/abcdScreens/abcdG';
import abcdH from './src/screens/abcdScreens/abcdH';
import abcdI from './src/screens/abcdScreens/abcdI';
import abcdJ from './src/screens/abcdScreens/abcdJ';
import abcdK from './src/screens/abcdScreens/abcdK';
import abcdL from './src/screens/abcdScreens/abcdL';
import abcdM from './src/screens/abcdScreens/abcdM';
import abcdN from './src/screens/abcdScreens/abcdN';
import abcdO from './src/screens/abcdScreens/abcdO';
import abcdP from './src/screens/abcdScreens/abcdP';
import abcdQ from './src/screens/abcdScreens/abcdQ';
import abcdR from './src/screens/abcdScreens/abcdR';
import abcdS from './src/screens/abcdScreens/abcdS';
import abcdT from './src/screens/abcdScreens/abcdT';
import abcdU from './src/screens/abcdScreens/abcdU';
import abcdV from './src/screens/abcdScreens/abcdV';
import abcdW from './src/screens/abcdScreens/abcdW';
import abcdX from './src/screens/abcdScreens/abcdX';
import abcdY from './src/screens/abcdScreens/abcdY';
import abcdZ from './src/screens/abcdScreens/abcdZ';
import animals3 from './src/screens/animals/animal3';
import animals1 from './src/screens/animals/animals1';
import animals6 from './src/screens/animals/animal6';
import animals4 from './src/screens/animals/animal4';
import animals7 from './src/screens/animals/animal7';
import animals5 from './src/screens/animals/animal5';
import bird2 from './src/screens/birds/bird2';
import bird3 from './src/screens/birds/bird3';
import bird6 from './src/screens/birds/bird6';
import bird4 from './src/screens/birds/bird4';
import bird5 from './src/screens/birds/bird5';
import bird7 from './src/screens/birds/bird7';
import timePass from './src/screens/timePass';
import bodyParts from './src/screens/bodyParts';
import animalsName from './src/screens/animalsName';
import animals from './src/screens/animals';
import numbers from './src/screens/numbers';
import settings from './src/screens/settings';
import privacy from './src/screens/privacy';





const navigator=createStackNavigator(
  {
    
    Home:home,
    Alpha:alpha,
    Birds:birds,
    NameCards:nameCards,
    BirdsName:birdsName,
    AbcdA:abcdA,
    AbcdB:abcdB,
    AbcdC:abcdC,
    AbcdD:abcdD,
    AbcdE:abcdE,
    AbcdF:abcdF,
    AbcdG:abcdG,
    AbcdH:abcdH,
    AbcdI:abcdI,
    AbcdJ:abcdJ,
    AbcdK:abcdK,
    AbcdL:abcdL,
    AbcdM:abcdM,
    AbcdN:abcdN,
    AbcdO:abcdO,
    AbcdP:abcdP,
    AbcdQ:abcdQ,
    AbcdR:abcdR,
    AbcdS:abcdS,
    AbcdT:abcdT,
    AbcdU:abcdU,
    AbcdV:abcdV,
    AbcdW:abcdW,
    AbcdX:abcdX,
    AbcdY:abcdY,
    AbcdZ:abcdZ,
    Animals:animals,
    Animals3:animals3,
    Animals1:animals1,
    Animals6:animals6,
    Animals4:animals4,
    Animals7:animals7,
    Animals5:animals5,
    Bird2:bird2,
    Bird3:bird3,
    Bird6:bird6,
    Bird4:bird4,
    Bird5:bird5,
    Bird7:bird7,
    TimePass:timePass,
    BodyParts:bodyParts,
    AnimalsName:animalsName,
    Numbers:numbers,
    Settings:settings,
    Privacy:privacy
    
  },
  {
    initialRouteName:"Home",
    defaultNavigationOptions:{
      headerShown:false,
      title: "App"
     
    }
  }
)


export default createAppContainer(navigator);









/*
    "ios": {
      "supportsTablet": true
    },

"android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#FFFFFF"
      }
    },

    */