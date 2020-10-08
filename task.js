"use strict";

function getResult(a,b,c){
  
  let x = [ ],
      x1,
      x2; 
  let result = (b**2) - (4*a*c);
  
  
  if (result > 0) {
    x1 = (-b - Math.sqrt(result)) / (2 * a);
    x2 = (-b + Math.sqrt(result)) / (2 * a);
    x = [x2,x1];

  }else if (result == 0) {
    x1 = -b / (2*a);
    x = [x1]; 
  }

  return x;
}

function getAverageMark(marks) {
	let averageMark = 0,
      marks2; 

	if (marks.length == 0) {
	 	return 0;
	}else if (marks.length > 5) {
		console.log('Оценок больше 5!'); 
    marks.splice(5);
	} 
    
  for (let i = 0; i < marks.length; i++) {
    averageMark += marks[i];  
  }
  
  return averageMark/marks.length;

}

function askDrink(name,dateOfBirthday){
	let age = new Date().getFullYear() - dateOfBirthday.getFullYear(); 
	
  if (age > 18) {
    return `Не желаете ли олд-фэшн, ${name}?`;
  }else {
    return `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
  }
}