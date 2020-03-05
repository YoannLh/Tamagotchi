import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

class Play extends React.Component {

	constructor() {
		super()
	}

	handlePress() {
		console.log("Play")
	}

	render() {
		return (
			<View 
				style={styles.container}
				onStartShouldSetResponder={() => this.handlePress()}>
				<Text style={styles.text}>Play</Text>
			</View>
		)
	}
}

export default Play;

const styles = StyleSheet.create({
	container: {
		width: 50,
		height: 50,
		justifyContent: 'center',
		alignItems: 'center'
	},
	text: {
		color: 'black'
	}
});