

const initialState = { go: true, loulou: true }

function getValuesWhenButtonsPressed(state = initialState, action) {

	let nextState;

	switch (action.type) {

		case "ADD_FOOD":

			if(initialState.go === true) { 

				nextState = { ...state, go: false, loulou: false };

			} else {

				nextState = { ...state, go: true, loulou: true };
			}

			return nextState;

		case "CLEANING":

		case "PLAYING":

		case "HEALTHING":
			
	default:

    	return state;
	}
}

export default getValuesWhenButtonsPressed;