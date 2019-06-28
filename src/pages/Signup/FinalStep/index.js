import React, { Component } from 'react';
import {
  StyleSheet, View, TouchableOpacity, Image,
} from 'react-native';
import { Text, Icon, Button, Input } from 'react-native-elements';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#141414',
    flex: 1,
    alignItems: 'center',
  },
  card: {
    marginTop: 56,
    backgroundColor: '#3A3A3C',
    borderWidth: 0,
    marginLeft: 16,
    marginRight: 16,
    borderRadius: 12,
    width: '92%',
    alignItems: 'center',
  },
  assetTitle: {
    fontSize: 12,
    color: 'white',
    fontWeight: 'bold',
    marginTop: 12,
  },

  bottomImage: {
    resizeMode: 'cover',
  },
  containerStyleButton: {
    width: '90%',
    marginTop: 16,
  },
  buttonStyle: {
    backgroundColor: '#9A9B9F',
    borderRadius: 10,
    height: 48,
  },
  buttonTitleStyle: {
    marginRight: 40,
    marginLeft: 40,
    fontWeight: 'bold',
  },
  labelInput: {
    color: '#ffffff',
    fontSize: 14,
    paddingBottom: 4,
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 8,
    paddingHorizontal: 16,
    height: 8,
  },
  containerInput: {
    marginBottom: 6,
    paddingHorizontal: 16,
  },
  inputRestrictions: {
    fontSize: 12,
    color: '#626262',
    textAlign: 'left',
    width: '100%',
    marginLeft: 36,
    marginBottom: 16,
  },
});

export default class FinalStep extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={{width: '80%',flexDirection: 'row', justifyContent: 'space-around'}}>
            <View style={{width: '50%', alignItems: 'center'}}>
              <Text style={styles.assetTitle}>CARLOS ADÃO</Text>
              <Image
                style={styles.shieldBack}
                source={require('~/assets/signup/coach/vestimenta-01.png')}
              />
            </View>
            <View style={{width: '50%', alignItems: 'center'}}>
              <Text style={styles.assetTitle}>TRIDENT FUTEBOL CLUBE</Text>
              <Image
                style={styles.shieldBack}
                source={require('~/assets/signup/shield-backs/escudo-1-fundo.png')}
              />
            </View>
          </View>

          <Input
            containerStyle={styles.containerInput}
            inputStyle={styles.input}
            placeholderTextColor="#999999"
            placeholder="Ex.: Arrasador Futebol Clube"
            label="ENTRE COM SEU E-MAIL"
            labelStyle={styles.labelInput}
            underlineColorAndroid="transparent"
          />
          <Input
            containerStyle={styles.containerInput}
            inputStyle={styles.input}
            placeholderTextColor="#999999"
            placeholder="Ex.: Murici Mourinho"
            label="CRIE SUA SENHA"
            labelStyle={styles.labelInput}
          />
          <Text style={styles.inputRestrictions}>Pelo menos 6 caracteres</Text>

          <View style={{flexDirection: 'row', marginBottom: 16}}>
            <Text style={{fontSize: 12, color: 'white', fontWeight: 'bold'}}>Você aceita os</Text>
            <Text style={{fontSize: 12, color: 'white', fontWeight: 'bold', textDecorationLine: 'underline'}}> Termos de Uso</Text>
            <Text style={{fontSize: 12, color: 'white', fontWeight: 'bold'}}> e a </Text>
            <Text style={{fontSize: 12, color: 'white', fontWeight: 'bold', textDecorationLine: 'underline'}}>Política de Privacidade?</Text>
          </View>
        </View>

        <Button
          containerStyle={styles.containerStyleButton}
          buttonStyle={styles.buttonStyle}
          icon={<Icon name="chevron-right" size={48} color="white" />}
          iconContainerStyle={{ marginLeft: 56 }}
          iconRight
          titleStyle={styles.buttonTitleStyle}
          title="ACEITO. BORA PRO JOGO!"
          onPress={() => alert('ola')}
        />
        <Image style={styles.bottomImage} source={require('~/assets/background.png')} />
      </View>
    );
  }
}
