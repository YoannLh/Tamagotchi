

const initialState = { 

	requireImage: require('../../animations/little.gif'),
	addFood: 25

}

function getAnimationsWhenPressed(state = initialState, action) {

	console.log("state : " + state);

	let nextState;

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


	default:

    	return state;
	}
}

export default getAnimationsWhenPressed;












