import React, { Component } from 'react';
import { View } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../reducers/index';
import { StackNavigator, TabNavigator } from 'react-navigation';
import NewDeck from './deck/NewDeck';
import DeckList from './deck/DeckList';


const Tabs = TabNavigator({
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'All Decks'
    },
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      tabBarLabel: 'New Deck',
    },
  },
})

const AppNavigator = StackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: { title: 'Home'}
  }
})

class Index extends Component {
  render() {
    return <Provider store={createStore(reducer)}>
      <View style={{flex: 1}}>
        <AppNavigator />
      </View>
    </Provider>
  }
}

export default Index;
