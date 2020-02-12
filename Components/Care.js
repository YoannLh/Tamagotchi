import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

class Care extends React.Component {

	constructor() {
		super()
	}

	render() {
		return <View style={styles.container}><Text style={styles.text}>Care</Text></View>
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
	text: {
		color: 'black'
	}
});