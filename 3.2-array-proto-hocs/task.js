//Task 2
function sleep(milliseconds) 
{
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
}

function sum(...args) {
  sleep(100); 
  return args.reduce((sum, arg) => {
    return sum += +arg;
  }, 0);
}

const compareArrays = (arr1, arr2) => arr1.length === arr2.length && arr1.every((n, i) => n === arr2[i]);

function memorize(fn, limit) {
	let memory = [];
	return function fn2(...args) {
//Поиск совпадений
    
    	let search = memory.find(element => compareArrays(element.args, args));
//Проверка на совпадение	
  		if(search) {
  			return search.result;
  		} else {
//Создаем массив memory
	 
	    	let result1 = fn(...args);
	    	let argument = args;
	    	let obj = {};
	    	obj['args'] = argument;
	    	obj['result'] = result1; 
	    	memory.push(obj);
	   
//Проверка на длину массива 	    
	    	if(memory.length > limit) {
	    		memory.shift();
	    }
	    console.log(memory); 
	    return result1;
  	}
  }
}

const mSum = memorize(sum, 5); 
console.log(mSum(1,2));
console.log(mSum(3,4));
console.log(mSum(5,6));
console.log(mSum(7,8));
console.log(mSum(9,10));
console.log(mSum(11,12));

