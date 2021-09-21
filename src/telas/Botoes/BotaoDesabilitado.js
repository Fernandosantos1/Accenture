import React, {useEffect, useRef} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
  _View,
  Button,
  Animated,
  TouchableOpacity,
} from 'react-native';

export default props =>{
    return(
    <TouchableOpacity style={styles.btn}>
            <Text style={styles.btn_txt}>{props.conteudo}</Text>
    </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
   
    btn: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 10,
      width: '47.5%',
      height: 55,
      backgroundColor: (0, 0, 0, 0.125),
      borderRadius: 12,
    },
    btn_txt: {fontFamily: 'Poppins-Bold', fontWeight: '700', color: '#fff'},
    })

