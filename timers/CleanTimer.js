// import React from 'react'
// import { View, Text, StyleSheet } from 'react-native'

// import { connect } from 'react-redux'

// class CleanTimer extends React.Component {

// 	constructor(props) {

// 		super(props);

// 		this.init = setInterval( () => { this.askClean() }, 10000 );

// 		this.go = props.go;

// 		this.clean = 100;

// 		this.state = { 

// 			//loulou: props.loulou
// 		}
// 	}

// 	askClean() {

// 		this.clean--;

// 		console.log("this.clean = " + this.clean);

// 		this.checkIfClean();
// 	}

// 	checkIfClean() {

// 		if(this.clean > 150) {

// 			this.clean = 100;

// 			console.log("the pet is not dirty");

// 			const action = { type: "PROBLEM" };

// 			this.props.dispatch(action);
// 		}

// 		if(this.clean < 50) {

// 			console.log("the pet is not clean");

// 			const action = { type: "POO" };

// 			this.props.dispatch(action);
// 		}
// 	}

// 	componentDidUpdate() { 

// 		console.log("did update");

// 		console.log("in update, go = " + this.go);

// 		if(this.go) {

// 			this.clean = 100;
// 		}

// 		if(!this.go) {

// 			this.clean = 100;
// 		}

// 		console.log("out update, go = " + this.go )

// 		console.log("out update, this.clean = " + this.clean)
// 	}

// 	render() {

// 		return null;
// 	}
// }

// const styles = StyleSheet.create({

// 	food: {
		
// 		//display: 'none'
// 	}
// });

// const mapStateToProps = (state) => {

// 	console.log('in mapStateToProps')

// 	return {
		
// 		go: state.values.go,
// 		loulou: state.values
// 	}
// }

// export default connect(mapStateToProps)(CleanTimer);
















