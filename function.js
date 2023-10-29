// function without parameter and return

// function print(){
//     console.log("hello world");
// }
// print()


// // function with return value 

// function passMessage(){
//     return "I am happy to learn web dev"
// }

// const message = passMessage()
// console.log(message);
// console.log(message.toUpperCase());


// const newMessage = message + " Enroll Today"
// console.log(newMessage);


// function with parameter 

function passMessage(coursename,EnrollMessage = "enroll karo harami"){
    return "I am happy to learn "+ coursename + "from Pw Skills by Chirag Goyal" + EnrollMessage 
}

// console.log(passMessage('full stack development',"enroll today"));
// console.log(passMessage('web development',"enroll tomorrow"));
// console.log(passMessage('front development'));
// console.log(passMessage('Backend development'));



// function with multiple parameter 
 
// function sum(a,b){
//     return a+b;
// }
// let total = sum(2,2)
// console.log(total);


// function with unlimited parameter 


function sumOfAllparameter(){
    let sum = 0
    for (let i = 0; i < arguments.length; i++) {
         sum = sum + arguments[i];
        
    }
    return sum
   
}
const total = sumOfAllparameter(1,2,3,4,5,6,7)

console.log(total);




// Arrow function 


// const square1 = (x)=> x*x
// console.log(square1(2));
// console.log(square1(3));



// let square2 = (x,y) => x+y
// console.log(square2(2,3));


// let square3 = (x) => {
//     console.log("input value :-",x);
//     return x*x
// }
// console.log(square3(3));




// Anonymous function 


// const getFullName = function (firstname,lastname) {
//     return firstname+" "+lastname
// }
// console.log(getFullName("hassan","ashraf"));



// immediately invoked function 

(function(x) {
    console.log(x*x);
})(5);




// // function expressions 

let sum = function (x,y){
    return x+y
}

const total1 = sum;  // sum ko call nhi kiya , sum reference total ko dediya  
console.log(total1(3,9));