import {combineReducers} from 'redux';
import comments from './comments';
import imageForCritique from './imageForCritique';
import imageGallery from './imageGallery';
import imageUpload from './imageUpload';
import {authStateReducer} from 'redux-auth-candorhub';

export default combineReducers({
  auth: authStateReducer,
  comments,
  imageForCritique,
  imageGallery,
  imageUpload
});
