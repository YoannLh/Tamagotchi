// timer of birth's pet

class BirthTimer {

	constructor() {
		this.init = setInterval( () => { this.initTimerOfBirth() }, 0 );
		this.beginTimerOfEclosion;
	}

	initTimerOfBirth() {
		console.log("birth");
		clearInterval(this.init);
		this.beginTimerOfEclosion = setInterval( () => { this.initTimerBeforeEclosion() }, 10000 );
		console.log("go")
	}

	initTimerBeforeEclosion() {
		console.log("éclosion")
		clearInterval(this.beginTimerOfEclosion);
	}
	
}

const birthTimer = new BirthTimer();


