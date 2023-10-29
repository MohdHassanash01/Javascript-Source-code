function call(x,fun){
    console.log(x*x);
    fun()
}
call(10,function(){
    console.log('done with callback');
})


// console.log("start");
// setTimeout(function fu(){
// console.log("timer done");
// },3000)
// console.log('end');



// promise 

// const promiseOne = new Promise(function(resolve,reject){
//     // do an async tash 
//     setTimeout(function(){
//         console.log("asyn task is complete");
//         resolve()

//     },1000)
    
// })

// promiseOne.then(function(){  // promise consumed
//     console.log("promise consumed");
// })

//+++++++++++++++++++++++++++++++++++++++++++++++

// new Promise(function(resolve,reject){
//     setTimeout(function(){
// console.log("Async with two");
// resolve()
//     },1000)
// }).then(function(){
//     console.log("Asunc 2 resolve");
// })


//+++++++++++++++++++++++++++++++++++++++++


// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(function() {
//        resolve({username:"chai",email:"chaixemail.com",}) 
//     },1000 );
// })

// promiseThree.then(function(user){
//     console.log(user);
// })

//+++++++++++++++++++++++++++++++++++++++++++

// const promisefour = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = false
//         if(!error){
//             resolve({username:'hassan',password:'123'})
//         } else{
//             reject('error,something went wrong')
//         }
//     },1000)
// })

// promisefour
// .then((user)=> {
//     console.log(user);
//     return user.username
// })
// .then((username)=>{
// console.log(username);
// })
// .catch(function(error){
//     console.log(error);
// }).finally(()=> console.log("the finally is executed"))


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const promisefive = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = true
//         if (!error){
//             resolve({username:'javascript',password:'123'})
            
//         }else{
//             reject('error : js went worg')
//         }
//     },1000)
// })

// async function consumedPromise(){
//    try {
//     const respone = await promisefive 
//     console.log(respone);
//    } catch (error) {
//     console.log(error);
//    } 
// }

// consumedPromise()


//++++++++++++++++++++++++++++++++

fetch('https://jsonplaceholder.typicode.com/users')
.then((respone)=>{
return respone.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))
