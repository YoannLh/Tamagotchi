import React from 'react'

import { connect } from 'react-redux'

class HungryTimer extends React.Component {

	constructor() {

		super();

		this.hunger = 100;
		this.init = setInterval( () => { this.hungerMalus() }, 10000 );
	}

	hungerMalus() {

		this.hunger--;

		console.log("hunger = " + this.hunger);

		this.checkIfHungry();
	}

	checkIfHungry() {

		if(this.hunger < 50) {

			console.log("the pet is hungry");

			const action = { type: "PROBLEM" };

			this.props.dispatch(action);
		}

		if(this.hunger <=0) {

			console.log("dead");

			const action = { type: "DEATH" };

			this.props.dispatch(action);
		}
	}

	render() {

		return null;
	}
}

const mapStateToProps = (state) => {

	return {

	}
}

export default connect(mapStateToProps)(HungryTimer);

