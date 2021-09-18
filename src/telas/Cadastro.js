import React from 'react';
import InputMask from 'react-native-text-input-mask';
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
} from 'react-native';

const Cadastro = () => {
  const [text, onChangeText] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);

  return (
    <View style={styles.bg_cadastro}>
      <View style={styles.container}>
        <Text style={styles.titulo}>Criar uma conta</Text>
        <Text style={styles.sub_titulo}>
          Já tem uma conta? <Text style={styles.login}>Faça login</Text>
        </Text>
      </View>
      <View style={styles.inner_cadastro}>
        <TextInput
          style={styles.in_field}
          onChangeText={onChangeText}
          value={text}
          placeholder={'Nome Completo'}
          keyboardType="text"></TextInput>
        <View style={styles.alinhador}>
          <TextInput
            
            style={styles.in_field1}
            onChangeText={onChangeNumber}
            value={number}
            placeholder={'Data de Nascimento'}
            keyboardType="numeric"></TextInput>
          <TextInput
            style={styles.in_field2}
            onChangeText={onChangeNumber}
            value={number}
            placeholder={'CPF'}
            keyboardType="numeric"></TextInput>
        </View>
        <TextInput
          style={styles.in_field}
          onChangeText={onChangeNumber}
          value={number}
          placeholder={'Celular'}
          keyboardType="numeric"></TextInput>
        <TextInput
          style={styles.in_field}
          onChangeText={onChangeText}
          value={text}
          placeholder={'E-mail'}
          keyboardType="text"></TextInput>
        <TextInput
          style={styles.in_field}
          onChangeText={onChangeText}
          value={text}
          placeholder={'Senha'}
          keyboardType="text"
          secureTextEntry={true}></TextInput>
        <TextInput
          style={styles.in_field}
          onChangeText={onChangeText}
          value={text}
          placeholder={'Repetir a senha'}
          keyboardType="text"
          secureTextEntry={true}></TextInput>
        <View style={styles.alinhador}>
          <View style={styles.btn_right}>
            <Text style={styles.btn_txt}>Voltar</Text>
          </View>
          <View style={styles.btn_left}>
            <Text style={styles.btn_txt}>Continuar</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  bg_cadastro: {
    backgroundColor: 'rgba(245,245,245,255)',
    height: '100%',
    fontFamily: 'Poppins-Light',
    fontSize: 12,
  },
  container: {
    width: '85%',
    marginHorizontal: '7.5%',
    marginVertical: 40,
  },
  inner_cadastro: {
    display: 'flex',
    alignItems: 'center',
  },
  in_field: {
    backgroundColor: '#fff',
    // marginHorizontal:30,
    marginVertical: 10,
    borderRadius: 12,
    width: '85%',
    paddingHorizontal: 20,
    height: 60,
  },
  in_field1: {
    backgroundColor: '#fff',
    // marginHorizontal:30,
    marginVertical: 10,
    borderRadius: 12,
    width: '55%',
    paddingHorizontal: 20,
    height: 60,
  },
  in_field2: {
    backgroundColor: '#fff',
    // marginHorizontal:30,
    marginVertical: 10,
    borderRadius: 12,
    width: '40%',
    paddingHorizontal: 20,
    height: 65,
  },
  alinhador: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '85%',
  },
  titulo: {
    fontSize: 24,
    fontFamily: 'Poppins-Bold',
  },
  sub_titulo: {
    color: '#b7b7b7',
  },
  login: {
    color: '#4E46B4',
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
  btn_txt: {
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
});

export default Cadastro;