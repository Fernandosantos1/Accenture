import React, {useEffect, useRef} from 'react';
import BotaoPrincial from './Botoes/BotaoPrincial';
import BotaoSecundario from './Botoes/BotaoSecundario';
import BotaoDesabilitado from './Botoes/BotaoDesabilitado';
import InputPrincipal from './Inputs/InputPrincipal';
import InputSecundario from './Inputs/InputSecundario';
import InputTerciario from './Inputs/InputTerciario';
import InputMask from './Inputs/InputMask';

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
  Pressable,
} from 'react-native';

const Cadastro = ({navigation}) => {
  const [senha, setSenha] = React.useState(true);

  const iconSenha = senha
    ? require('./Imagens/esconder.png')
    : require('./Imagens/mostrar.png');

  return (
    <SafeAreaView>
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
      style={styles.bg_cadastro}>
      <ScrollView>
        <View>
          <View style={styles.container}>
            <Text style={styles.titulo}>Fazer login</Text>
            <Pressable onPress={() => navigation.navigate('Cadastro')}>
              <Text style={styles.sub_titulo}>
                Novo usuário? <Text style={styles.login}>Crie uma conta</Text>
              </Text>
            </Pressable>
          </View>
          <View style={styles.inner_cadastro}>
            <View>
              <View style={styles.login_google}>
                <Image
                  style={styles.imagem_google}
                  source={require('./Imagens/google-icon-3.png')}
                />
                <Text style={styles.google_text}>Continuar com o Google</Text>
              </View>
              <View style={styles.login_face}>
                <Image
                  style={styles.imagem_face}
                  source={require('./Imagens/face.png')}
                />
                <Text style={styles.face_text}>Continuar com o Facebook</Text>
              </View>
            </View>

            <View style={styles.ou_alinhador}>
              <View style={styles.ou_barra} />
              <Text style={styles.ou_texto}>Ou</Text>
              <View style={styles.ou_barra} />
            </View>

            <InputPrincipal
              placeholder="E-mail"
              type="default"
              secure={false}
            />

            <View style={styles.mostrar_senha}>
              <TouchableOpacity
                style={styles.btn_senha}
                onPressIn={() => {
                  setSenha(false);
                }}
                onPressOut={() => {
                  setSenha(true);
                }}>
                <Image style={styles.imagem_senha} source={iconSenha} />
              </TouchableOpacity>
              <InputPrincipal
                placeholder="Senha"
                type="default"
                secure={senha}
              />
            </View>

            <View style={styles.alinhador}>
              <BotaoPrincial conteudo="Continuar" />
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
    </SafeAreaView>
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
    width: 700,
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
    justifyContent: 'flex-end',
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
  ou_alinhador: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical:50,
  },
  ou_texto: {
    fontFamily: 'Poppins-Light',
    color: '#999',
    marginHorizontal: 10,
  },
  ou_barra: {
    width: '37%',
    height: 1,
    backgroundColor: '#999',
    zIndex: 5,
  },
  imagem_google: {
    height: 20,
    width: 20,
    position: 'absolute',
    left: 40,
  },
  imagem_face: {
    height: 20,
    width: 20,
    position: 'absolute',
    left: 40,
  },
  login_google: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    backgroundColor: '#fff',
    width: '85%',
    height: 50,
    marginHorizontal: 30,
    marginVertical: 15,
    borderRadius: 12,
    paddingHorizontal: 20,
    fontFamily: 'Poppins-Light',
  },
  login_face: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    backgroundColor: '#3B5998',
    width: '85%',
    height: 50,
    marginHorizontal: 30,
    marginVertical: 15,
    borderRadius: 12,
    paddingHorizontal: 20,
    fontFamily: 'Poppins-Light',
  },
  face_text: {
    color: '#fff',
    fontFamily: 'Poppins-Bold',
  },
  google_text: {
    color: '#000',
    fontFamily: 'Poppins-Bold',
  },
});

export default Cadastro;
