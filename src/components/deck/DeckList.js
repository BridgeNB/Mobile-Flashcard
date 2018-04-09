import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';

class DeckList extends Component {
  render() {
    return (
      <View>
        <Text> This is DeckList </Text>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    decks: state,
  };
}


export default connect(mapStateToProps)(DeckList);
