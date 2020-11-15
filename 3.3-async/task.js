class AlarmClock {
	
	constructor(){
		this.alarmCollection = []; 
		this.timerId; 

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
		let checkId = this.alarmCollection.some(element => element.timerId == timerId);
		if(checkId) {
			let checkDoublers = this.alarmCollection.filter(element => element.timerId == timerId).splice(-1);
			if (this.alarmCollection.filter(element => element.timerId == timerId).length  == 0) {
				return true;
			} else {
				return false; 
			}
		}
	}

	getCurrentFormattedTime() {
		let date = new Date();
		return date.getHours()+':'+date.getMinutes();
	}
	start() {
		let checkTime = this.alarmCollection.some(element => element.time == this.getCurrentFormattedTime());
		function checkClock(obj) {
				if (checkTime) {
					obj.callback(); 
				}
		}
		
		if (!this.timerId) {

			this.timerId = setInterval(() => {
				let checkCalls = this.alarmCollection.forEach(element => checkClock(element));
			}, 1000);

		}


	}

	stop() {
		
		if (this.timerId) {
			clearInterval(this.timerId); 
			this.timerId.delete;  
		}
	}

	printAlarms() {
		return this.alarmCollection.forEach(element => console.log(' id: ' + element.timerId + '  time: ' + element.time));
	}

	clearAlarms() {
		this.stop();
		this.alarmCollection.splice(0, this.alarmCollection.length);
		console.log(this.alarmCollection); 

	}
}

function testcase() {

	let phoneAlarm = new AlarmClock(); 

	phoneAlarm.addClock("17:28",() => console.log("Пора вставать"), 1); 
	phoneAlarm.addClock("17:29",() => {console.log("Давай, вставай уже!"); phoneAlarm.removeClock(2)}, 2); 
	
	phoneAlarm.addClock("17:30",() => {
		console.log("Вставай, а то проспишь!");
		phoneAlarm.clearAlarms();
		phoneAlarm.printAlarms();
	}, 3);
	phoneAlarm.addClock("09:05",() => {console.log("Пора вставать")}, 1);  

	phoneAlarm.printAlarms();
	phoneAlarm.start();
}