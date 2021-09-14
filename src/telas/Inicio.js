import React from 'react';
import Logo from './Logo/Logo';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';


const Inicio = () =>{
    return(
        <View style={styles.bg_inicio} >
                <Logo/>          
        </View>
    )
}

const styles = StyleSheet.create({
    bg_inicio:{
        height:'100%',
        width:'100%',
        backgroundColor:'#4E46B4',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    }
})
export default Inicio
