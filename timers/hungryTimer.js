import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { connect } from 'react-redux'

class HungryTimer extends React.Component {

	constructor(props) {

		super(props);

		this.init = setInterval( () => { this.hungerMalus() }, 10000 );

		this.state = { 

		}
	}

	hungerMalus() {

		this.state.hunger--;

		console.log("hunger = " + this.state.hunger);

		this.checkIfHungry();
	}

	checkIfHungry() {

		if(this.state.hunger < 50) {

			console.log("the pet is hungry");

			const action = { type: "PROBLEM" };

			this.props.dispatch(action);
		}

		if(this.state.hunger <=0) {

			console.log("dead");

			const action = { type: "DEATH" };

			this.props.dispatch(action);
		}
	}

	checkIfFoodExists() {

	}

	render() {

		return (
			<View>
				<Text style={styles.food}>{ this.props.food }</Text>
				<Text>{ this.state.hunger }</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	food: {
		//display: 'none'
	}
});

const mapStateToProps = (state) => {

	return {
		
		AddFood: state.food
	}
}

export default connect(mapStateToProps)(HungryTimer);

