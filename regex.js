// regular expression 

// regex is used to find the pattern 

let pattern = 'pw'
let regExone = new RegExp(pattern)

let flag = 'gi'

let regExtwo = new RegExp(pattern,flag)

let RegExthree =/pw/gi

let strTocheck = "pw is growing at a rapid speed and pw is best plateform to learn skill ,pw provides best courses"
const result = regExtwo.test(strTocheck)
console.log(result);


let anotherResult = strTocheck.match(RegExthree)
console.log(anotherResult);

const rep = strTocheck.replace(regExtwo,'p-w')
console.log(rep);


const weburl = "https://pwskills.com/hitesh%20choudary"

const useableURL = weburl.replace(/%20/,'-')
console.log(useableURL);
