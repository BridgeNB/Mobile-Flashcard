import React from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { addQuestion } from '../actions';
import { connect } from 'react-redux';
import { addQuestionToDeck } from '../utils/storageApi';

class NewQuestion extends React.Component {

    state = {
        question: '', answer: ''
    };

    submitQuestion = () => {
        let alert = {};
        const {question, answer} = this.state;
        const {title, questions} = this.props.navigation.state.params;

        if (question === '') {
            Alert.alert('Alert', 'Question cannot be empty');
            return;
        }
        if (answer === '') {
            Alert.alert('Alert', 'Answer cannot be empty');
            return;
        }

        const params = {title, questions, question, answer};

        this.props.dispatch(addQuestion(params));

        addQuestionToDeck({
            card: {question, answer},
            deckName: title
        });

        Alert.alert('Successful', 'Question Added Successfully',
            [
                {
                    text: 'OK', onPress: () =>
                    this.props.navigation.goBack()
                }
            ],);
    };

    render() {
        const {question, answer} = this.state;

        return (
            <View style={style.container}>
                <Text>Question is </Text>
                <TextInput
                    defaultValue="Question"
                    value={question}
                    style={style.input}
                    onChangeText={question => this.setState({question})}/>
                <Text>Answer is </Text>
                <TextInput
                    defaultValue="Answer"
                    value={answer}
                    style={style.input}
                    onChangeText={answer => this.setState({answer})}/>

                <TouchableOpacity
                    onPress={this.submitQuestion}
                    style={style.submitButton}>
                    <Text style={style.submitText}>Submit</Text>
                </TouchableOpacity>

            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 20,
    },
    input: {
        width: 300,
        height: 50,
        padding: 10,
        margin: 16,
        backgroundColor: 'grey'
    },
    submitButton: {
        backgroundColor: 'black',
        padding: 10,
        height: 40,
    },
    submitText: {
        color: '#fff',
        fontSize: 20,
        textAlign: 'center',
    },
});

function mapStateToProps(state) {
    return {
        decks: state,
    };
}

export default connect(mapStateToProps)(NewQuestion);
