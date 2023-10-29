let myheros = ["thor","spiderman"]
let dcheros = ['superman','flash']

let herospower = {
    thor:"hammer",
    spider:'sling',

getspiderPower :function(){
console.log(`spidy power is ${this.spider}`);
}
}

Object.prototype.hassan = function(){
    console.log('hassan is present in all object');
}

console.log(myheros.hassan());
console.log(herospower.hassan());


Array.prototype.hihassan =function(){
    console.log('hassan says hii');
}
 

console.log(myheros.hihassan());
console.log(herospower.hihassan());



// // inheritance

// const user = {
//     name :"ashraf",
//     email:"a2gaim.com"
// }
// const Teacher = {
//     makeVedios : true
// }

// const TeacherSupport = {
//     isAvailable:false
// }
// const TAassistant = {
// makeAssignment :"js Assignment",
// fulltime :true,
// __proto__:TeacherSupport
// }
// console.log(TAassistant.isAvailable);

// // Teacher.__proto__=user


// Object.setPrototypeOf(user,Teacher)


// String.prototype.truelength = function(){
//     console.log(`True length is ${this.trim().length}`);
// }

// "hassan      ".truelength()
// "daud   ".truelength()























