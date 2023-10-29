class User{
    constructor (username,email,password){
this.username = username
this.email = email;
this.password = password
    }

encryptPassword (){
    return `${this.password}abc`
}
usernamechange(){
    return`${this.username.toUpperCase()}`
}

}
let chai = new User("hassan","ashraf@gmail.com","mohdhshs")
console.log(chai);
console.log(chai.encryptPassword());
console.log(chai.usernamechange());




// inheritance 

// class user2{
//     constructor(username){
//         this.Username = username

//     }

//     login(){
//        console.log(`Username is ${this.Username}`);
//     }
// }

// class teacher extends user {
//     constructor (username,email,password){
//         super(username)
//         this.email = email
//         this.password = password
//     }
//     addcourse(){
//         console.log(`A new course is add by ${this.username}`);
//     }
// }

// const tea =new teacher("chai","chai@gmial.com",1234)

// chai.addcourse()