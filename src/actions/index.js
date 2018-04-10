import * as Types from './types';

export const getDecks = ( decks ) => ({
  type: Types.FETCH_DECKS,
  decks,
});

export const addDeck = ( deck ) => ({
  type: Types.ADD_DECK,
  deck,
})

export const addQuestions = ( params ) => ({
  type: Types.ADD_QUESTION,
  params,
})
