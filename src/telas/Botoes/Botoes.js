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
} from 'react-native';

export default props => {
  return (
    <View style={styles.alinhador}>
      <View style={styles.btn_right}>
        <Text style={styles.btn_txt}>{props.conteudo}</Text>
      </View>
      <View style={styles.btn_left}>
        <Text style={styles.btn_txt}>{props.conteudo}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  alinhador: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '85%',
  },
  btn_right: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    width: '47.5%',
    height: 55,
    backgroundColor: '#a19dd4',
    borderRadius: 12,
    color: '#fff',
  },

  btn_left: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    width: '47.5%',
    height: 55,
    backgroundColor: '#d6d6d6',
    borderRadius: 12,
  },
  btn_txt: {fontFamily: 'Poppins-Bold', fontWeight: '700', color: '#fff'},
});


