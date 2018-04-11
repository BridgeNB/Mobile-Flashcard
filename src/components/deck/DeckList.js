import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
  Dimensions
} from 'react-native';
import Swipeout from 'react-native-swipeout';
import {connect} from 'react-redux';
import {getDecks, deleteDeck} from '../../actions/index';
import {fetchDecks, removeDeck} from '../../utils/storageApi';
import SingleDeck from './SingleDeck';

class DeckList extends Component {
  componentDidMount() {
    const {dispatch} = this.props;
    fetchDecks().then(decks => dispatch(getDecks(decks))).then(() => this.setState(() => ({ready: true})));
  }

  deleteDeck() {
    console.log('close');
  }

  renderItem = ({item}) => {
    return (
      <View>
        <Swipeout
          right={swipeBtns}
          autoClose={true}
          backgroundColor="transparent"
          >
          <TouchableOpacity onPress={() =>
              this.props.navigation.navigate('IndividualDeck', item)}>
              <SingleDeck
                  title={item.title}
                  questions={item.questions}/>
          </TouchableOpacity>
        </Swipeout>
      </View>
    )
  }

  render() {
    const {decks} = this.props;
    return (<View style={styles.deck}>
      <FlatList data={Object.values(decks).sort((a, b) => a.title > b.title)}
        renderItem={this.renderItem.bind(this)}
         keyExtractor={(item, index) => index}
       />
    </View>);
  }
}

function mapStateToProps(state) {
  return {decks: state};
}

const styles = StyleSheet.create({
  deck: {
    flexDirection: 'row',
    height: Dimensions.get('window').height
  }
});
const swipeBtns = [{
     text: 'Delete',
     backgroundColor: 'red',
     onPress: () => {this.deleteDeck()}
}];

export default connect(mapStateToProps)(DeckList);
