import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';

class DeckDetail extends Component {
  render() {
    let title = this.props.navigation.state.params.title;
    let questions = this.props.navigation.state.params.questions;
    return (
        <View style={styles.container}>
            <View style={styles.cardIntro}
              >
                <Text style={{fontSize: 36}}>{title}</Text>
                <Text style={{fontSize: 22, marginTop: 12}}>{questions.length} cards
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

export default DeckDetail;
