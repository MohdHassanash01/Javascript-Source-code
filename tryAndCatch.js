// try{
// let x = undefined
// console.log(x[0]);
// }catch{
// console.log("error handling in catch");
// } finally{
// console.log("finally always get executed");
// }



// try{
//     console.log("hello");
//     console.log(a);
//     console.log('ending try');
// } catch{
//     console.log("handled");
// }
// console.log("End");



// class 


// class Product{

//     // properties -> name,price,ratting -> data member
//     // behaviour -> buying product -> function -> member function 
//     constructor (name,prize,rating){
// this.name = name
// this.prize = prize
// this.rating = rating
// // return 10 if you are returning primitive then it will be avoided in constructor 
// // return {x:12} if you are return non primitive then it will be return 
//     }


//     dispaly(){
//         console.log('display the currnt product');
//         console.log(this.name,this.prize,this.rating);
//     }

// }

// const p = new Product("iphone",100000,"5star") //new -> creates an empty plain object
// // console.log(p);
// // console.log(p.name);
// // p.dispaly()



// // function constructor 

// function product1(n,p,r){
//     this.name = n
//     this.price = p
//     this.rating = r
// }
// const p1 = new product1("mackbook",50000,4)
// console.log(p1);


// let x = {
//     pro : product1
// }
// x.pro('airpod',1500,7)
// console.log(x);

// //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// // statice finction


// class Product2{

// #rating  //for private
//     constructor (name,prize,rating){
// this.name = name
// this.prize = prize
// this.#rating = rating
//     }


//     dispaly(){
//         console.log('display the currnt product');
//         console.log(this.name,this.prize,this.#rating);
//     }

//     static custom(n){
//         console.log("calling static method");
//         console.log(n*n); 
//     }
// }

// const p3 = new Product2("iphone",100000,"5star") //new -> creates an empty plain object
// // console.log(p3);
// Product2.custom(8)
// // p3.dispaly()
// // statice finction ko class ka name se call kar sakte ho 



