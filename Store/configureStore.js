// Store/configureStore.js

import { createStore } from 'redux';
import getAnimationsWhenPressed from './Reducers/getAnimationsWhenPressed'

export default createStore(getAnimationsWhenPressed);