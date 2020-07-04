// Store/configureStore.js

import { createStore } from 'redux';
import getAnimations from './Reducers/getAnimations'

export default createStore(getAnimations);