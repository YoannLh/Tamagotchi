import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

class Clean extends React.Component {

	constructor() {
		super()
	}

	handlePress() {
		console.log("Clean")
	}

	render() {
		return (
			<View 
				style={styles.container}
				onStartShouldSetResponder={() => this.handlePress()}>
				<Text style={styles.text}>Clean</Text>
			</View>
		)
	}
}

export default Clean;

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