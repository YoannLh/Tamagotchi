import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

class Character extends React.Component {

	constructor() {
		super()
	}

	handlePress() {
		console.log("Character")
	}

	render() {
		return (
			<View 
				style={styles.container}>
				<Text style={styles.text} onPress={() => this.handlePress()}>Character</Text>
			</View>
		)
	}
}

export default Character;

const styles = StyleSheet.create({
	container: {
		flex: 7,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgba(0,0,255,0.2)',
	},
	text: {
		color: 'black'
	}
});