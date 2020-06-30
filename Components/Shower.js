import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'

class Shower extends React.Component {

	constructor() {
		super()
	}

	handlePress() {
		console.log("Shower")
	}

	render() {
		return (
			<View 
				style={styles.container}
				onStartShouldSetResponder={() => this.handlePress()}>
				<Image style={styles.image} source={ require('../images/bath-solid.png') } />
			</View>
		)
	}
}

export default Shower;

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