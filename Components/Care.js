import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'

class Care extends React.Component {

	constructor() {
		super()
	}

	handlePress() {
		console.log("Care")
	}

	render() {
		return (
			<View 
				style={styles.container}
				onStartShouldSetResponder={() => this.handlePress()}>
				<Image style={styles.image} source={ require('../images/syringe-solid.png') }  />
			</View>
		)
	}
}

export default Care;

const styles = StyleSheet.create({
	container: {
		width: 50,
		height: 50,
		justifyContent: 'center',
		alignItems: 'center'
	},
	image: {
		height: 30,
		width: 30
	}
});