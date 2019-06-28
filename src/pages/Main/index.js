import React from 'react';
import {
 Text, View, StyleSheet, TouchableHighlight, Image, ImageBackground, Modal 
} from 'react-native';

import { Button } from 'react-native-elements';

export default class Main extends React.Component {
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

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
        <Text style={styles.noAccountQuestion}>Ainda não tem uma conta?</Text>
        <Button
          title="CRIE SEU TIME AGORA"
          titleStyle={styles.titleCreateNewTeam}
          buttonStyle={styles.buttonCreateNewTeam}
          onPress={() => this.props.navigation.navigate('Signup')}
        />
        <View style={styles.container}>
          <Text style={styles.isCustomer}>Já tem conta?</Text>
          <TouchableHighlight 
            onPress={() => this.props.navigation.navigate('Login')}
          >
          <Text style={styles.clickHere}>Acesse aqui</Text>
          </TouchableHighlight>
          
        </View>

        <View style={styles.leagueContainer}>
          <Image
            style={styles.league}
            source={require('../../assets/copa_america.png')}
          />
          <Image
            style={styles.league}
            source={require('../../assets/copa_libertadores.png')}
          />
          <Image
            style={styles.league}
            source={require('../../assets/premier_league.png')}
          />
          <Image
            style={styles.league}
            source={require('../../assets/champions_league.png')}
          />
        </View>
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>Powered by Fabrica 18</Text>
          <Text style={styles.footerText}>
            {'\u00A9'}2019 - Todos os direitos reservados
          </Text>
        </View>

        <View>
          <Modal
          animationType="slide"
          backgroundColor="#222222"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}
        >
          <View style={{ marginTop: 22 }}>
            <View>
              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}
              >
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

          <TouchableHighlight
            onPress={() => {
            this.setModalVisible(true);
          }}
          >
            <Text>Show Modal</Text>
          </TouchableHighlight>
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
  },
  escale: {
    resizeMode: 'center',
    // todo:corrigir
    marginTop: -64,
  },
  noAccountQuestion: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    paddingHorizontal: 20,
    paddingBottom: 4,
  },
  buttonCreateNewTeam: {
    backgroundColor: '#FFCC28',
    borderRadius: 12,
  },
  titleCreateNewTeam: {
    color: '#2A2627',
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
  isCustomer: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    paddingHorizontal: 2,
    paddingBottom: 4,
  },
  container: {
    paddingTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  leagueContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingBottom: 8,
  },
  league: {
    width: 72,
    height: 72,
    paddingTop: 4,
    margin: 4,
  },
  footerContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 48,
  },
  footerText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
