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
  Keyboard,
} from 'react-native';

import { TextInputMask } from 'react-native-masked-text';


export default props => {
  const [typing, setTyping] = React.useState(false);
  const [value, setValue] = React.useState('');
  const [click, setClick] = React.useState(false);

  const translationTop = useRef(new Animated.Value(30)).current;
  const userTyping = () => {
    Animated.parallel([
      Animated.timing(translationTop, {
        toValue: 20,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();
  };
  const userNotTyping = () => {
    Animated.parallel([
      Animated.timing(translationTop, {
        toValue: 30,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <View style={styles.in_box}>
      <Animated.Text
        style={[
          typing ? styles.typing : styles.in_placeholder,
          {transform: [{translateY: translationTop}]},
        ]}>
        {props.placeholder}
      </Animated.Text>
      <TextInputMask 
      type={props.mascara}

      secureTextEntry={props.secure}
      keyboardType={props.type}
        onFocus={() => {
          setTyping(true);
          userTyping();
          setClick(true);
        }}
        onBlur={() => {
          if (click && value == '') {
            setTyping(false);
            userNotTyping();
          }
        }}
        
        onChangeText={text => {
          setTyping(true);
          userTyping();
          setValue(text);
        }}
        value={value}
        style={styles.in_field}></TextInputMask >
    </View>
  );
};
const styles = StyleSheet.create({
  in_field: {
    backgroundColor: '#fff',
    marginHorizontal: 30,
    marginVertical: 12,
    borderRadius: 12,
    width: '85%',
    paddingHorizontal: 20,
    paddingTop: 18,
    paddingBottom: 2,
    height: 60,
  },
  in_box: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
  },
  //   blank: {
  //     color: '#000',
  //     position: 'absolute',
  //     zIndex: 5,
  //     top: 30,
  //     left: 50,
  //   },
  typing: {
    color: '#999',
    position: 'absolute',
    zIndex: 5,
    left: 50,
    fontSize: 12,
  },
  in_placeholder: {
    color: '#000',
    position: 'absolute',
    zIndex: 5,
    //top: 30,
    left: 50,
  },
});
