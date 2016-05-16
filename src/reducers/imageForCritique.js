const initialState = {
  imageForCritique: {
    title: '',
    description: '',
    image: {
      image: ''
    },
    questions: []
  }
}

function setImageToCritique(state, responseJSON) {
  console.log("setting image to critique...");
  console.log(responseJSON)
  if (responseJSON.images) {
    //handle getting an image from an array
    console.log({ ...state, imageForCritique: responseJSON.images[0]});
    return { ...state, imageForCritique: responseJSON.images[0]};
  } else if (responseJSON.image) {
    //handle getting a specific image
    console.log({ ...state, imageForCritique: responseJSON.image});
    return { ...state, imageForCritique: responseJSON.image};
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
