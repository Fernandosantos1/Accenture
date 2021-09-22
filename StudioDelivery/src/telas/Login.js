import React, {useEffect, useRef} from 'react';
import BotaoPrincial from './Botoes/BotaoPrincial';
import BotaoSecundario from './Botoes/BotaoSecundario';
import BotaoDesabilitado from './Botoes/BotaoDesabilitado';
import InputPrincipal from './Botoes/Inputs/InputPrincipal';
import InputSecundario from './Botoes/Inputs/InputSecundario';
import InputTerciario from './Botoes/Inputs/InputTerciario';
import InputMask from './Botoes/Inputs/InputMask';

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
  KeyboardAvoidingView,
  TouchableOpacity,
  Image,
} from 'react-native';

const Cadastro = () => {
  const [senha, setSenha] = React.useState(true);
  const [confirmarSenha, setConfirmarSenha] = React.useState(true);

  const iconSenha = senha
    ? require('./Imagens/esconder.png')
    : require('./Imagens/mostrar.png');

    const iconConfirmarSenha = confirmarSenha
    ? require('./Imagens/esconder.png')
    : require('./Imagens/mostrar.png');
  //<Image source={iconSenha} />
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}style={styles.bg_cadastro}>
      <ScrollView>
        <View >
          <View style={styles.container}>
            <Text style={styles.titulo}>Fazer login</Text>
            <Text style={styles.sub_titulo}>
              Novo usuário? <Text style={styles.login}>Crie uma conta</Text>
            </Text>
          </View>
          <View style={styles.inner_cadastro}>

            

            <InputPrincipal
              placeholder="E´mail"
              type="default"
              secure={false}
            />

            
            <View style={styles.mostrar_senha}>
              <TouchableOpacity 
              style={styles.btn_senha}
              onPressIn={() => {
                setSenha(false)
                
              }}
              onPressOut={() => {
                setSenha(true)
              }}
              >
                <Image style={styles.imagem_senha} source={iconSenha} />
              </TouchableOpacity>
              <InputPrincipal
                placeholder="Senha"
                type="default"
                secure={senha}
              />
            </View>
            
            <View style={styles.alinhador}>
              <BotaoSecundario conteudo="Voltar" />

              <BotaoPrincial conteudo="Continuar" />
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
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
  mostrar_senha: {
    position: 'relative',
    width: '100%',
  },
  imagem_senha: {
    width: 40,
    height: 40,
  },
  btn_senha: {
    position: 'absolute',
    zIndex: 5,
    top: 22.5,
    right: 35,
  },
});

export default Cadastro;
