import React, { Component } from "react";

import styles from "./style";
import {Keyboard, Text, View, TextInput, Alert, TouchableOpacity, StatusBar} from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const appId = "1047121222092614"

export default class LoginScreen extends Component {
    state = {
      login: '',
      senha: '',
    }

    handleLogin = text => {
      this.setState({ login: text });
    }

    handlePassword = text => {
      this.setState({ password: text });
    }

  render() {
    return (
      <View style={styles.containerView}>
        <StatusBar barStyle="dark-content" backgroundColor="#FFF"/>
        <View style={styles.loginScreenContainer}>
          <View style={styles.loginFormView}>
          <Text style={styles.logoText}>Performing Tasks <Icon name="alarm" size={50} /></Text>
            <TextInput placeholder="Username" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} onChangeText={this.handleLogin}/>
            <TextInput placeholder="Password" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true} onChangeText={this.handlePassword}/>
            <View style={styles.buttonsContainer}>
              <Button
                buttonStyle={styles.loginButton}
                onPress={() => this.onLoginPress()}
                title="Login"
              />
              <Button
                buttonStyle={styles.fbLoginButton}
                onPress={() => this.onFbLoginPress()}
                title="Login via Facebook"
              />
              <Button
                buttonStyle={styles.buttonGoogle}
                title="Login via Google"
              />
                <TouchableOpacity
                  style={styles.cadastro}
                  onPress={this.onPress}
                >
                <Text style={styles.textCadastro}> Deseja se cadastrar? Clique aqui! </Text>
                </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  onLoginPress() {
    if(this.state.login === 'giovannibasseto@gmail.com' || this.state.login === 'weslleytoneto@gmail.com') {
      if(this.state.password === '123456') {
        this.props.navigation.navigate('Main');
        return;
      }
    }
  }

  async onFbLoginPress() {
    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(appId, {
      permissions: ['public_profile', 'email'],
    });
    if (type === 'success') {
      const response = await fetch(
        `https://graph.facebook.com/me?access_token=${token}`);
      Alert.alert(
        'Logged in!',
        `Hi ${(await response.json()).name}!`,
      );
    }
  }
}