const initialState = {
  title: '',
  description: '',
  image: '',
  questions: []
}

function setImageToCritique(state, responseJSON) {
  console.log(responseJSON[0]);
  return { ...state, ...responseJSON[0]};
}

export default function imageForCritique(state = initialState, action) {
  switch(action.type) {
    case 'SET_IMAGE_TO_CRITIQUE':
      return setImageToCritique(state, action.responseJSON);
    default:
      return state;
  }
}
