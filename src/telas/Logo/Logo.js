import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';


const Logo = () => {
    return(
    <View style={styles.inner_content}>
        <Text style={styles.inicio_titulo} >Studio</Text>
        <Text style={styles.inicio_sub_titulo} >D E L I V E R Y</Text>
    </View>
    )

} 
const styles = StyleSheet.create({
    inner_content:{
        display:'flex',
        justifyContent:'center',
        alignItems:'flex-end',
        height:100,
        
    },
    inicio_titulo:{
        fontSize:100,
        fontWeight:"400",
        color:'#fff',
        fontFamily:"MrsSheppards-Regular",
        
    },
    inicio_sub_titulo:{
        fontSize:20,
        color:'#fff',
        fontFamily:"Poppins-Regular",  
    }
})
export default Logo