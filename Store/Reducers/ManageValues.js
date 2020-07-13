

const initialState = { goFoodAndPoo: true, goShower: true, goPlay: true, goCare: true, loulou: true }

function getValuesWhenButtonsPressed(state = initialState, action) {

	let nextState;

	switch (action.type) {

		case "ADD_FOOD":

			if(initialState.go === true) { 

				nextState = { ...state, goFoodAndPoo: false, loulou: false };

			} else {

				nextState = { ...state, goFoodAndPoo: true, loulou: true };
			}

			return nextState;

		case "SHOWER":

			if(initialState.go === true) { 

				nextState = { ...state, goShower: false, loulou: false };

			} else {

				nextState = { ...state, goShower: true, loulou: true };
			}

		case "PLAY":

			if(initialState.go === true) { 

				nextState = { ...state, goPlay: false, loulou: false };

			} else {

				nextState = { ...state, goPlay: true, loulou: true };
			}

		case "CARE":

			if(initialState.go === true) { 

				nextState = { ...state, goCare: false, loulou: false };

			} else {

				nextState = { ...state, goCare: true, loulou: true };
			}
			
	default:

    	return state;
	}
}

export default getValuesWhenButtonsPressed;