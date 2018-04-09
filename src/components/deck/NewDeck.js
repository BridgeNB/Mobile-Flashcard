import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';

class NewDeck extends Component {
  render() {
    return (
      <View>
        <Text> This is NewDeck </Text>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    decks: state,
  };
}


export default connect(mapStateToProps)(NewDeck);
