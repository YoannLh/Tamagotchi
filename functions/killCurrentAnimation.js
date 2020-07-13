

function killCurrentAnimations() {

	console.log("changeAnimations");

	const action = { type: "KILL_CURRENT_ANIMATION" };

	setTimeout( () => { this.props.dispatch(action) }, 4000);
}

export default killCurrentAnimations();
