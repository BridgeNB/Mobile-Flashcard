import React, { Component } from 'react';
import { View } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../reducers/index';
import { StackNavigator, TabNavigator } from 'react-navigation';
import NewDeck from './deck/NewDeck';
import DeckList from './deck/DeckList';
import DeckDetail from './deck/DeckDetail';
import Quiz from './quiz/Quiz';
import NewQuestion from './questions/NewQuestion';

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
});

const AppNavigator = StackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: { title: 'Home'}
  },
  DeckDetail: {
    screen: DeckDetail,
    navigationOptions: {
      title: 'DeckDetail',
      headerTintColor: '#000',
    },
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      title: 'Quiz',
      headerTintColor: '#000',
    },
  },
  NewQuestion: {
    screen: NewQuestion,
    navigationOptions: {
      title: 'Add Question',
      headerTintColor: '#000',
    },
  },
});

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
