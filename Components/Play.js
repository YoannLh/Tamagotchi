import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'

import { connect } from 'react-redux'

class Play extends React.Component {

	constructor() {
		super()
	}

	handlePress() {

		console.log("Play")

		const action = { type: "PLAY" };

		this.props.dispatch(action);

		this.changeAnimations();
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
				<Image style={styles.image} source={ require('../images/gamepad-solid.png') } />
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

	}
}

export default connect(mapStateToProps)(Play);
















