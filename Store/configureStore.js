// Store/configureStore.js

import { createStore } from 'redux';
import ManageAnimations from './Reducers/ManageAnimations'

export default createStore(ManageAnimations);