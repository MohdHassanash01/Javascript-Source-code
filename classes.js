// classes 




class product {
    // properties -> variables -> data member
    // name;
    // price;
    // ratting;


#price;
    constructor(n,p,r){
        console.log('call the constructor');
        this.name = n;  // this ek  object ko refer ya point karta hai
        this.#price = p;
        this.ratting = r;
        // return 10 // if you are rturning primitive then it will be avoid in constructor
    
        // return {x:0, y:20} // if you return non primitive then it will be return
        }

        static custom(){
            console.log('calling a static method');
        }

        get ratting(){
            console.log(this.#price);
        }

    // behaviours -> functions -> member functions
    display(){
        console.log("display the movie");
        console.log(this);
        console.log(this.name);
    }
    

}

let pro = new product('iphone',10000,5) // new -> creeate an empty plain object
// -> in the above piece of code we are calling the constructor


// console.log(pro);
// console.log(pro.name);
// pro.display()

// constructor multiple define hi ho sakte javascript me
// this keyword refer to the context from where we called


// product.custom()  // static function class ke sath join hote hai

// p.rating()