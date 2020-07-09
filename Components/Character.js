import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'

import { connect } from 'react-redux'

class Character extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			requireImage : props.requireImage
		}
	}

	handlePress() {

		console.log("Character");

		const action = { type: "LOVE" };

		this.props.dispatch(action);

		this.changeAnimations();

	}
	changeAnimations() {

		console.log("changeAnimations");

		const action = { type: "CHANGE_ANIMATION" };

		setTimeout( () => { this.props.dispatch(action) }, 4000);
	}

	render() {

		return (
			<View 
				style={styles.container}>
					<Image style={styles.image}  
						   onStartShouldSetResponder={() => this.handlePress()}
						   source={ this.props.requireImage } />
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

	return {

		requireImage : state.requireImage
	}
}

export default connect(mapStateToProps)(Character);






