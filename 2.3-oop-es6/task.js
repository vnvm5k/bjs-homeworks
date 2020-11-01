//Задача 1

class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount; 
		this.state = 100; 
		this.type = null; 
	}

	fix() {
		this.state *= 1.5; 
	}

	set state(state) {

		if (state < 0) {
			this._state = 0;
		} else if (state >= 100) {
			this._state = 100; 
		} else {
			this._state = state; 
		}
	}

	get state() {
		return this._state;
	}
}


class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount)
		this.type = 'magazine'; 
	}
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount)
		this.author = author; 
		this.type = 'book'; 
	}
}

class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount)
		this.type = 'novel'; 
	}
}

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount)
		this.type = 'fantastic'; 
	}
}

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount)
		this.type = 'detective'; 
	}
}


//Задача 2 

class Library {
	name;
	books; 
	constructor(name) {
		this.name = name;
		this.books = []; 
	}

	addBook(book) {
		if(book.state > 30) {
			this.books.push(book);
    }
		
	}

	findBookBy(type, value) {
		for (let i = 0; i < this.books.length; i++) {
			if (this.books[i][type] === value) {
				return this.books[i]; 
			} 
		}
		return null;
	}

	giveBookByName(bookName) {
		for (let i = 0; i < this.books.length; i++) {
			if (this.books[i].name === bookName) {
				this.books.splice(i,1);
				return this.books; 
			} 
		}
		return null;
	}
}

//Задача 3 

class StudentLog {
	constructor(studentName) {
		this.studentName = studentName;
		this.sbjList = {}; 
	}

	getName(){
		return this.studentName; 
	}

	addGrade(grade, subject) {  
		let length = 0;
		let memory = Object.keys(this.sbjList); 
		if ((grade >= 1 && grade <= 5) && typeof(grade) === 'number') {
			if (memory.some(element => element == subject)) {
				this.sbjList[subject].push(grade);
			} else {
				this.sbjList[subject] = [];
				this.sbjList[subject].push(grade); 
			}
		} else {
			length = this.sbjList[subject].length;
			throw new Error(`Вы пытались поставить оценку ${grade}! по предмету ${subject}. Допускаются только числа от 1 до 5. \n ${length}`)
		}
		return this.sbjList[subject].length; 
	}

	getAverage(marks) {

		let averageMark = 0;
		if (marks.length == 0) {
			return 0;
		}
		for (let i = 0; i < marks.length; i++) {
			averageMark += marks[i];
		}
		return averageMark/marks.length;
	}

	getAverageBysubject(subject) {
		
		let sbjGrades = this.sbjList[subject]; 
		return this.getAverage(sbjGrades);
	}

	getTotalAverage() {
		
		let average1 = Object.values(this.sbjList);
		let average2 = average1.reduce( function( a, b ) { return a.concat( b ); } );
		return this.getAverage(average2);  
	}
}

const log = new StudentLog('Олег Никифоров');

console.log(log.addGrade(3, 'algebra'));
// 1
console.log(log.addGrade(4, 'algebra'));
// 1
console.log(log.addGrade(5, 'geometry'));
console.log(log.addGrade(1, 'geometry'));

console.log(log.getAverageBysubject('algebra'));
console.log(log.getAverageBysubject('geometry')); // 3
console.log(log.getTotalAverage());