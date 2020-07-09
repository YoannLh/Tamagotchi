import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { connect } from 'react-redux'

class HungryTimer extends React.Component {

	constructor(props) {

		super(props);

		this.init = setInterval( () => { this.hungerMalus() }, 10000 );

		this.state = { 

			hunger: 100
		}
	}

	hungerMalus() {

		this.state.hunger--;

		console.log("hunger = " + this.state.hunger);

		this.checkIfHungry();

		//this.checkIfFoodExists();
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

	componentDidMount() {

		console.log("coucou did mount");
	}

	componentDidUpdate() {

		console.log("coucou did update");

		if(this.props.food != 0) {

			console.log("food != 0")

			this.setState((state, props) => {

				hunger: this.state.hunger + this.props.food
			})

			console.log(this.state.hunger)

			//this.props.food = 0
		}

		if(this.state.hunger > 100) {

			this.setState((state) => { hunger: 100 })

			console.log("the pet is not hungry");

			const action = { type: "PROBLEM" };

			this.props.dispatch(action);
		}

		console.log("food = " + this.props.food)
	}

	componentWillUnmount() {

		console.log("coucou will unmount")
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
		
		food: state.food
	}
}

export default connect(mapStateToProps)(HungryTimer);

