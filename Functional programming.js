// foreach 

let courseIncart = [
    {
        name:"javascript",
        duration:' 3 month'
    },
    {
        name:"c++",
    },
    {
        name:"Python",
    },
    {
        name:"c",
    }
]

courseIncart.forEach((item,idx) =>{
console.log(item);
// console.log(item.name);
// console.log(`index: ${idx},Item = ${item.name} `);
}) 


let output =[]
const prices = [1000,1500,3500,2500]
// output after 50% discount 
prices.forEach(function(item){
   output.push(item*0.5)
})
// console.log(output);


// map

const newprices = prices.map(function(item,idx){
return item*0.5
})
// console.log(newprices);


// string convert into number 
const prices12 = ['1000','1500','3500','2500']
let result1 = prices12.map(function(item,index){
    return Number(item)
})
// console.log(result1);



// filter 

const prices1 = [1000,1500,3500,2500]
const filterPrices = prices1.filter(function(item,index) {
    if(item<2000){
        return true
    }
    else{
        return false
    }
})
// console.log(filterPrices);



const name1 = ["hassan","saud","asharflol","saifullahlol","saif"]
let charLessfive = name1.filter(function(char){
    if(char.length <=6){
        return true
    }
    else{
        return false
    }
})
// console.log(charLessfive);



let names = ['hassanlol','ashraf','saif','dawoodlol']
let nameWithlol = names.filter(function(item,index){
  return  item.endsWith("lol")
})
// console.log(nameWithlol);


// reduce =>  reduce se single value milti hai

const prices2 = [1000,1500,3500,2500]
let sumcourse = prices2.reduce(function(sum,item,index){
sum = sum +item
return sum
},0)

// console.log(sumcourse);




// every => every methid check all the item in an array pass the specified condition or not

const prices3 = [1000,1500,3500,'2500']
let allAreNumbers = prices3.every(function(item,index){
    return typeof item==="number"
})
console.log('every = ',allAreNumbers);


// find 

let courses = ["javascript","python","c++"]
 let search = courses.find(function(item,index){
    return item==="javascrips"
})
console.log(search);


// sort 


let courses1 = ["javascript","python","c++"]
let sorted = courses1.sort()
// console.log(sorted);


const prices5 = [1000,100,150,1500,3500,2500]

const number = prices5.sort(function(a,b){
    if (a>b){
        return 1;

    }
    if (a<b) {
        return -1;
    }
    return 0
})

// console.log(number);














