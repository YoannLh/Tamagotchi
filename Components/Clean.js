import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'

import { connect } from 'react-redux'

class Clean extends React.Component {

	constructor() {
		super()
	}

	handlePress() {
		console.log("Clean");

		const action = { type: "CLEAN" };

		this.props.dispatch(action);
	}

	render() {
		return (
			<View 
				style={styles.container}
				onStartShouldSetResponder={() => this.handlePress()}>
				<Image style={styles.image} source={ require('../images/water-solid.png') } />
			</View>
		)
	}
}

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

const mapStateToProps = (state) => {

	return {

	}
}

export default connect(mapStateToProps)(Clean);





