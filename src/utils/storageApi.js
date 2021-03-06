import { AsyncStorage } from 'react-native';

export const DECKS_STORAGE_KEY = 'decks:mobile-flashcards';

let defaultData = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
}

export function initialData() {
  AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(defaultData));
  return defaultData;
}

export function fetchDeck (title) {
    return AsyncStorage.getItem(DECKS_STORAGE_KEY)
        .then( (results) => {
            const data = JSON.parse(results);
            return data[title]
        })
}

export function fetchDecks() {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(results => {
    return results === null ? initialData() : JSON.parse(results)
  });
}

export function createDeck(deck) {
  return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify(deck));
}

export function removeDeck(deckName) {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
        .then((results) => {
          const data = JSON.parse(results);
          data[deckName] = undefined;
          delete data[deckName];
          AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(data));
        })
}

export function addQuestionToDeck({ card, deckName }) {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY, (err, result) => {
    let decks = JSON.parse(result);
    let newQuestions = [...decks[deckName].questions];
    newQuestions[newQuestions.length] = card; // need to understand
    const value = JSON.stringify({
      [deckName]: {title: deckName, questions: newQuestions},
    })
    AsyncStorage.mergeItem(DECKS_STORAGE_KEY, value);
  });
}
