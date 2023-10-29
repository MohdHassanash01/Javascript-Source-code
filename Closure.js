let score = 4
function one(){
    let score = 0
    console.log(score);
}
one()
// console.log(score);

function two(){
    let score = 3
    console.log(score);
}
// two()

function three(){
    
    console.log(score);
}
// three()


function outerfunc (){
    let outervar = 'i am at scope level 1'
    function innerfunc(){
        let innerval = 'i am at scope level 2'
        console.log(outervar);
        
    }
  
    innerfunc()
}

outerfunc()



// const myGlobalvalue = 0
// function func(){
//     const val1 =1
//     console.log(myGlobalvalue);

//     function innerOfFunc(){
//         const val2 = 2
//         console.log(myGlobalvalue,val1,val2);

//         function ininerofinnerFunc(){
//             const val3 = 3
//             console.log(val3,val2,val1,myGlobalvalue);
//         }
//         ininerofinnerFunc()
//     }
//     innerOfFunc()
// }

// func()




// closure 


function superfunc(){
    let outerValue = 'I am outer'
    function minorFunc(){
        console.log(outerValue);
    }
    minorFunc()
}

superfunc()



let pagecount = 0
const items = [2,4,6,8,10]

items.forEach(function(num){
    pagecount++
    console.log(num);
})
console.log('page count is :',pagecount);




























