import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

class Character extends React.Component {

	constructor() {
		super()
	}

	render() {
		return <View style={styles.container}><Text style={styles.text}>Character</Text></View>
	}
}

export default Character;

const styles = StyleSheet.create({
	container: {
		flex: 7,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'pink',
	},
	text: {
		color: 'black'
	}
});