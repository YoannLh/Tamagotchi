import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { connect } from 'react-redux'

class HungryTimer extends React.Component {

	constructor(props) {

		super(props);

		this.initHungry = setInterval( () => { this.hungerMalus() }, 1728000 );

		this.initCheckIfHungry = setInterval( () => { this.checkIfHungry() }, 1000 );

		this.initPoo;

		this.clean = 100;

		this.go = props.go;

		this.hunger = 100;

		this.feed = false;

		this.state = { 

			//loulou: props.loulou
		}
	}

	hungerMalus() {

		this.hunger--;

		console.log("this.hunger = " + this.hunger);

		this.checkIfHungry();
	}

	checkIfHungry() {

		if(this.hunger > 200) {

			this.hunger = 100;

			console.log("the pet is not hungry");

			const action = { type: "PROBLEM" };

			this.props.dispatch(action);
		}

		if(this.hunger < 75) {

			console.log("the pet is hungry");

			const action = { type: "PROBLEM" };

			this.props.dispatch(action);
		}

		if(this.hunger < 50) {

			console.log("the pet is hungry");

			const action = { type: "PROBLEM" };

			this.props.dispatch(action);
		}

		if(this.hunger <= 0) {

			console.log("dead");

			const action = { type: "DEATH" };

			this.props.dispatch(action);
		}
	}

	askClean() {

		this.clean--;

		console.log("this.clean = " + this.clean);

		this.checkIfClean();
	}

	checkIfClean() {

		if(this.clean > 150) {

			this.clean = 100;

			console.log("the pet is not dirty");

			const action = { type: "PROBLEM" };

			this.props.dispatch(action);
		}

		if(this.clean < 50) {

			console.log("the pet is not clean");

			const action = { type: "POO" };

			this.props.dispatch(action);
		}
	}

	componentDidUpdate() { 

		console.log("did update");

		console.log("in update, go = " + this.go);

		if(this.go) {

			this.hunger += 25;

			this.initPoo = setInterval( () => { this.askClean() }, 10000 );
		}

		if(!this.go) {

			this.hunger += 25;

			this.initPoo = setInterval( () => { this.askClean() }, 10000 );
		}

		console.log("out update, go = " + this.go )

		console.log("out update, this.hunger = " + this.hunger)
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
		
		go: state.values.go,
		loulou: state.values
	}
}

export default connect(mapStateToProps)(HungryTimer);
















