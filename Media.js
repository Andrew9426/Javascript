class Media {
  constructor(title) {
    this._title = title;
    this._raitings = [];
    this._isCheckedOut = false;
  }
  get title() {
    return this._title;
  }
  get raitings() {
    return this._raitings;
  }
  get isCheckedOut() {
    return this._isCheckedOut; 
  } 
  set isCheckedOut(value) {
    this._isCheckedOut = value;
  }
 toggleCheckOutStatus() {
   this.isCheckedOut = !this.isCheckedOut;
 } 
 getAverageRating() {
   let raitingsSum = this.raitings.reduce((accumulator, raiting) => accumulator + raiting);
  return raitingsSum / this.raitings.length;
 }
 addRaiting(value) {
   this.raitings.push(value);
 }
}

class Book extends Media {
  constructor(author, title, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }

  get author() {
    return this._author;
  }

  get pages() {
    return this._pages;
  }
}

class Movie extends Media {
  constructor(director, title, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }

  get director() {
    return this._director;
  }

  get runTime() {
    return this._runTime;
  }
}

const historyOfEverything = new Book ('Bill Bryson', 'A Short History of Nearly Everything', 544);

historyOfEverything.toggleCheckOutStatus();
//console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRaiting(4);
historyOfEverything.addRaiting(5);
historyOfEverything.addRaiting(5);

const speed = new Movie('Jan de Bont', 'Speed', 116)
speed.toggleCheckOutStatus();
//console.log(speed.isCheckedOut)

speed.addRaiting(1);
speed.addRaiting(1);
speed.addRaiting(5);

speed.getAverageRating();
console.log(speed.getAverageRating())








