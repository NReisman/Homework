class Person {
    constructor(fName, lName, age) {
        let _fName = fName;
        let _lName = lName;
        let _age = age;


        return {


            set first(fName) {
                _fName = fName;
            },
            get first() {
                return _fName;
            },
            set last(lName) {

                _lName = lName;
            },
            get last() {
                return _lName;
            },
            set age(age) {
                if (age > 120 || age < 0) {
                    throw new Error('age must be a number between 0-120');
                }
                _age = age;
            },
            get age() {
                return _age;
            }
        };
    }
}

