import {Map} from 'immutable';

function setState(state, newState) {
  return state.merge(newState);
}

function signIn(state) {
  return state.set('signedIn', true);
}

export default function(state = Map(), action) {
  switch (action.type) {
    case 'SET_STATE':
      return setState(state, action.state);
    case 'SignIn':
      return signIn(state);
    }
  return state;
}
