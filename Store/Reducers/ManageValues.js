

const initialState = { hunger: 100 }

function getValuesWhenButtonsPressed(state = initialState, action) {

	console.log("state : " + state);

	let nextState;

	switch (action.type) {

		case "ADD_FOOD":

		nextState = { ...state, hunger: "" };

		return nextState;

	default:

    	return state;
	}
}

export default getValuesWhenButtonsPressed;