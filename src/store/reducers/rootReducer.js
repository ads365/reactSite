import authReducer from './authReducer';
import projectReducer from './projectReducer';
import blogReducer from './blogReducer';
import messageReducer from './messageReducer';
import { combineReducers} from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  blog: blogReducer,
  message: messageReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
})

export default rootReducer
