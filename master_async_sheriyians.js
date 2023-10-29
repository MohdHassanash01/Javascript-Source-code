// 1)  sync and Async kya hota hai

// sync matlab ek ke baad dusra hoga, jab tak ek command complete naa ho ,dusra shuru nhi hoga

//Async maltab saare kaam ek sath shuru kardo , jiska answer pehle aajaye uska jawaab dedena 

// kaise pata chalta hai ki hum sync code likh rahe ya async ?


// setInterval
// setTimeout
// Promise
// fetch
// axois
// XMLHttpRequest

// ye sab async me use hota hai 


// 2) async js hai kya ?

// kai baar apka final code depend hota hai kisi aur ke server par, is case mein humein nhi pata hota ki answer uske server se kab laut kar aayega, to hum kya nhi kr skte is writting sync code. isse nipatne ke liye hum log async code likh dete hai taaki blocking naa ho and jab bhi answer aaye humara answer ke respect mein chalna waale code chal jaaye


// 3)  javascript is not asynchronous ?
//    yes


// jo bhi main stach par hota hai wo output karta hai and jo bhi side stack par hota hai wo behind the scences processing kar sakta hai aur jab uski processing complete ho use main stack mein laa kar chalaya ja sakta hai

// 4) single threading and multi threading 

// javascript is single thread programming language


// 5) callback 

// callback humesha ek function hota hai , ye sirf tab chalta hai jab async code ka completion hojata hai 

// async code likhne ke liye
// setInterval
// setTimeout
// Promise
// fetch
// axois

// answer chalane ke liye 
// then catch
// callbacks
// async await 


// 6) promises

// let ans = new Promise((res,rej)=>{
//     if (true) {
//         return res()
//     }else{
//         return rej()
//     }
// })

// ans.then(function(){
//     console.log('resolve hogya tha ');
// })
// .catch(function(){
//     console.log('reject hua tha');
// })


// question:- user will ask for a number between 0 se 9 and if the number is below 5 resolve if not reject


// let promise = new Promise(function(res,rej){
//     let num = Math.floor(Math.random()*10)
//     console.log(num);
//     if (num<5) {
//         return res()
//     } else {
//         return rej()
//     }
// })
// promise.then(
//     function(){
//         console.log('below');
//     }
// )
// .catch(function(){
//     console.log('above');
// })

// sabse pahle ghar par aao
// gate kholo aur gate band karo
// khana pakao khana khao
// molible chalaoo
// sojao kyuki tum thak gye ho


// let promisetwo = new Promise(function(res,rej){
//     return res("sabse pahle ghar par aao")
// })

// promisetwo.then(function(data){
//     console.log(data);
//     return new Promise(function(res,rej){
//         return res("gate kholo aur gate band karo")
//     })
// }).then(function(data){
// console.log(data);
// })

let promisetwo = new Promise(function(res,rej){
    return res("sabse pahle ghar par aao")
})

let p2 = promisetwo.then(function(data){
    console.log(data);
    return new Promise(function(res,rej){
        return res("gate kholo aur gate band karo")
    })
})

let p3 = p2.then(function(data){
    console.log(data);
    return new Promise(function(res,rej){
        return res('khana pakao khana khao')
    })
})

p3.then(function(data){
   console.log(data);
})

// 7) async await 

// koi bhi esa function jisme aap async code likhege ,kyoki async code hai to app promises ka istemal kar sakte hai,jab uska answer aayega appko then lagana padega ,us then ko lagaane se bachne ke liye , app async await ka istemaal kar sakte hai 

// function abcd(){
//     fetch('https://randomuser.me/api/')
//     .then(function(raw){
//         return raw.json()
//     })
//     .then(function(data){
//         console.log(data);
//     })
// }
// abcd()


async function abc(){
let userdata =   await fetch('https://randomuser.me/api/')
 let answer = await userdata.json()
 console.log(answer);
}

abc()


// concurrency and parallelism

// concurency => js mein sync code and async code ek sath process ho raha tha ye hai concurrency

// parallelism => focus jaada karta hai different processors and unke cores par kaam ko chalaana par 

// throttling => kisi code ko control karna of executions 