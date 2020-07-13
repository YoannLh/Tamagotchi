import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { connect } from 'react-redux'

class JoyTimer extends React.Component {

	constructor(props) {

		super(props);

		this.initJoy = setInterval( () => { this.joyMalus() }, 100000 );

		this.joy = 100;

		this.goPlay;

		this.state = { 

			//loulou: props.loulou
		}
	}

	joyMalus() {

		this.joy--;

		console.log("this.joy = " + this.joy);

		this.checkIfSad();
	}

	checkIfSad() {

		if(this.joy < 97) {

			console.log("the pet is sad");

			const action = { type: "SAD" };

			this.props.dispatch(action);
		}

		if(this.joy <= -250000) {

			console.log("dead");

			const action = { type: "DEATH" };

			this.props.dispatch(action);
		}
	}

	componentDidUpdate() { 

		console.log("did update");

		console.log("in update, goPlay = " + this.goPlay);

		if(this.goPlay) {

			this.joy = 100;
		}

		if(!this.goPlay) {

			this.joy = 100;
		}

		console.log("out update, goPlay = " + this.goPlay )

		console.log("out update, this.joy = " + this.joy)
	}

	render() {

		return null;
	}
}

const styles = StyleSheet.create({

	food: {
		
		//display: 'none'
	}
});

const mapStateToProps = (state) => {

	console.log('in mapStateToProps')

	return {
		
		goPlay: state.values.goPlay,
		loulou: state.values
	}
}

export default connect(mapStateToProps)(JoyTimer);
















