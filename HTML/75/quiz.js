window.app = window.app || {};
window.app.pairs = (function () {
  'use strict';


let population = [];
let populationCount = 0;

function Person(id,gender,firstName,lastName){
    //simplified version
    this.id = id;
    this.gender = gender;
    this.firstName = firstName;
    this.lastName = lastName;
}




function makeGender(){
    let genderNum;
for (let g = 0 ;g < 2; g++){
   
   if(g === 0){
    genderNum= "male";
   }
   else if(g === 1){
    genderNum= "female";
   }
return genderNum;

}
}
function createPerson(){

    return new Person(++populationCount,makeGender() );
  }
for(let i = 0; i < 40; i++){
 
  population[populationCount] = createPerson();
}

console.log("The population consists of: ", population);

  
}());