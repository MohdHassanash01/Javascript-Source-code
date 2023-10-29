let car = {
    
    name1:'Honda city',  // properties
    manufacturing:'hoda',
    fuelcapacity:'40L',
Isautomatic:true,
greetme :function(){  // method aur behaviour
    console.log("helloo world");
}
}
console.log(car.greetme());

// let car2= {
    
//     name1:'sonet',
//     manufacturing:'kia',
//     fuelcapacity:'40L',
//     Isautomatic:false

// }

// console.log(car2);
// console.log(car2.name1);
// console.log(car.name1,car.manufacturing,car.fuelcapacity);
// console.log(car["manufacturing"],car2["name1"]);

// car.color = "red"  // update
// console.log(car);


// second method 

// let detail = new Object()
// console.log(detail);  // output is empty objet

// detail.name="hassan ashraf";
// detail.age = 21;
// detail.expertise = ["web developer","app developer"]
// detail.postGraduated = false
// detail.country = "india"
// detail.greetme =function(){
//     console.log("helloo world");
// }
// console.log(detail);




// using constructor method 


function Course(
    instructor,
    title,
    description,
    language,
    duration,
    fess,
    startdates
    ){
    this.instructor = instructor;
    this.title = title;
    this.description = description;
    this.language = language;
    this.duration = duration;
    this.fess = fess;
   this.startdates = startdates
}

const javascript = new Course("hassan ashraf","javascript foundation","javascript programming course","english",10,"free","april 2023")

console.log(javascript);

// const fullStackcourse = new Course("hassan ashraf",
// "mern foundation",
// "web developer course",
// "english",
// 10,"free",
// "sept 2023")
// console.log(fullStackcourse);



// delete data 

// delete detail.age;
// console.log(detail);

// update 

// detail.postGraduated = null
// console.log(detail);



// MEthod of object


// console.log(Object.keys(detail));
// console.log(Object.values(detail));

// Object.freeze(detail)
// detail.country = "india";
// console.log(detail);


// Object.freeze(detail)
// detail.postGraduated = true
// console.log(detail);


// Object.seal(detail)
// detail.country = "london"
// console.log(detail);

// for (let keys  in detail){
//     console.log(detail[keys]);
// }