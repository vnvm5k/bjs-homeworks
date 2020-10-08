'use strict'; 

function calculateTotalMortgage(percent, contribution, amount, date) {
    if ((percent || contribution || amount || date) !== 'number' && (percent || contribution || amount || date) !== 'string') {
    	return "Параметр содержит неправильное значение"    	
    }else {
    	parseInt(percent,contribution,amount,date);
    	let sum = amount - contribution;
    	let percentPart = 1/12 * (percent/100);  
    	
		let current_date = new Date();
		let difference = (date.getFullYear()*12 + date.getMonth()) - (current_date.getFullYear()*12 + current_date.getMonth());	
		let monthPay = sum * (percentPart + (percentPart/(((1+percentPart)**difference)-1)));
		let totalAmount = difference * monthPay;
		console.log(totalAmount.toFixed(2));
    }
    return totalAmount.toFixed(2);
}

function getGreeting(name) {
    let greeting; 
    if (name === 'null' || name === 'undefined' || name === '') {
    	greeting = 'Привет, мир! Меня зовут Аноним';
    } else {
    	greeting = `Привет, мир! Меня зовут ${name}`;
    }
    return greeting;
}
