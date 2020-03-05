import React from 'react'
import { View, StyleSheet } from 'react-native'
import Food from '../Components/Food'
import Care from '../Components/Care'
import Play from '../Components/Play'

class IconsOnTop extends React.Component {

	constructor() {
		super()
	}

	render() {
		return (
			<View style={styles.container}>
				<Food />
				<Care />
				<Play />
			</View>
		)
	}
}

export default IconsOnTop;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		width: '100%',
		height: 20,
		justifyContent: 'space-around',
		alignItems: 'center'
	},
});