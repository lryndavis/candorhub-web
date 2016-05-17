const initialState = {
  imagesForGallery: [{
    title: '',
    image: '',
    description: ''
  }],
  imageById: {
    title: '',
    description: '',
    image: '',
    questions: [{
      id: '',
      body: '',
      comments: [{
        id: '',
        body: ''
      }],
    }],
  },
}

//get specific image for gallery view
function setImageById(state, responseJSON) {
  return {...state, imageById: responseJSON};
}

//image gallery
function setImageGallery(state, responseJSON) {
  return { ...state, imagesForGallery: responseJSON};
}

export default function(state = initialState, action) {
  switch(action.type) {
    case 'SET_IMAGE_GALLERY':
      return setImageGallery(state, action.responseJSON);
    case 'SET_IMAGE_BY_ID':
      return setImageById(state, action.responseJSON);
    default:
      return state;
  }  
}
