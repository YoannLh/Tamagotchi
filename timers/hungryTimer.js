
// start timer of hunger

class HungryTimer {

	constructor() {
		this.init = setInterval( () => { this.initTimerOfHunger() }, 10000 );
		this.hunger = 100;
	}

	initTimerOfHunger() {
		
		this.hunger--;
		console.log("hunger = " + this.hunger);

		if(this.hunger < 50) {
			console.log("the pet is hungry");
		}
	}
}

const hungryTimer = new HungryTimer();

