// spread 

let one = [1,2,3,4,5]
let two = [6,7,8,9,10]
let three = one.concat(two)
console.log(three);

let four = [...one,...two]
console.log(four);


function manyargs(){
    let args = Array.from(arguments)
    let final = args.map((item) => item)
    console.log(final);
}

manyargs(1,2,3,4,5)


function manyargs1(...args){
let num = args.map((e)=> e)
console.log(num);
}

manyargs1(6,7,8,9,10)


// spread 

let mcHeroes = ['Ironman','hulk','Thor']
let dcHeoes = ['superman',...mcHeroes,'Flash']
console.log(dcHeoes);


let name1 = 'hassan'
console.log([...name1]);


function printValues(...value){
    return value + ['ashraf'] 
}
console.log(printValues('hassan'));