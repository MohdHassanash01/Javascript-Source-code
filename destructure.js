 const one = [1,2,3,4,5]
const twoArray = [6,7,8,9]
// const threeArray = one.concat(twoArray)

// const threeArray =[one,twoArray]
// console.log(threeArray);


// const threeArray = [...one,...twoArray]
// console.log(threeArray);



//+++++++++++++++++++++++++++++++++++++++
// Question : ek function banao jitni bhi arguments aaye unko array ke andar chahiye 

function manyargs(){
    let args = Array.from(arguments)
    console.log(typeof arguments);
    let final = args.map(e => e)
    console.log(final);
}

manyargs(1,2,3,4,5)
manyargs(1,2,3,4,5,6,7,8)


// rest 

function manyargs1(...args){
let finalArr = args.map(item => item)
console.log(finalArr);
}

manyargs1(1,2,3,4,5,6)


// +++++++++++++++++++++++++++++++++

const names = ["superman","flash"]
const newname = ["batman",...names,"thor"]
console.log(newname);


const sitename = 'PW Skills'
console.log([...sitename]);



// rest example 


function pwskills(...value){
    return value
}
console.log(pwskills("hassan ","ashraf","Dawood Ahmed"));





function pwskills(...value){
return value
}

console.log(pwskills("hassan","ashraf"));


















