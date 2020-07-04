import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'

import { connect } from 'react-redux'

class Food extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			ex: ""
		}
	}

	handlePress() {
		console.log("Food")

		const action = { type: "FOOD" };

		this.props.dispatch(action);

		console.log(action);
	}

	render() {
		return (
			<View 
				style={styles.container} 
				onStartShouldSetResponder={() => this.handlePress()}>
				<Image style={styles.image} source={ require('../images/pizza-slice-solid.png') } />
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

	console.log(state.ex)

	return {

		ex: state.ex
	}
}

export default connect(mapStateToProps)(Food);














