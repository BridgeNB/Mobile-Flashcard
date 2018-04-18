import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert
} from 'react-native';
import { connect } from 'react-redux';
import { createDeck } from '../../utils/storageApi';
import { addDeck } from '../../actions/index'

class NewDeck extends Component {
  componentWillMount() {
    this.setState({test: ''})
  }
  addNewDeck = () => {
    const entry = this.state;
    const {decks} = this.props;
    if (!entry.text) {
      Alert.alert('Alert', 'Dack Name not valid');
    } else {
      if (decks[entry.text]) {
        Alert.alert('Error', 'Deck already existed');
      } else {
        const newDeck = {
          [entry.text]: {
            title: entry.text,
            questions: []
          }
        };
        this.props.dispatch(addDeck(newDeck));
        createDeck(newDeck);
        Alert.alert('Successful', 'Deck Added', [
          {
            text: 'OK',
            onPress: () => this.props.navigation.navigate('IndividualDeck', {
              title: entry.text,
              questions: []
            })
          }
        ],);
        this.setState({text: ''});
      }
    }
  };
  render() {
    return (<View>
      <Text>
        What is the title of your new Deck?</Text>
      <TextInput value={this.state.text} style={styles.input} onChangeText={text => this.setState({text})}/>
      <TouchableOpacity onPress={this.addNewDeck}>
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>);
  }
}

function mapStateToProps(state) {
  return {decks: state};
}

const styles = StyleSheet.create({
  input: {
    width: 300,
    height: 40,
    backgroundColor: '#fff'
  }
})

export default connect(mapStateToProps)(NewDeck);
