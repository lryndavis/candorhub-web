const randomImageEndpoint = "http://candorhub-api.herokuapp.com/v1/images?count=1";

export function setState(state) {
  return {
    type: 'SET_STATE',
    state
  };
}

export function signIn(state) {
  return {
    type: 'SIGN_IN',
    state
  };
}

export function setImageToCritique(state, response) {
  return {
    type: "SET_IMAGE_TO_CRITIQUE",
    state,
    response
  };
}

export function getRandomImageFromServer(state) {
  return function (dispatch) {
    return fetch(randomImageEndpoint)
    .then(function(response) {
      return response.json()
    }).then(function(image) {
      dispatch(setImageToCritique(state, image))
    });
  }
}
