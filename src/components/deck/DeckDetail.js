import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';

class DeckDetail extends Component {
  render() {
    let title = this.props.navigation.state.params.title;
    let questions = this.props.navigation.state.params.questions;
    return (
      <View>
        <View>
            <View style={{
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'}}
              >
                <Text style={{fontSize: 36}}>{title}</Text>
                <Text style={{fontSize: 22, marginTop: 12}}>{questions.length} cards
                </Text>
            </View>

            <TouchableOpacity
                onPress={() => {
                    this.props.navigation.navigate('NewQuestion', {
                        title,
                        questions,
                    });
                }}
            >
                <Text>Add Card</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => {
                    this.props.navigation.navigate('Quiz', {
                        title,
                        questions,
                    });
                }}
              >
                <Text>Start Quiz</Text>
            </TouchableOpacity>

        </View>
      </View>
    );
  }
}

export default DeckDetail;
