

const initialState = { 

	requireImage: require('../../animations/little.gif'),
	food: 25

}

function getAnimationsWhenPressed(state = initialState, action) {

	console.log("début initialState.food : " + initialState.food)

	console.log("state : " + state);

	let nextState;

	if (state != initialState) {

		//console.log("nextState !=");

		//nextState = setTimeout( () => { state = { requireImage: require('../../animations/little.gif') } }, 4000 );
	
	}

	switch (action.type) {

		case 'BIRTH':

			nextState = { ...state, requireImage: require('../../animations/egg.gif') };

		  	return nextState;

		case 'ECLOSION':

			nextState = { ...state, requireImage: require('../../animations/eclosion.gif') };

		  	return nextState;

		case 'LITTLE':

			nextState = { ...state, requireImage: require('../../animations/little.gif') };

		  	return nextState;

		case 'PROBLEM':

			nextState = { ...state, requireImage: require('../../animations/problem.gif') };

		  	return nextState;

	  	case 'LOVE':

		  	nextState = { ...state, requireImage: require('../../animations/love.gif') };

		  	return nextState;

	  	case 'FOOD':

	  		nextState = { ...state, requireImage: require('../../animations/eating.gif') };

		  	return nextState

		case 'CARE':

	  		nextState = { ...state, requireImage: require('../../animations/care.gif') };

		  	return nextState

		case 'PLAY':

	  		nextState = { ...state, requireImage: require('../../animations/eating.gif') };

		  	return nextState

		case 'CLEAN':

	  		nextState = { ...state, requireImage: require('../../animations/eating.gif') };

		  	return nextState

		case 'POO':

	  		nextState = { ...state, requireImage: require('../../animations/eating.gif') };

		  	return nextState

		case 'SHOWER':

	  		nextState = { ...state, requireImage: require('../../animations/shower.gif') };

		  	return nextState

		case 'DEATH':

	  		nextState = { ...state, requireImage: require('../../animations/dead.gif') };

		  	return nextState

		case 'CHANGE_ANIMATION':

			nextState = { ...state, requireImage: require('../../animations/little.gif') };

			return nextState

		case "ADD_FOOD":

		console.log("get food")

		console.log("milieu initialState.food = " + initialState.food)

		nextState = { ...state, food: initialState.food };

		console.log("fin initialState.food = " + initialState.food)

		return nextState || state

	default:

    	return state;
	}
}

export default getAnimationsWhenPressed;












