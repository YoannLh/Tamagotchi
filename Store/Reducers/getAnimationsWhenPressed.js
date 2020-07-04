

const initialState = { requireImage: require('../../animations/little.gif') }

function getAnimationsWhenPressed(state = initialState, action) {

	let nextState;

	if (state != initialState) {

		console.log("nextState !=");

		let temp = setTimeout( () => { state = initialState }, 4000 );
	}

	switch (action.type) {

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

	default:

    	return state
	}
}

export default getAnimationsWhenPressed;












