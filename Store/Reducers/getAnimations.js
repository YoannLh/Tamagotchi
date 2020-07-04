
// envoyer des timeout directement ?

const initialState = { requireImage: require('../../animations/little.gif'), ex: "lala" }

function getAnimations(state = initialState, action) {

	let nextState;

	switch (action.type) {

	  	case 'LOVE':

		  	console.log("love connected");

		  	nextState = { ...state, requireImage: require('../../animations/love.gif'), ex: "loulou" };

		  	console.log("nextState : " + nextState);

		  	return nextState;

	  	case 'FOOD':

	  		console.log("food connected");

	  		nextState = { ...state, requireImage: require('../../animations/eating.gif'), ex: "eating" };

		  	console.log("nextState : " + nextState);

		  	return nextState

	default:

    	return state
	}
}

export default getAnimations