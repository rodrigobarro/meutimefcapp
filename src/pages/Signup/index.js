/* eslint-disable no-use-before-define */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Button, Input, Text, } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Signup extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <Text style={styles.labelInput}>QUAL O NOME DO SEU TIME?</Text>
          <Input
            containerStyle={styles.containerInput}
            inputStyle={styles.input}
            placeholderTextColor="#999999"
            placeholder="Ex.: Arrasador Futebol Clube"
            underlineColorAndroid="transparent"
          />
          <Text style={styles.inputRestrictions}>2 a 30 caracteres (só letras e números)</Text>
          
          <Text style={styles.labelInput}>QUAL O NOME DO SEU TÉCNICO?</Text>
          <Input
            containerStyle={styles.containerInput}
            inputStyle={styles.input}
            placeholderTextColor="#999999"
            placeholder="Ex.: Murici Mourinho"
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
            //onPress={() => this.props.navigation.navigate('CreateShield')}
          />
        </View>
        {/*
        <View style={styles.bottomImageContainer}>
          <Image style={styles.bottomImage} source={require('../../assets/background.png')} />
        </View> */}
       
             
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
    marginTop: 56,
    width: '100%',
    flex: 1,
    alignItems: 'center',
  },
  labelInput: {
    color: '#ffffff',
    fontSize: 16,
    paddingBottom: 4,
    fontFamily: 'oswaldRegular',
    alignSelf: 'flex-start',
    marginLeft: 16,
  },
  containerStyleButton: {
    width: '90%',
    marginTop: 8,
    backgroundColor: '#9A9B9F',
  },
  bottomImageContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    marginTop: -32,
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
    fontFamily: 'oswaldRegular',
  },
  input: {
    backgroundColor: '#3A3A3C',
    borderRadius: 8,
    paddingHorizontal: 16,
    height: 8,
  },
  containerInput: {
    marginBottom: 4,
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
