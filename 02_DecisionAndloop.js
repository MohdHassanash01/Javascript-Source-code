// Condition 

let age = 10
if (age >= 18) {
    console.log("you are allowed to vote");
}
else{
    console.log("you are not allowed to vote");
}


//ELSE IF Statement
let signal = "yellow"
if (signal == "red") {
    console.log("RED => StOP");
}
else if(signal == "yellow"){
    console.log("yellow => Go slow");
}
else{
    console.log("green => go fast");
}

//switch case 

let user = "Student"

switch (user) {
    case "Admin":
        console.log("he is admin")
        break;
    case "Student":
        console.log("he is student")
        break ;
    case "mentor":
        console.log("he is mentor")
        break;

    default:
        console.log("invalid name");
        break;
}


// LOOP 

let a= 12
for (let i = 0; i <=a; i++) {
    console.log(i)
    
}




let number = 4
for (let i = 1; i <= 10; i++) {
    console.log(`${number} X ${i} =`,number*i);
    
}

let i = 0;
while (i<=10) {
    console.log(i);
    i++
}

let n = 1
do {
    console.log(`Index ${n} :hello world `);
    n++
} while (n<=5);

// Ternary condition 
 isLogin = true  //loselytyped language
isLogin? console.log("home page"):console.log("login_page");


// for in loop

let obj = {
    name :'hassan ashraf',
    age:21,
    country:'india',
    language:"hindi"
}

for (const key in obj) {
        // console.log(obj[key]);
        // console.log(key);
        // console.log(`${key}  ${obj[key]}`);
        
    }


    let arr = [1,2,3,4,5,6]
   let sum = 0
   for (const i of arr) {
    sum += i
//    console.log(i);
   }
  
console.log(sum);