import * as Types from './types';

export const getDecks = ( decks ) => ({
  type: Types.FETCH_DECKS,
  decks,
});

export const addDeck = ( deck ) => ({
  type: Types.ADD_DECK,
  deck,
});

export const deleteDeck = ( deck ) => ({
  type: Types.DELETE_DECK,
  deck,
});

export const addQuestion = ( params ) => ({
  type: Types.ADD_QUESTION,
  params,
});
