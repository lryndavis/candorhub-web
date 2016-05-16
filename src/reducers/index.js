import {combineReducers} from 'redux';
import comments from './comments';
import imageForCritique from './imageForCritique';
import imageGallery from './imageGallery';
import imageUpload from './imageUpload';
import signIn from './signIn';

export default combineReducers({
  comments,
  imageForCritique,
  imageGallery,
  imageUpload,
  signIn
});
