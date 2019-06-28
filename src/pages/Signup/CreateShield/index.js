import React, { Component } from 'react';
import {
  StyleSheet, View, TouchableOpacity, Image, FlatList,
} from 'react-native';
import { Text, ButtonGroup, Icon } from 'react-native-elements';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#141414',
    flex: 1,
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
    marginTop: 16,
  },
  containerModelSelect: {
    flexDirection: 'row',
    height: '50%',
    marginTop: 16,
    alignItems: 'center',
    marginBottom: 16,
  },
  containerButtonGroup: {
    height: 40,
    backgroundColor: '#1E1E1E',
    borderWidth: 0,
    marginTop: -32,
  },
  selectedButtonGroup: {
    backgroundColor: '#707375',
  },
  selectedButtonGroupText: {
    fontWeight: 'bold',
  },
  innerBorderButtonGroup: {
    color: '#3A3A3C',
  },
  arrowContainer: {
    height: 60,
    alignItems: 'center',
  },
  shieldBack: {
    marginLeft: 16,
    marginRight: 16,
  },
  patternsList: {
    marginTop: 16,
  },
  patternsList2: {
    marginTop: -16,
  },
  itemList: {
    paddingHorizontal: 4,
  },
  backShieldSelectContainer: {
    marginTop: -56,
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 42,
  },
});

export default class CreateShield extends Component {
  constructor() {
    super();
    this.state = {
      selectedIndex: 0,
      data: [
        { uri: require('~/assets/signup/buttons/patterns/img-padrao-1-selecionar.png') }, 
        { uri: require('~/assets/signup/buttons/patterns/img-padrao-2-selecionar.png') },
        { uri: require('~/assets/signup/buttons/patterns/img-padrao-3-selecionar.png') },
        { uri: require('~/assets/signup/buttons/patterns/img-padrao-4-selecionar.png') },
        { uri: require('~/assets/signup/buttons/patterns/img-padrao-5-selecionar.png') },
        { uri: require('~/assets/signup/buttons/patterns/img-padrao-6-selecionar.png') },
        { uri: require('~/assets/signup/buttons/patterns/img-padrao-7-selecionar.png') },

      ],
      data2: [
        { uri: require('~/assets/signup/buttons/patterns/img-padrao-8-selecionar.png') },
        { uri: require('~/assets/signup/buttons/patterns/img-padrao-9-selecionar.png') },
        { uri: require('~/assets/signup/buttons/patterns/img-padrao-10-selecionar.png') },
      ],
    };

    this.updateIndex = this.updateIndex.bind(this);
  }

  updateIndex(selectedIndex) {
    this.setState({ selectedIndex });
  }

  render() {
    const buttons = ['PADRÕES', 'CORES', 'ORNAMENTOS'];
    const { selectedIndex } = this.state;
    const currentShieldBack = require('~/assets/signup/shield-backs/escudo-1-fundo.png');


    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>BAR SEM LONA FUTEBOL CLUBE</Text>

          <View style={styles.containerModelSelect}>

            <View style={styles.backShieldSelectContainer}>

            <TouchableOpacity style={styles.arrowContainer}>
              <Icon
                name="chevron-left"
                type="font-awesome"
                color="#fff"
                size={56}
              />
            </TouchableOpacity>
            <View>
              <Image style={styles.shieldBack} source={currentShieldBack} />
            </View>
            <TouchableOpacity style={styles.arrowContainer}>
              <Icon
                name="chevron-right"
                type="font-awesome"
                color="#fff"
                size={56}
              />
            </TouchableOpacity>
          </View>
          </View>
          <ButtonGroup
            onPress={this.updateIndex}
            selectedIndex={selectedIndex}
            buttons={buttons}
            containerStyle={styles.containerButtonGroup}
            selectedButtonStyle={styles.selectedButtonGroup}
            selectedTextStyle={styles.selectedButtonGroupText}
            innerBorderStyle={styles.innerBorderButtonGroup}
          />

          <FlatList
            style={styles.patternsList}
            numColumns={7}
            data={this.state.data}
            keyExtractor={item => item.uri}
            renderItem={({ item }) => (
              <View style={styles.itemList} >
                <Image style={styles.imageItemList} source={item.uri}></Image>
              </View>
            )}
          />

          <FlatList
            style={styles.patternsList2}
            numColumns={6}
            data={this.state.data2}
            keyExtractor={item => item.uri}
            renderItem={({ item }) => (
              <View style={styles.itemList} >
                <Image style={styles.imageItemList} source={item.uri}></Image>
              </View>
            )}
          />

        </View>
      </View>

    );
  }
}
