import * as Types from '../actions/types';

function decks(state = {}, action) {
  switch(action.type) {
    case Types.FETCH_DECKS:
      return {...state, ...action.decks};
    case Types.ADD_DECK:
      return {...state, ...action.deck};
    default:
      return state;
  }
}

export default decks;
