const initialState = {
  title: '',
  description: '',
  image: '',
  questions: [],
  user: {
    id: "",
    username: "",
    email: ""
  }
}

function setImageToCritique(state, responseJSON) {
  if (Array.isArray(responseJSON)) {
    return { ...state, ...responseJSON[0]};
  } else {
    return { ...state, ...responseJSON}
  }
}

export default function imageForCritique(state = initialState, action) {
  switch(action.type) {
    case 'SET_IMAGE_TO_CRITIQUE':
      return setImageToCritique(state, action.responseJSON);
    default:
      return state;
  }
}
