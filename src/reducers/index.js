import * as Types from '../actions/types';

function decks(state = {}, action) {
  const { decks, deck } = action;
  switch(action.type) {
    case Types.FETCH_DECKS:
      return {...state, ...decks};
    case Types.ADD_DECK:
      return {...state, ...deck};
    case Types.DELETE_DECK:
      let newState = {...state};
      delete newState[deck];
      return newState;
    default:
      return state;
  }
}

export default decks;
