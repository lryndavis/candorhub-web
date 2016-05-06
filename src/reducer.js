import {Map} from 'immutable';
import $ from 'jquery';

const initialState = Map({
  signedIn: false,
  imageForCritique: {
    title: '',
    url: '',
    description: ''
  }
});

function setState(state, newState) {
  return state.merge(newState);
}

function signIn(state) {
  return state.set('signedIn', true);
}

function setImageToCritique(state, response) {
  return state.set('imageForCritique', response.images[0]);
}

export default function(state = initialState, action) {
  switch (action.type) {
    case 'SET_STATE':
      return setState(state, action.state);
    case 'SIGN_IN':
      return signIn(state);
    case 'SET_IMAGE_TO_CRITIQUE':
      return setImageToCritique(state, action.response);
    }
  return state;
}
