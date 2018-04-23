import React, { Component } from 'react';
import { View } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../reducers/index';
import { StackNavigator, TabNavigator } from 'react-navigation';
import NewDeck from './NewDeck';
import DeckList from './DeckList';
import DeckDetail from './DeckDetail';
import Quiz from './Quiz';
import NewQuestion from './NewQuestion';
import { setLocalNotification } from '../utils/notifications';

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
  componentDidMount() {
    setLocalNotification()
  }
  render() {
    return <Provider store={createStore(reducer)}>
      <View style={{flex: 1}}>
        <AppNavigator />
      </View>
    </Provider>
  }
}

export default Index;
