import React from 'react'

import { connect  } from 'react-redux'

class BirthTimer extends React.Component {

	constructor() {

		super();

		this.beginTimerOfEclosion;
		this.timeoutOfEclosion;
	}

	componentDidMount() {

		console.log("birth");

		const action = { type: "BIRTH" };

		this.props.dispatch(action);

		this.beginTimerOfEclosion = setTimeout( () => { this.initTimerBeforeEclosion() }, 10000 );

	}

	initTimerBeforeEclosion() {

		console.log("éclosion");

		const action = { type: "ECLOSION" };

		this.props.dispatch(action);

		this.timeoutOfEclosion = setTimeout( () => { this.initPet() }, 4000 );

	}

	initPet() {

		console.log("new little pet");

		const action = { type: "LITTLE" };

		this.props.dispatch(action);

	}	

	render() {

		return null;
	}
}

const mapStateToProps = (state) => {

	return {

	}
}

export default connect(mapStateToProps)(BirthTimer);












