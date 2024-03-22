import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Button,
  Image,
} from 'react-native';
import {showMessage} from 'react-native-flash-message';

import {Images} from '../assets';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState();

  const onLogin = () => {
    if (email === 'reactnative@tot.com' && password === 'Tot@123') {
      navigation.navigate('DashboardStack');
    } else {
      showMessage({
        message: 'Please enter valid credentials',
        type: 'danger',
        duration: 2000,
      });
    }
  };

  return (
    <View style={Styles.container}>
      <View style={Styles.sunContainer}>
        <View style={{alignItems: 'center'}}>
          <View style={Styles.imgvw}>
            <Image source={Images.flower} style={{height: 35, width: 35}} />
          </View>
        </View>
        <View style={Styles.loginVw}>
          <Text style={Styles.heading}>LOGIN</Text>
        </View>
        <View style={Styles.inputMainContainer}>
          <View style={Styles.inputSubContainer}>
            <Image
              source={Images.fillHome}
              style={{height: 15, width: 15, marginEnd: 10}}
            />
            <TextInput
              style={{marginHorizontal: 10}}
              value={email}
              onChangeText={text => setEmail(text)}
              placeholder="Email"
            />
          </View>
          <View style={[Styles.inputSubContainer, {marginTop: 10}]}>
            <Image
              source={Images.fillFlow}
              style={{height: 15, width: 15, marginEnd: 10}}
            />
            <TextInput
              style={{marginHorizontal: 10}}
              value={password}
              onChangeText={text => setPassword(text)}
              secureTextEntry={true}
              placeholder="Password"
            />
          </View>
        </View>
        <View style={{flex: 1, marginHorizontal: 10}}>
          <TouchableOpacity style={Styles.btn} onPress={() => onLogin()}>
            <Text style={{fontSize: 20, fontWeight: '500'}}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sunContainer: {
    backgroundColor: 'lightgrey',
    marginVertical: 50,
    flex: 1,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  heading: {
    fontSize: 30,
    fontWeight: '700',
  },
  imgvw: {
    alignItems: 'center',
    bottom: 25,
    height: 50,
    aspectRatio: 1,
    backgroundColor: 'white',
    borderRadius: 100,
    justifyContent: 'center',
  },
  loginVw: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  inputMainContainer: {flex: 1, marginHorizontal: 10},
  inputSubContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    alignItems: 'center',
    marginHorizontal: 5,
  },

  input: {
    // width: 350,
    fontSize: 16,
    borderBottomWidth: 1,
    borderColor: 'gray',
    paddingVertical: 10,
    marginVertical: 10,
    marginHorizontal: 5,
  },
  btn: {
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',

    marginTop: 15,
    padding: 10,
    borderRadius: 5,
  },
});
export default LoginScreen;
