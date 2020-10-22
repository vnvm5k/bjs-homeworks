//Задача 1
function parseCount (number) {
	let parsed = Number.parseInt(number);
	if (isNaN(parsed) === true) {
		throw new Error('Ошибка деления на 0'); 
    }
    return parsed; 
 

}

function validateCount(number) {
	try {
		parseCount(number);
	} catch(e) {
		return new Error('Невалидное значение'); 
	}
}


//Задача 2
class Triangle {
	constructor(a,b,c) {
		this.a = a;
		this.b = b;
		this.c = c;
		if ((this.a + this.b) < this.c || (this.a + this.c) < this.b || (this.c + this.b) < this.a) {
			throw new Error('Треугольник с такими сторонами не существует');
	} 
	}

	getPerimeter() {
		return this.a + this.b + this.c; 
	}

	getArea() {
		let p = (this.a + this.b + this.c)/2; 
		let s = Math.sqrt(p*(p - this.a)*(p - this.b)*(p - this.c));
		return parseFloat(s.toFixed(3)); 
	}
}

function getTriangle(a,b,c) {
	try {
		return new Triangle(a,b,c);
	} catch(e) {
		return result = {
            getArea: () => `Ошибка! Треугольник не существует`,
            getPerimeter: () => `Ошибка! Треугольник не существует`
        };

	} 


}