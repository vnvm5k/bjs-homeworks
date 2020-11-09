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
			throw new Error('error text'); 
		}

	}

	removeClock(timerId) {
		let checkId = this.alarmCollection.some(element => element.timerId == timerId);
		if(checkId) {
			let checkDoublers = this.alarmCollection.filter(element => element.timerId == timerId).splice();
			if (this.alarmCollection.filter(element => element.timerId == timerId).length > 1) {
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
		function checkClock(obj) {
			let checkTime = this.alarmCollection.some(element => element.time == getCurrentFormattedTime());
				if (checkTime) {

					'какой callback?'
				}
		}
		
		if ('не понятно как обратиться к текущему значению timerId') {

			let intervalID = setInterval(() => {
				let checkCalls = this.alarmCollection.forEach(element => checkClock(element));
			}, 1000);

			'не понятно как сохранить результат setInterval в timerId'
		}


	}

	stop() {
		
		if ('проверка существования текущего таймера') {
			clearInterval(this.intervalID); 
			'удалить значение timerid'
		}
	}

	printAlarms() {
		return this.alarmCollection.array.forEach(element => console.log('id:' + element.timerid + 'time:' + element.time));
	}

	clearAlarms() {
		this.stop();
		this.alarmCollection.splice(-1); 

	}
}