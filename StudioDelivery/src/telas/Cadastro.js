import React, {useEffect, useRef} from 'react';
import BotaoPrincipal from './Botoes/BotaoPrincial'
import BotaoSecundario from './Botoes/BotaoSecundario'
import BotaoDesabilitado from './Botoes/BotaoDesabilitado'
import InputPrincipal from './Botoes/Inputs/InputPrincipal';
import InputSecundario from './Botoes/Inputs/InputSecundario'; 

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
import InputTerciario from './Botoes/Inputs/InputTerciario';

const Cadastro = () => {
  
  return (
    <View style={styles.bg_cadastro}>
      <View style={styles.container}>
        <Text style={styles.titulo}>Criar uma conta</Text>
        <Text style={styles.sub_titulo}>
          Já tem uma conta? <Text style={styles.login}>Faça login</Text>
        </Text>
      </View>
      <View style={styles.inner_cadastro}>
        <InputPrincipal placeholder="Nome Completo" type="default"/>
        <View style={styles.alinhador}>
          <InputSecundario placeholder="Data de Nascimento" type="numeric" secure = {false}/>
          <InputTerciario placeholder="CPF" type="numeric" secure = {false}/>
        </View>
        <InputPrincipal placeholder="Celular" type="numeric" secure = {false}/>
        <InputPrincipal placeholder="E-mail" type="default" secure = {false}/>
        <InputPrincipal placeholder="Senha" type="default" secure = {true}/>
        <InputPrincipal placeholder="Repetir a senha" type="default" secure = {true}/>
        <View style={styles.alinhador}>
          <BotaoSecundario conteudo="Voltar"/>
          <BotaoPrincipal conteudo="Continuar"/>
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
    marginHorizontal:30,
    marginVertical: 10,
    borderRadius: 12,
    width: '85%',
    paddingHorizontal: 20,
    paddingTop:18,
    paddingBottom:2,
    height: 60,
  },
  in_field1: {
    backgroundColor: '#fff',
    //marginHorizontal:30,
    marginVertical: 10,
    borderRadius: 12,
    width: '55%',
    paddingHorizontal: 20,
    paddingTop:18,
    paddingBottom:2,
    height: 60,
  },
  in_field2: {
    backgroundColor: '#fff',
    //marginHorizontal:30,
    marginVertical: 10,
    borderRadius: 12,
    width: '40%',
    paddingHorizontal: 20,
    paddingTop:18,
    paddingBottom:2,
    height: 60,
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
  blank: {
    color: '#000',
    position:'absolute',
    zIndex:5,
    top:30,
    left:50,
  },
  typing: {
    color: '#999',
    position:'absolute',
    zIndex:5,
    top:20,
    left:50,
    fontSize:12,
  },
});

export default Cadastro;
