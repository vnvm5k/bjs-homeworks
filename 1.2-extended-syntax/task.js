function getResult(a,b,c){
    "use strict";

    let result = (b**2) - (4*a*c);
    let x,x1,x2; 
    if (result > 0) {
      x1 = (-b - Math.sqrt(result)) / (2 * a);
      x2 = (-b + Math.sqrt(result)) / (2 * a);
      x = [x2,x1];
    }if (result == 0) {
      x1 = -b / (2*a);
      x = [x1]; 
    }if (result < 0) {
      x = [ ];
    }

    return x;
}

function getAverageMark(marks){
	let averageMark = 0;
	if (marks.length == 0){
		return 0;
	}if (marks.length > 5){
		console.log('Оценок больше 5!'); 
		let marks2 = marks.slice(0,5);
		for (let i = 0; i < marks2.length; i++) {
    		averageMark += marks2[i];  
		}
		return averageMark/marks2.length;
	}else {
    	for (let i = 0; i < marks.length; i++) {
        	averageMark += marks[i];  
    	}
    	return averageMark/marks.length;
    }
}

function askDrink(name,dateOfBirthday){
	let today = new Date();
	let year = today.getFullYear();
	let dOBYear = dateOfBirthday.getFullYear();
	let age = year - dOBYear; 
	if (age > 18) {
    	result = `Не желаете ли олд-фэшн, ${name}?`;
    }else {
    	result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    }
    return result;
}