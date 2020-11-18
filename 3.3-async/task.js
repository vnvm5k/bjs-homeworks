class AlarmClock {
	
	constructor() {
		this.alarmCollection = []; 
		this.timerId = null; 

	}

	addClock(time, callback, timerId) {
		
		let checkId = this.alarmCollection.some(element => element.timerId == timerId);

		if(timerId) {
			if (checkId) {
				console.error('Звонок с таким id уже существует');
				return;
			} else {
				let obj = {'timerId': timerId, 'callback': callback, 'time': time};
				return this.alarmCollection.push(obj);
			}
		} else {
			throw new Error('id не найден'); 
		}

	}

	removeClock(timerId) {
		let index = this.alarmCollection.findIndex(el => el.timerId === timerId);
		this.alarmCollection.splice(index, 1); 
			if (index) {
				return true;
			} else {
				return false; 
			}
		
	}

	getCurrentFormattedTime() {
		let date = new Date();
		return ("0" + date.getHours()).slice(-2)   + ":" +  ("0" + date.getMinutes()).slice(-2); 
	}
	start() {
		let checkClock = (obj) => {
				if (obj.time == this.getCurrentFormattedTime()) {
					obj.callback(); 
				}
		}
		
		if (!this.timerId) {

			this.timerId = setInterval(() => {
				this.alarmCollection.forEach(element => checkClock(element)); 
			}, 1000);

		}


	}

	stop() {
		
		if (this.timerId) {
			clearInterval(this.timerId); 
			this.timerId = null;  
		}
	}

	printAlarms() {
		return this.alarmCollection.forEach(element => console.log(' id: ' + element.timerId + '  time: ' + element.time));
	}

	clearAlarms() {
		this.stop();
		this.alarmCollection.splice(0, this.alarmCollection.length);

	}
}

function testcase() {

	let phoneAlarm = new AlarmClock(); 

	phoneAlarm.addClock("11:32",() => console.log("Пора вставать"), 1); 
	phoneAlarm.addClock("11:33",() => {console.log("Давай, вставай уже!",); 
	phoneAlarm.removeClock(2)}, 2); 
	phoneAlarm.addClock("11:34",() => {
		console.log("Вставай, а то проспишь!");
		phoneAlarm.clearAlarms();
		phoneAlarm.printAlarms();
	}, 3);
	phoneAlarm.addClock("09:05",() => {console.log("Пора вставать")}, 1);  

	phoneAlarm.printAlarms();
	phoneAlarm.start();
}