
class Person {
  constructor(first, last, age) {
    this.first = first;
    this.last = last;
    this.age = age;
  }

  get age() {
    return this._age;
  }

  set age(age) {
    age = +age;
    if (isNaN(age) || age < 0 || age > 120) {
      throw new Error('age must be a number between 0 and 120');
    }
    this._age = age;
  }

  toString() {
    //return `${this.first} ${this.last} ${this.#age}`;
    let retVal = '';
    for (let prop in this) {
      if (this.hasOwnProperty(prop)) {
        retVal += `${prop}: ${this[prop]} `;
      }
    }
    return retVal;
  }
}

const p = new Person('Joe', 'Biden', 1);
console.log(p.toString());
p.age = 89;
console.log(p);
console.log(`hello ${p} ${p.age}`);
p.age = '12';

class Student extends Person {
  constructor(first, last, age, grade) {
    super(first, last, age);
    this.grade = grade;
  }
}

const s = new Student('Kamala', 'Harris', 55, 0);
const a = new Student('John', 'smith', 82, 3);
const b = new Student('jack', 'stein', 67, 9);

const students = [s, a, b];
// console.log(s.toString());
// console.log(s);

// setOrder()
function printStudents(backwards, ...theStudents) {
  theStudents.forEach(student => {
    /*if(!backwards) {
      console.log(student.first, student.last, student.age, student.grade);
    } else {
      console.log(student.last, student.first, student.age, student.grade);
    }*/

    /*const { first, last, age, grade } = student;
    if (!backwards) {
      console.log(first, last, age, grade);
    } else {
      console.log(last, first, age, grade);
    }*/

    let { first: a, last: b, age, grade } = student;
    if (backwards) {
      /*const temp = first;
      first = last;
      last = temp;*/
      [a, b] = [b, a];
    }
    console.log(a, b, age, grade);
  });
}

printStudents(false, ...students);
printStudents(true, ...students);


// function printStudents(backwards, ...students) {
  
//   console.log(students);

// }
// printStudents(students);