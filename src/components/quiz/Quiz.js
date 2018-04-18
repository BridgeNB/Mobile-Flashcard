import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import { NavigationActions } from 'react-navigation'

class Quiz extends React.Component {

    state = {
        questionNo: 0,
        correctAnswers: 0,
        showAnswer: false,
    };

    onCorrect = () => {
        const {questionNo, correctAnswers} = this.state;
        this.setState({questionNo: questionNo + 1, correctAnswers: correctAnswers + 1, showAnswer: false});
    };

    startQuiz = () => {
        this.setState({questionNo: 0, correctAnswers: 0, showAnswer: false});
    };

    backToDeck = () => {
        this.props.navigation.goBack();
    };

    onIncorrect = () => {
        this.setState({questionNo: this.state.questionNo + 1});
    };

    showAnswer = () => {
        this.setState({showAnswer: !this.state.showAnswer});
    };

    render() {
        const {questionNo, correctAnswers, showAnswer} = this.state;
        const {questions} = this.props.navigation.state.params;
        const isQuestionAvailable = questionNo < questions.length;
        const questionLeft = questions.length - questionNo;

        return (
            <View style={{flex: 1}}>
                {isQuestionAvailable ? (
                    <View style={styles.container}>

                        <View style={[styles.group, {justifyContent: 'flex-start', flex: 1}]}>
                            <View>
                                <Text>{questionLeft} / {questions.length}</Text>
                            </View>
                        </View>

                        <View style={[styles.group, {flex: 4}]}>
                            <View>
                                {showAnswer ? (
                                    <View style={{alignItems: 'center'}}>
                                        <Text style={{fontSize: 36}}>{questions[questionNo].answer}</Text>

                                        <TouchableOpacity onPress={this.showAnswer}>
                                            <Text style={{fontSize: 18, color: '#70dd2f'}}>Question</Text>
                                        </TouchableOpacity>

                                    </View>) : (
                                    <View style={{alignItems: 'center'}}>
                                        <Text style={{fontSize: 36}}>{questions[questionNo].question}</Text>

                                        <TouchableOpacity onPress={this.showAnswer}>
                                            <Text style={{fontSize: 18, color: '#ff463f'}}>Answer</Text>
                                        </TouchableOpacity>

                                    </View>
                                )}
                            </View>
                        </View>

                        <View style={{alignItems: 'center', justifyContent: 'space-around', flex: 2}}>
                            <View style={styles.container}>

                                <TouchableOpacity onPress={this.onCorrect}>
                                    <Text style={styles.correctText}>Correct</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={this.onIncorrect}>
                                    <Text style={styles.incorrectText}>Incorrect</Text>
                                </TouchableOpacity>

                            </View>

                        </View>

                    </View>

                ) : (
                    <View style={styles.container}>
                        <Text>Score: {correctAnswers}</Text>
                        <View style={{alignItems: 'center', justifyContent: 'space-around', flex: 2}}>
                            <View style={styles.container}>
                                <TouchableOpacity onPress={this.startQuiz}>
                                    <Text style={styles.startQuizText}>Start Quiz</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={this.backToDeck}>
                                    <Text style={styles.backText}>Back to Deck</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                )}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
    },
    correctText: {
      backgroundColor: 'grey',
      justifyContent: 'center',
      alignItems: 'center',
      height: 30,
      textAlign: 'center',
      color: 'white',
      fontWeight: 'bold',
      width: 200,
    },
    incorrectText: {
      backgroundColor: 'black',
      justifyContent: 'center',
      alignItems: 'center',
      height: 30,
      textAlign: 'center',
      color: 'white',
      fontWeight: 'bold',
      width: 200,
      marginTop: 20,
    },
    startQuizText: {
      backgroundColor: 'grey',
      justifyContent: 'center',
      height: 30,
      textAlign: 'center',
      color: 'white',
      fontWeight: 'bold',
      width: 200,
    },
    backText: {
      backgroundColor: 'black',
      justifyContent: 'center',
      height: 30,
      textAlign: 'center',
      color: 'white',
      fontWeight: 'bold',
      width: 200,
      marginTop: 20
    }
});

export default Quiz;
