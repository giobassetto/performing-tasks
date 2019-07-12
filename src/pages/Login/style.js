const React = require("react-native");

const { StyleSheet } = React;

export default {

containerView: {
  flex: 1,
},
loginScreenContainer: {
  flex: 1,
},
logoText: {
  fontSize: 40,
  fontWeight: "800",
  marginTop: 150,
  marginBottom: 30,
  textAlign: 'center',
},
loginFormView: {
  flex: 1
},
loginFormTextInput: {
  height: 65,
  fontSize: 14,
  borderRadius: 5,
  borderWidth: 1,
  borderColor: '#eaeaea',
  backgroundColor: '#fafafa',
  paddingLeft: 10,
  marginLeft: 15,
  marginRight: 15,
  marginTop: 5,
  marginBottom: 5,

},
loginButton: {
  height: 50,
  width: 350,
  marginTop: 25,
  borderRadius: 10,
  backgroundColor: '#001'
},
fbLoginButton: {
  height: 45,
  width: 350,
  marginTop: 25,
  borderRadius: 10,
  backgroundColor: '#3897f1',
},
buttonGoogle: {
  height: 45,
  width: 350,
  marginTop: 25,
  borderRadius: 10,
  backgroundColor: '#F00',

},
buttonsContainer: {
  flex: 1,
  flexDiretion: 'row',
  alignItems: 'center'
},
cadastro: {
  marginTop: 10,
},
textCadastro: {
  fontWeight:'bold',
  fontSize: 20,
  color: '#666'
}
};
