class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }

  fix() {
    this.state = Number((this.state * 1.5).toFixed(0));
  }

  set state(state) {
    if (state < 0) {
      this._state = 0;
    } else if (state > 100) {
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
  constructor(...args) {
    super(...args);
    this.type = 'magazine';
  }
}

class Book extends PrintEditionItem {
  constructor(author, ...args) {
    super(...args);
    this.author = author;
    this.type = 'book';
  }
}

class NovelBook extends Book {
  constructor(...args) {
    super(...args);
    this.type = 'novel';
  }
}

class FantasticBook extends Book {
  constructor(...args) {
    super(...args);
    this.type = 'fantastic';
  }
}

class DetectiveBook extends Book {
  constructor(...args) {
    super(...args);
    this.type = 'detective';
  }
}

class Library {
  constructor(name) {
    this.name = `${name}`;
    this.books = [];
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    } else {
      console.log('Простите, книга в плачевном состоянии, мы не можем принять ее =(')
    }
  }

  findBookBy(type, value) {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i][`${type}`] === value) {
        return this.books[i];
      }
    }
    return null;
  }

  giveBookByName(bookName) {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].name === bookName) {
        return this.books.splice(i, 1)[0];
      }
    }
    return null;
  }
}

class Student {
  constructor(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.subjects = {};
  }

  set setSubject(subjectName) {
    let subject = subjectName;
    this.subjects[subject] = [];
  }

  addMark(mark, subject) {
    if (!this.subjects[subject]){
      if (mark >= 1 && mark <= 5) {
        let subjectName = subject;
        this.subjects[subjectName] = [];
        this.subjects[subjectName].push(mark);
      } else {
        return 'Некорректные данные';
      }
    } else {
      if (mark >= 1 && mark <= 5) {
        let subjectName = subject;
        this.subjects[subjectName].push(mark);
      } else {
        return 'Некорректные данные';
      }
    }
  }

  getAverageBySubject(subject) {
    let sum = 0;
    for (let i = 0; i < this.subjects[subject].length; i++) {
      sum += this.subjects[subject][i];
    }
    let avg = sum / this.subjects[subject].length;
    return avg;
  }

  getAverage() {
    let counter = 0;
    let sum = 0;
    for (let value of Object.values(this.subjects)) {
      counter += value.length;
      for (let i = 0; i < value.length; i++) {
        sum += value[i];
      }
    }
    let avg = sum / counter;
    return avg;
  }

  exclude(reason) {
    delete this.marks;
    delete this.subject;
    this.excluded = reason;
  }
}
