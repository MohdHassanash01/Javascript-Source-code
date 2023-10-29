class Product2{

    #rating  //for private
        constructor (name,prize,rating){
    this.name = name
    this.prize = prize
    this.#rating = rating
        }
    
    
        dispaly(){
            console.log('display the currnt product');
            console.log(this.name,this.prize,this.#rating);
        }
    
        static custom(n){
            console.log("calling static method");
            
        }

        get Ratingget(){
          console.log(this.#rating);  
        }

        set Ratingset(r){
            if (r<0) 
                 return;
             this.#rating = r

        }
    }
    
    const p3 = new Product2("iphone",100000,"5star") //new -> creates an empty plain object
    console.log(p3);
p3.Rating = 10
p3.Ratingget