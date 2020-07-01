import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'



//import arrayAnimations from '../animations/arrayAnimations'

let requireImage = require('../animations/poo2.gif');

//console.log(requireImage);



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
					<Image style={styles.image}  
						   onStartShouldSetResponder={() => this.handlePress()}
						   source={ requireImage } />
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
	image: {
		height: 200,
		width: 200
	}
});