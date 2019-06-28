import React, { Component } from 'react';
import {
  StyleSheet, View, TouchableOpacity, Image,
} from 'react-native';
import { Text, Icon, Button } from 'react-native-elements';

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
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    marginTop: 12,
  },
  containerClothesSelect: {
    flexDirection: 'row',
    height: '30%',
    marginTop: 36,
    alignItems: 'center',
    marginBottom: 8,
  },
  arrowContainer: {
    height: 60,
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  backShieldSelectContainer: {
    marginTop: 16,
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomImage: {
    resizeMode: 'cover',
  },
  containerStyleButton: {
    width: '90%',
    marginTop: 16,
    backgroundColor: '#5C9C23',
  },
  buttonStyle: {
    backgroundColor: '#5C9C23',
    borderRadius: 10,
    height: 48,
  },
  buttonTitleStyle: {
    marginRight: 60,
    marginLeft: 60,
    fontWeight: 'bold',
  },
});

export default class SelectClothes extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>CARLOS ADÃO</Text>

          <View style={styles.containerClothesSelect}>
            <View style={styles.backShieldSelectContainer}>
              <TouchableOpacity style={styles.arrowContainer}>
                <Icon name="chevron-left" type="font-awesome" color="#fff" size={50} />
              </TouchableOpacity>
              <View>
                <Image
                  style={styles.shieldBack}
                  source={require('~/assets/signup/coach/vestimenta-01.png')}
                />
              </View>
              <TouchableOpacity style={styles.arrowContainer}>
                <Icon name="chevron-right" type="font-awesome" color="#fff" size={50} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Button
          containerStyle={styles.containerStyleButton}
          buttonStyle={styles.buttonStyle}
          icon={<Icon name="chevron-right" size={48} color="white" />}
          iconContainerStyle={{ marginLeft: 80 }}
          iconRight
          titleStyle={styles.buttonTitleStyle}
          title="TÁ NA GRIFE. BORA!!!"
          onPress={() => alert('ola')}
        />
        <Image style={styles.bottomImage} source={require('~/assets/background.png')} />
      </View>
    );
  }
}
