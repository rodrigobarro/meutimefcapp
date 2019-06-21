import React from 'react';
import {
  View, Text, StyleSheet, Image, ImageBackground,
} from 'react-native';

import { Button, Input } from 'react-native-elements';

// eslint-disable-next-line react/prefer-stateless-function
export default class Login extends React.Component {
  render() {
    return (
      <ImageBackground
        source={require('../../assets/soccer-background.jpg')}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <Image source={require('../../assets/logo.png')} style={styles.logo} />
        <Image
          source={require('../../assets/escale.png')}
          style={styles.escale}
        />
        <Text style={styles.accessTitle}>ACESSE SUA CONTA</Text>
        <Input
          containerStyle={styles.containerInput}
          inputStyle={styles.input}
          placeholderTextColor="#999999"
          placeholder="Digite seu email"
          label="Email"
          labelStyle={styles.labelInput}
        />
        <Input
          containerStyle={styles.containerInput}
          inputStyle={styles.input}
          placeholderTextColor="#999999"
          placeholder="Digite sua senha"
          label="Senha"
          labelStyle={styles.labelInput}
        />

        <Text style={styles.usePhoneNumber}>Usar número do seu celular</Text>

        <Button
          title="ENTRAR"
          titleStyle={styles.buttonTitle}
          buttonStyle={styles.button}
          containerStyle={styles.buttonContainer}
          onPress={() => this.props.navigation.navigate('Signup')}
        />

        <Text style={styles.passwordRecovery}>Recuperar senha</Text>

        <View
          style={{
            marginTop: 16,
            borderBottomColor: '#FFFFFF',
            borderBottomWidth: 1,
            width: '90%',
          }}
        />

        <View style={styles.container}>
          <Text style={styles.isCustomer}>Ainda não tem uma conta?</Text>
          <Text style={styles.clickHere}>Cadastre-se</Text>
        </View>

      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: '100%',
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    resizeMode: 'center',
    marginTop: -24,
    width: '36%',
  },
  escale: {
    resizeMode: 'center',
    // todo:corrigir
    marginTop: -96,
    width: '70%',
  },
  input: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    paddingHorizontal: 16,
    height: 8,
  },
  accessTitle: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: 'bold',
    paddingBottom: 8,
    marginTop: -32,
  },
  containerInput: {
    marginBottom: 6,
    paddingHorizontal: 16,
  },
  labelInput: {
    color: '#ffffff',
    fontSize: 16,
    paddingBottom: 4,
  },
  buttonContainer: {
    marginTop: 8,
    width: '90%',
  },
  button: {
    backgroundColor: '#2D8E43',
    borderRadius: 12,
    height: 40,
  },
  buttonTitle: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 18,
    marginVertical: 6,
    paddingHorizontal: 32,
  },
  clickHere: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    paddingHorizontal: 2,
    paddingBottom: 4,
    textDecorationLine: 'underline',
  },
  passwordRecovery: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    paddingHorizontal: 2,
    paddingBottom: 4,
    marginTop: 12,
    textDecorationLine: 'underline',
  },
  container: {
    paddingTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 12,

  },
  isCustomer: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    paddingHorizontal: 2,
    paddingBottom: 4,
  },
  usePhoneNumber: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    paddingHorizontal: 2,
    paddingBottom: 8,
    textDecorationLine: 'underline',
  },
});
