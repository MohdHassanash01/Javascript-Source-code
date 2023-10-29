
let getseven = function(){
    return 7
}
function useFunction(getseven){  //  isme function arguments me liya hai
return getseven()  //  function ko execute kar diya  
}
// console.log(useFunction(getseven)); // function ka reference pass kya hai



function returnFunction(){
    return getseven  // isme function return ho rha hai
}
const exFunc = returnFunction();
console.log(exFunc());



// Example of hOf  calculator banaiye

// function sum(x,y){
// return x+y
// }
// function subtract(x,y){
//     return x-y;
// }


// function calculatorFunction(fn ,x,y){
//     return fn(x,y)
// }
// console.log("Sum =",calculatorFunction(sum,1,2));
// console.log("subtract =",calculatorFunction(subtract,3,2));



// callback 

// function delivered(name ,callback){
//     console.log("done with deliver of " + name);
//     callback()
// }

// function successFunction(){
//     console.log('product has been successful delivered');
// }
// delivered("macbook",successFunction)

//+++++++++++++++++++++++++++++++++++++++++++++++

//callback hell





// return function 


// function multiple7(){
//     return function (x){
//         return x*7
//     }
// }
// const exe = multiple7()
// console.log(exe(7));



// function sum(x){
//     return function (y){
//         return x+y
//     }
// }

// console.log(sum(4)(5));



// function sum1(x){
//     return function(y){
//         return function(z){
//             return x+y+z
//         }
//     }
// }
// console.log(sum1(12)(12)(12));



// setInterval 


// let timer = setInterval(function(){
//     console.log("its time to drink water");
//     console.log(new Date());
//     clearInterval(timer);
// },5000)



// settomeout 

// let timerid = setTimeout(function(){
//     console.log("first task");
//     clearTimeout(timerid)
// },1000)

// setTimeout(function(){
//     console.log("second task");
// },2000)

// setTimeout(function(){
//     console.log("third task");
// },3000)



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++







































