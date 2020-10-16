
String.prototype.isPalindrome = function () {
	
	let init = this.split(' ').join('').toLowerCase(); 
	let rev = init.split('').reverse().join(''); 

	return (rev === init) ? true : false; 
} 


function getAverageMark(marks) {
    
    let averageMark = 0;
    let roundedAverage = 0;

    if (marks.length == 0) {
    return 0;
    }

    for (let i = 0; i < marks.length; i++) {
    averageMark += marks[i];  
    }

    roundedAverage = Math.round(averageMark/marks.length);
    return roundedAverage;

}

function checkBirthday(birthday) {
    
    let diff = Date.now() - +(new Date(birthday)); 
    let age = Math.floor(diff / 31536000000);

    return (age > 18) ? '> 18 лет' : false; 
    
}