
let emp = {
    id: 101,
    name: "hassan",
    age:24

}

// let keys = Object.keys(emp)
// console.log(keys);

// let values = Object.values(emp)
// console.log(values);

let entries = Object.entries(emp)
console.log(entries)

// emp.id = 122
// console.log(emp);

// Object.freeze(emp) // we cannot update and change any keys and vslues
// console.log(emp);

// Object.seal(emp)  // only update allowed
// emp.name = "ashraf"
// console.log(emp); 

let obj = Object.assign({x:"lol"})
console.log(obj);