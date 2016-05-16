const initialState = {
  signedIn: false
}

function setState(state, newState) {
  return {...state, ...newState};
}

function signIn(state) {
  return { ...state, signedIn: true};
}

export default function(state = initialState, action) {
  switch (action.type) {
    case 'SET_STATE':
      return setState(state, action.state);
    case 'SIGN_IN':
      return signIn(state);
    case 'SET_SIGNED_URL':
      return setSignedUrl(state, action.responseJSON);
    default:
      return state;
  }
}
