/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  Image,
  ImageBackground,
  Modal,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';

import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import PrivacyModal from '~/pages/Main/Modal/PrivacyModal';
import TermsModal from '~/pages/Main/Modal/TermsModal';

export default class Main extends React.Component {
  state = {
    modalVisible: false,
    subModalVisible: false,
    currentModal: '',
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  setSubModalVisible(visible) {
    this.setState({ subModalVisible: visible });
  }

  _keyExtractor = (item, key) => item.key;

  handleModalItemSelect(visible, item) {
    switch (item.type) {
      case 'regulamento':
        this.setState({ subModalVisible: visible });
        this.setState({ currentModal: item.type});
        break;
      case 'termo':
        this.setState({ subModalVisible: visible });
        this.setState({ currentModal: item.type});
        break;
      case 'privacidade':
        this.setState({ subModalVisible: visible });
        this.setState({ currentModal: item.type});
        break;
      default:
    }
  }

  render() {
    return (
      <ImageBackground
        source={require('../../assets/soccer-background.jpg')}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <TouchableOpacity
          onPress={() => this.setModalVisible(true)}
          style={{
            width: '100%',
            justifyContent: 'flex-start',
            paddingLeft: 16,
            paddingTop: 16,
          }}
        >
          <Icon type="font-aewsome" name="bars" size={28} />
        </TouchableOpacity>

        <Image source={require('../../assets/logo.png')} style={styles.logo} />
        <Image source={require('../../assets/escale.png')} style={styles.escale} />
        <Text style={styles.noAccountQuestion}>Ainda não tem uma conta?</Text>
        <Button
          title="CRIE SEU TIME AGORA"
          titleStyle={styles.titleCreateNewTeam}
          buttonStyle={styles.buttonCreateNewTeam}
          onPress={() => this.props.navigation.navigate('Signup')}
        />
        <View style={styles.container}>
          <Text style={styles.isCustomer}>Já tem conta?</Text>
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Login')}>
            <Text style={styles.clickHere}>Acesse aqui</Text>
          </TouchableHighlight>
        </View>

        <View style={styles.leagueContainer}>
          <Image style={styles.league} source={require('../../assets/copa_america.png')} />
          <Image style={styles.league} source={require('../../assets/copa_libertadores.png')} />
          <Image style={styles.league} source={require('../../assets/premier_league.png')} />
          <Image style={styles.league} source={require('../../assets/champions_league.png')} />
        </View>
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>Powered by Fabrica 18</Text>
          <Text style={styles.footerText}>{'\u00A9'}2019 - Todos os direitos reservados</Text>
        </View>

        <View>
          <Modal animationType="slide" transparent={false} visible={this.state.modalVisible}>
            <View style={{ backgroundColor: '#000000', width: '100%', height: '100%' }}>
              <TouchableOpacity
                style={{
                  width: '100%',
                  alignSelf: 'center',
                  marginTop: 16,
                  marginRight: 16,
                }}
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}
              >
                <Icon
                  type="font-aewsome"
                  name="times"
                  size={36}
                  color="white"
                  style={{
                    alignSelf: 'flex-end',
                    paddingRight: 16,
                    paddingTop: 8,
                    marginBottom: 4,
                  }}
                />
              </TouchableOpacity>

              <FlatList
                data={[
                  { key: 'REGULAMENTO', type: 'regulamento' },
                  { key: 'GANHADORES', type: 'ganhadores' },
                  { key: 'TERMOS DE USO', type: 'termo' },
                  { key: 'POLÍTICA DE PRIVACIDADE', type: 'privacidade' },
                  { key: '', modal: '' },
                ]}
                style={{ paddingTop: -16 }}
                ItemSeparatorComponent={() => (
                  <View style={{ height: 0.5, width: '100%', backgroundColor: '#2F2E2E' }} />
                )}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={{
                      height: 60,
                      marginLeft: 16,
                    }}
                    onPress={() => {
                      this.handleModalItemSelect(!this.state.subModalVisible, item);
                    }}
                  >
                    <View
                      style={{
                        height: '100%',
                        backgroundColor: 'black',
                        flex: 1,
                        justifyContent: 'center',
                      }}
                    >
                      <Text style={{ color: 'white', fontSize: 16 }}>{item.key}</Text>
                    </View>
                  </TouchableOpacity>
                )}
              />
              <ScrollView>

              </ScrollView>
            </View>
          </Modal>
        </View> 
        <View>
          <Modal animationType="fade" transparent visible={this.state.subModalVisible}>
            <View style={styles.card}>
              <TouchableOpacity
                style={{
                  width: '100%',
                  alignSelf: 'center',
                  marginTop: 16,
                  marginRight: 16,
                }}
                onPress={() => {
                  this.setSubModalVisible(!this.state.subModalVisible);
                }}
              >
                <Icon
                  type="font-aewsome"
                  name="times"
                  size={36}
                  color="white"
                  style={{
                    alignSelf: 'flex-end',
                    paddingRight: 16,
                    paddingTop: 8,
                    marginBottom: 4,
                  }}
                />
              </TouchableOpacity>
                <ScrollView>
                {(() => {
                  switch(this.state.currentModal) {
                    case 'regulamento':
                      return <TermsModal  />;
                    case 'privacidade':
                      return <PrivacyModal  />;
                    case 'termo':
                      return <TermsModal  />;
                    default:
                      return null;
                  }
                })()}
              </ScrollView>
            </View>
          </Modal>
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
  card: {
    marginTop: 32,
    backgroundColor: '#000000',
    borderWidth: 0.5,
    borderColor: '#8B8D8F',
    marginLeft: 16,
    marginRight: 16,
    borderRadius: 12,
    height: '90%',
    alignItems: 'center',
  },
});
