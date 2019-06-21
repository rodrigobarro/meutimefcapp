/* eslint-disable no-use-before-define */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Signup extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <Input
            containerStyle={styles.containerInput}
            inputStyle={styles.input}
            placeholderTextColor="#999999"
            placeholder="Ex.: Arrasador Futebol Clube"
            label="QUAL O NOME DO SEU TIME?"
            labelStyle={styles.labelInput}
            underlineColorAndroid="transparent"
          />
          <Text style={styles.inputRestrictions}>2 a 30 caracteres (só letras e números)</Text>
          <Input
            containerStyle={styles.containerInput}
            inputStyle={styles.input}
            placeholderTextColor="#999999"
            placeholder="Ex;: Murici Mourinho"
            label="QUAL O NOME DO SEU TÉCNICO"
            labelStyle={styles.labelInput}
          />
          <Text style={styles.inputRestrictions}>2 a 30 caracteres (só letras e números)</Text>

          <Button
            containerStyle={styles.containerStyleButton}
            buttonStyle={styles.buttonStyle}
            icon={<Icon name="chevron-right" size={22} color="white" />}
            iconContainerStyle={{ marginLeft: 100 }}
            iconRight
            titleStyle={styles.buttonTitleStyle}
            title="BOOOORAAAA!!!"
          />
        </View>
        <View style={styles.bottomImageContainer}>
          <Image style={styles.bottomImage} source={require('../../assets/background.png')} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#141414',
    flex: 1,
  },
  formContainer: {
    paddingHorizontal: 8,
    marginTop: 72,
    width: '100%',
    flex: 1,
    alignItems: 'center',
  },
  labelInput: {
    color: '#ffffff',
    fontSize: 16,
    paddingBottom: 4,
  },
  containerStyleButton: {
    width: '90%',
    marginTop: 32,
    backgroundColor: '#9A9B9F',
  },
  bottomImageContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    width: '100%',
    alignItems: 'center',
  },
  bottomImage: {
    resizeMode: 'cover',
  },
  buttonStyle: {
    backgroundColor: '#9A9B9F',
    borderRadius: 10,
    height: 48,
  },
  buttonTitleStyle: {
    marginRight: 60,
    marginLeft: 60,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#3A3A3C',
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
