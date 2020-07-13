

import { combineReducers } from 'redux'

import ManageAnimations from './ManageAnimations'
import ManageValues from './ManageValues'

const rootReducer = combineReducers({
	animations : ManageAnimations,
	values : ManageValues
})

export default rootReducer