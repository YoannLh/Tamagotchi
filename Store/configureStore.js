// Store/configureStore.js

import { createStore } from 'redux';

import rootReducer from './Reducers/combineReducer'

export default createStore(rootReducer);

