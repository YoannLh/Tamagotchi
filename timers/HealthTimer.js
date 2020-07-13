import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { connect } from 'react-redux'

class HealthTimer extends React.Component {

	constructor(props) {

		super(props);

		this.initHealth = setInterval( () => { this.healthMalus() }, 8000000 ); //<<< créer valeur random !

		this.health = 100;

		this.goCare;

		this.state = { 

			//loulou: props.loulou
		}
	}

	healthMalus() {

		this.health--;

		console.log("this.health = " + this.health);

		this.checkIfBadHealth();
	}

	checkIfBadHealth() {

		if(this.health < 50) {

			console.log("the pet is sick");

			const action = { type: "PROBLEM" };

			this.props.dispatch(action);
		}

		if(this.health <= 0) {

			console.log("dead");

			const action = { type: "DEATH" };

			this.props.dispatch(action);
		}
	}

	componentDidUpdate() { 

		console.log("did update");

		console.log("in update, goCare = " + this.goCare);

		if(this.goCare) {

			this.health = 100;
		}

		if(!this.goCare) {

			this.health = 100;

		}

		console.log("out update, goCare = " + this.goCare )

		console.log("out update, this.health = " + this.health)
	}

	render() {

		return null;
	}
}

const styles = StyleSheet.create({

	food: {
		
		//display: 'none'
	}
});

const mapStateToProps = (state) => {

	console.log('in mapStateToProps')

	return {
		
		goCare: state.values.goCare,
		loulou: state.values
	}
}

export default connect(mapStateToProps)(HealthTimer);
















