//Task 2
function sleep(milliseconds) {
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

		let search = memory.find(element => compareArrays(element.args, args));	
		
		if(search) {
			return search.result;
  		} 

	    let sumResult = fn(...args);
	    let obj = {};
	    obj['args'] = args;
	    obj['result'] = sumResult; 
	    memory.push(obj);
	   	    
	    if(memory.length > limit) {
	    	memory.shift();
	    } 
	    return sumResult;
  	}
}

