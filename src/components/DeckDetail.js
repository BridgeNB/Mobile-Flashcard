import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Alert, ActivityIndicator } from 'react-native';
import { fetchDeck } from '../utils/storageApi';
import { getDeck } from '../actions/index';

class DeckDetail extends Component {

  render() {

    let {title} = this.props.navigation.state.params;
    const questions = this.props.decks[title] && this.props.decks[title].questions;
    return (
        <View style={styles.container}>
            <View style={styles.cardIntro}
              >
                <Text style={{fontSize: 40}}>{title}</Text>
                <Text style={{fontSize: 20, marginTop: 10}}>{questions.length} cards
                </Text>
            </View>

            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    this.props.navigation.navigate('NewQuestion', {
                        title,
                        questions,
                    });
                }}
            >
                <Text style={styles.text}>Add Question</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                disabled={questions.length == 0}
                onPress={() => {
                    this.props.navigation.navigate('Quiz', {
                        title,
                        questions,
                    });
                }}
              >
                <Text style={styles.text}>Start Quiz</Text>
            </TouchableOpacity>

        </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
  },
  cardIntro: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'black',
    padding: 10,
    height: 40,
    margin: 16,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  }
})

function mapStateToProps (state) {
  return {
    decks: state,
  }
}


export default connect(mapStateToProps)(DeckDetail);
