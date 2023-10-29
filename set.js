// set is used to store always unique value 

let emptyset = new Set()

console.log(emptyset.size);


let myArray = [1,2,3,4,5]
let newset = new Set(myArray)
console.log(newset);

// newset.add(9)
// console.log(newset);

// console.log(newset.has(9));

// newset.clear()
// console.log(newset);


// set difference ++++++++++++++++++++++



// map 


let map = new Map()
console.log(map.size);

let arr = [
    [1,'hassan'],
    [2,'ashraf'],
    [3,'Dawood']
]

arr.map(function(item){
    return map.set([arrayItem[0],arrayItem[1]])
})