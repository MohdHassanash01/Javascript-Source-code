// function 

// function without parameter 

function print(){
    console.log("hello hassan");
}
// print()

// function with return value 

// function saymessage (){
//     return 'i am happy to learn web devlopment'
// }
// let message = saymessage()
// console.log(message);
// console.log(message.toUpperCase());

// let newMessage = message + ' and Enroll today'
// console.log(newMessage);


// function with parameter 

function saymessage(course, EnrollMessage = ' enroll kar harami'){
    return 'i am happy to learn '+ course + 'by pw skills'+ EnrollMessage ;
 }
// console.log(saymessage('web development'," today"));
// console.log(saymessage('Android development',));


function sum (x,y){
    return x+y;
}
// console.log(sum(12,14));
let total = sum(12,13)
// console.log('total is :',total);



// fumction with unlimited parameter

function sum1(){
    let sum = 0
    for (let i = 0; i < arguments.length; i++) {
    sum = sum + arguments[i]       
    }
    return sum
}
// console.log(sum1(1,2,3,4,5));

let total1 = sum1(12,13,10,11,12)
// console.log('total :',total1);

 
// Arrow  function 
 let square1 = (x)=> x*x
//  console.log(square1(3));

 let sum2 = (x,y,z) => x+y+z;
//  console.log(sum2(1,2,3));

 let square2 = (x) => {
console.log('input :',x);
     return x**x
 };

//  console.log(square2(3));


//  Anonmynous function 

let getFullName = function(firstname,lastname){
    return firstname +' '+lastname;

}

// let name1 = getFullName('Ayesha',"siddiqua")
// console.log(name1);
// console.log(getFullName('hassan',"ashraf"));


// immediatly invoke function 

// (function print(x){
// console.log(x*x);
// })(4)

// function expression 

let sum3 = function (x){
    return x*x
}
// let total3 = sum3;
// console.log(total3(7)); 


// object 

let student = {
    name: "hassan Ashraf",
    age:21,
    unversity: 'integral',
    course : 'web devlopment'
}

// console.log(student);
// console.log(student.age);
// console.log(student['name']);

student.name = "siddiqua"
// console.log(student);


// new 

let detail = new Object()
console.log(detail);
detail.name= 'saif ahmed khan';
detail.age= 20;
detail.course = 'App development';

// console.log(detail);


// constructor method 

    
function course(instructor,title,description,language,duration,startDate){
    this.instructor = instructor,
    this.title = title,
    this.description =description ,
    this.language = language,
    this.duration = duration,
    this.startDate = startDate
    
}
let javascript = new course("hassan Ashraf",
"javaScript",
'Java language',
'hinglish',
'3 months',
'3 April')

// console.log(javascript);


// higher Order Function 

let getfour = function(){
    return 4;
}
function useFunction(func){
    return func()
}
// console.log(useFunction(getfour));


function returnFunc (){
    return getfour
}

let exefunc = returnFunc()
// console.log(exefunc());


// callback 

function delivered(name,callback){
    console.log('done with delivery of '+ name);
    callback()
}
function successFunction(){
    console.log('product has been successfull delivered');
}
// delivered('macbook',successFunction)


// return function 

function multiple7(){
    return function(x){
        return x*7;
    }
}
let execfunc = multiple7()
// console.log(execfunc(3));



// functional programmming 

let course_name = [{
    name:'web devwelopment'
},{ name: 'App development'},{name:'devops'},{name:'data science'}
]

// course_name.forEach(item => {
//    console.log(item);
// });


let output = []
let price = [1000,2400,3500,1500,4000]
price.forEach((item)=>{
  output.push(item*0.5)
})
// console.log(output);

let count = price.map(function(item){
    return item*0.5;
})
// console.log(count);


let str = ['100','200','540','230','3500']
let count1 = str.map(function(item){
    return Number(item)
})
// console.log(count1);


// filter  

let price1 = [100,200,300,400, 540,150,190,196] 
let filt = price1.filter(function(item){
if (item< 200) {
    return true;
}
else{
    return false;
}
})
// console.log(filt);



// let name = ['hassan','Ashraf','daudlol','saud','mohsin']
// let filt1 = name.filter(function(item){
//     if (item.length >= 6) {
//         return true
//     }
// })
// console.log(filt1);



// let filt2 = name.filter(function(item){
// return item.endsWith('lol')
// })
// console.log(filt2);


// reduce 

let number  = [120,100,200,300,340]
let returnOne = number.reduce(function(sum,item){
sum = sum +item
return sum
},0)
// console.log(returnOne);


// every 

// let num1 = [1,34,55,64,'775',867,123]
// let ever = num1.every(function(item){
//     return typeof item==='number'
// })
// console.log(ever);


// find 

let name1 = ['hassan','Ashraf','daudlol','saud','mohsin']
let find1 = name1.find(function(item){
return item ==='hassan' 
})
// console.log('find :',find1);


// sort 

let name2 = ['hassan','Ashraf','daudlol','saud','mohsin']
let sort1 = name2.sort()
// console.log(name2);



let random = [12,11,100,29,34,67,550,210,150,170]
let sort2 = random.sort(function(a,b){
if (a > b) {
    return 1
}
if (a < b) {
    return -1
}
else{
    return 0
}
})
// console.log(sort2);


// destructure 

let one = [1,2,3,4,5]
let two = [6,7,8,9,10]
let three = one.concat(two);
// console.log(three);

let three1 = [...one,...two]
// console.log(three1);
 

// ++++++++++++++++++++++++++++++++++++++++++++

function sum(){
    let sum = 0
    for (let i = 0; i < arguments.length; i++) {
        sum = sum + arguments[i]
        
    }
    return sum
}
// console.log(sum(1,2,3,4,5));

// +++++++++++++++++++++++++++++++++++++++++++++


function manyargs (){
    let args = Array.from(arguments)
   let final = args.map(function (item){
    return item
   })
   console.log(final);
}


manyargs(1,2,3,4,5)

function manyargs2(...args){
    let final1 = args.map(function(item){
        return item
    })
    console.log(final1);
}

manyargs2(6,78,9,0,10)