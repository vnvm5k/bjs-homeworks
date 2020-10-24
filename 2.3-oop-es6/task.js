//Задача 1

class PrintEditionItem {
	name;
	releaseDate;
	pagesCount;
	state;
	type;
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
		if(PrintEditionItem.state > 30) {
			this.books.push(book);
    }
		
	}

	findBookBy(type, value) {
		for (let i = 0; i < this.books.length; i++) {
			if (this.books[i][type] === value) {
				return this.books[i]; 
			} else {
				return null; 
			}
		}
	}

	giveBookByName(bookName) {
		for (let i = 0; i < this.books.length; i++) {
			if (this.books[i].name === bookName) {
				delete this.books[i];
				return this.books[i]; 
			} else {
				return null; 
			}
		}
	}
}

//Задача 3 

class PrintEditionItem {
	constructor(studentName) {
		this.studentName = studentName;
	}

	getName(){
		return studentName; 
	}

	addGrade(grade, subject) { 
		let sbjList = {};
		let grades = []; 
		let subject = subject; 
		if ((grade >= 1 && grade <= 5) && indexOf(grade) === 'number') {
			grades.push(grade);
			sbjList.subject = grades; 
		} else {
			console.log(`Вы пытались поставить оценку ${grade}! по предмету ${subject}. Допускаются только числа от 1 до 5.`)
		}
		return sbjList[subject].length; 
	}

	getAverageBysubject(subject) {
		

		for (let prop in this.sbjList) {
			
			let value = function getAverageMark(sbjList[prop]) {
				
				let averageMark = 0;
				if (this.sbjList[prop].length == 0) {
					return 0;
				}

				for (let i = 0; i < this.sbjList[prop].length; i++) {
					averageMark += this.sbjList[prop][i];
				}
				return averageMark/this.sbjList[prop].length;
			}
			this.sbjList[prop] = value;
		}
		let sbjNames = Object.keys(this.sbjList);
		
		for (let i = 0; i < this.sbjNames.length; i++) {
			
			if (subject == this.sbjNames[i]){
				return sbjList.['subject']; 
			} else {
				return 0; 
			}
		}

	}

	getTotalAverage() {
		
		let average1 = Object.values(this.sbjList);
		let averageSum = getAverageMark(average1);
		return averageSum;  
	}
}
