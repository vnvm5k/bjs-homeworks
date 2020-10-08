'use strict'; 

function calculateTotalMortgage(percent, contribution, amount, date) {
    let totalAmount = 0; 
    const percentChecked = parseInt(percent);
    const contributionChecked = parseInt(contribution);
    const amountChecked = parseInt(amount);

    if (isNaN(percentChecked) === true || isNaN(contributionChecked) === true || isNaN(amountChecked) === true) {
    	return "Параметр содержит неправильное значение"    	
    }else {
    	
    	const sum = amountChecked - contributionChecked;
    	const percentPart = 1/12 * (percentChecked/100);  
    	
		const current_date = new Date();
		const difference = (date.getFullYear()*12 + date.getMonth()) - (current_date.getFullYear()*12 + current_date.getMonth());	
		const monthPay = sum * (percentPart + (percentPart/(((1+percentPart)**difference)-1)));
		totalAmount = difference * monthPay;
		console.log(parseFloat(totalAmount.toFixed(2)));
    }
    return parseFloat(totalAmount.toFixed(2));
}

function getGreeting(name) {
    let greeting;
    let nameChecked = Boolean(name);
    greeting = "Привет, мир! Меня зовут " + (nameChecked ? name : "Аноним");
   
    return greeting; 
}
