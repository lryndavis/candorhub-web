function setState(state, newState) {
  return {...state, ...newState};
}

function isUploadingImage(state) {
  return { ...state,  isUploadingImage: true }
}

function doneUploadingImage(state) {
  return { ...state, isUploadingImage: false }
}

export default function imageUpload(state = [], action) {
  switch (action.type) {
    case 'IS_UPLOADING_IMAGE':
      return isUploadingImage(state);
    case 'DONE_UPLOADING_IMAGE':
      return doneUploadingImage(state);
    case 'ON_FINISHED_IMAGE_UPLOAD':
      return setState(state, {finishedImageUpload: true});
    default:
      return state;
  }
}
