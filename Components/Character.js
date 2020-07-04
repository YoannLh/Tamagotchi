import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'

import { connect } from 'react-redux'

class Character extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			requireImage : this.props.requireImage,
			ex : this.props.ex
		}
	}

	handlePress() {

		console.log("Character");

		const action = { type: "LOVE" };

		this.props.dispatch(action);

		console.log(action);

		console.log("onpress : " + this.state.requireImage);

	}

	render() {

		return (
			<View 
				style={styles.container}>
					<Image style={styles.image}  
						   onStartShouldSetResponder={() => this.handlePress()}
						   source={ this.props.requireImage } />
					<Text>{ this.props.ex }</Text>
			</View>	
		)
	}
}

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

const mapStateToProps = (state) => {

	console.log("global state : " + state.requireImage)

	return {

		requireImage : state.requireImage,
		ex: state.ex
	}
}

export default connect(mapStateToProps)(Character);

















