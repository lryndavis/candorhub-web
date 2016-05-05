export function setState(state) {
  return {
    type: 'SET_STATE',
    state
  };
}

export function signIn(state) {
  return {
    type: 'SignIn',
    state
  };
}
