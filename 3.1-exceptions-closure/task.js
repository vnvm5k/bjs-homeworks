//Задача 1
function parseCount (number) {
	let parsed = Number.parseInt(number);
	if (isNaN(parsed)) {
		throw new Error('Невалидное значение'); 
    }
    return parsed; 
 

}

function validateCount(number) {
	try {
		return parseCount(number);
	} catch(e) {
		return e.message; 
	}
}


//Задача 2
class Triangle {
	constructor(a,b,c) {
		this.a = a;
		this.b = b;
		this.c = c;
		if ((a + b) < c || (a + c) < b || (c + b) < a) {
			throw new Error('Треугольник с такими сторонами не существует');
	} 
	}

	getPerimeter() {
		return this.a + this.b + this.c; 
	}

	getArea() {
		let p = (this.getPerimeter())/2; 
		let s = Math.sqrt(p*(p - this.a)*(p - this.b)*(p - this.c));
		return parseFloat(s.toFixed(3)); 
	}
}

function getTriangle(a,b,c) {
	try {
		return new Triangle(a,b,c);
	} catch(e) {
		return {
            getArea: () => `Ошибка! Треугольник не существует`,
            getPerimeter: () => `Ошибка! Треугольник не существует`
        };

	} 


}