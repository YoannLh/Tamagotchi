import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'

import { connect } from 'react-redux'

class Food extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			
			//food: this.props.food
		}
	}

	handlePress() {

		console.log("Food")

		const action = { type: "FOOD" };

		this.props.dispatch(action);

		this.addFoodWhenPressed(); 

		this.changeAnimations();
	}

	addFoodWhenPressed() {

		console.log("add food")

		const action = { type: "ADD_FOOD" }

		this.props.dispatch(action);
	}

	changeAnimations() {

		console.log("changeAnimations");

		const action = { type: "CHANGE_ANIMATION" };

		setTimeout( () => { this.props.dispatch(action) }, 4000);
	}

	render() {
		return (
			<View 
				style={styles.container} 
				onStartShouldSetResponder={() => this.handlePress()}>
				<Image style={styles.image} source={ require('../images/pizza-slice-solid.png') } />
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		width: 50,
		height: 50,
		justifyContent: 'center',
		alignItems: 'center'
	},
	image: {
		width: 30,
		height: 30
	}
});

const mapStateToProps = (state) => {

	return {

		//
	}
}

export default connect(mapStateToProps)(Food);














