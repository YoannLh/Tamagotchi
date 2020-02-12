import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

class Food extends React.Component {

	constructor() {
		super()
	}

	render() {
		return <View style={styles.container}><Text style={styles.text}>Food</Text></View>
	}
}

export default Food;

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