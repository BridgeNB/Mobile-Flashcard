import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

export default class SingleDeck extends React.Component {
    render() {
        const {title, questions} = this.props;

        return <View style={styles.deck}>
            <View>
                <Text>{title}</Text>
                <Text>
                    {questions && questions.length} cards
                </Text>
            </View>
        </View>
    }
}

const styles = StyleSheet.create({
    deck: {
        flexDirection: 'row',
        marginTop: 12,
        height: 120,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
});
