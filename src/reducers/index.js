import * as Types from '../actions/types';

function decks(state = {}, action) {
  switch(action.type) {
    case Types.FETCH_DECKS:
      return {...state, ...action.deck};
    default:
      return state;
  }
}

export default decks;
