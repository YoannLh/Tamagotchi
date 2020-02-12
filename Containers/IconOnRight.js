import React from 'react'
import { View, StyleSheet } from 'react-native'
import Clean from '../Components/Clean'
import Poo from '../Components/Poo'
import Shower from '../Components/Shower'

class IconOnLeft extends React.Component {

	constructor() {
		super()
	}

	render() {
		return (
			<View style={styles.container}>
				<Clean />
				<Poo />
				<Shower />
			</View>
		)
	}
}

export default IconOnLeft;

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