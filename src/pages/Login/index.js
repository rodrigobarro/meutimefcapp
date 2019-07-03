import React from 'react';
import {
  View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity,
} from 'react-native';

import { Button, Input } from 'react-native-elements';

// import {TextInputMask} from 'react-native-masked-text';

// eslint-disable-next-line react/prefer-stateless-function
export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
    };
  }

  ShowHideComponent = () => {
    if (this.state.show == true) {
      this.setState({ show: false });
    } else {
      this.setState({ show: true });
    }
  };

  render() {
    return (
      <ImageBackground
        source={require('../../assets/soccer-background.jpg')}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <Image source={require('../../assets/logo.png')} style={styles.logo} />
        <Image source={require('../../assets/escale.png')} style={styles.escale} />
        <Text style={styles.accessTitle}>ACESSE SUA CONTA</Text>
        {this.state.show ? (
          <View style={{ width: '100%' }}>
          <Text style={styles.labelInput}>E-mail</Text>

            <Input
              containerStyle={styles.containerInput}
              inputStyle={styles.input}
              placeholderTextColor="#999999"
              placeholder="Digite seu E-mail"
     
            />
            <Text style={styles.labelInput}>Senha</Text>

            <Input
              containerStyle={styles.containerInput}
              inputStyle={styles.input}
              placeholderTextColor="#999999"
              placeholder="Digite sua senha"

            />
          </View>
        ) : (
          <View style={{width: '100%'}}>
          <Text style={styles.labelInput}>DIGITE O NÚMERO DO SEU CELULAR</Text>
            <Input
              containerStyle={styles.containerInput}
              inputStyle={styles.input}
              placeholderTextColor="#999999"
              placeholder="+55 (00) 00000-0000"
            />
          </View>
          
        )}

        <TouchableOpacity onPress={this.ShowHideComponent}>
          <Text style={styles.usePhoneNumber}>
            {this.state.show ? 'Usar número do seu celular' : 'Usar E-mail'}
          </Text>
        </TouchableOpacity>

        <Button
          title="ENTRAR"
          titleStyle={styles.buttonTitle}
          buttonStyle={styles.button}
          containerStyle={styles.buttonContainer}
        //onPress={() => this.props.navigation.navigate('Signup')}
        />

        {this.state.show ? (
          <TouchableOpacity onPress={() => this.props.navigation.navigate('RecoverPass')}>
            <Text style={styles.passwordRecovery}>Recuperar senha</Text>
          </TouchableOpacity>
        ) : null}

        <View style={styles.divider} />

        <View style={styles.container}>
          <Text style={styles.isCustomer}>Ainda não tem uma conta?</Text>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Signup')}>
          <Text style={styles.clickHere}>Cadastre-se</Text>

          </TouchableOpacity>
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
    height: 24,
  },
  accessTitle: {
    fontSize: 18,
    color: '#ffffff',
    paddingBottom: 8,
    marginTop: -32,
    fontFamily: 'oswaldBold',
  },
  containerInput: {
    marginBottom: 6,
    paddingHorizontal: 16,
    marginTop: -6,
  },
  labelInput: {
    color: '#ffffff',
    fontSize: 16,
    paddingBottom: 4,
    fontFamily: 'oswaldRegular',
    alignSelf: 'flex-start',
    marginLeft: 16,
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
    fontFamily: 'oswaldRegular',
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
    fontSize: 16,
    fontFamily: 'oswaldRegular',
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
    fontFamily: 'oswaldRegular',
    fontSize: 16,
    paddingHorizontal: 2,
    paddingBottom: 8,
    textDecorationLine: 'underline',
  },
  divider: {
    marginTop: 32,
    borderBottomColor: '#FFFFFF',
    borderBottomWidth: 1,
    width: '90%',
  },
});
