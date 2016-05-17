import {combineReducers} from 'redux';
import comments from './comments';
import imageForCritique from './imageForCritique';
import imageGallery from './imageGallery';
import imageUpload from './imageUpload';
import signIn from './signIn';
import {authStateReducer} from 'redux-auth';

export default combineReducers({
  auth: authStateReducer,
  comments,
  imageForCritique,
  imageGallery,
  imageUpload,
  signIn
});
