// 4 pillars of Dom

// 1) selection of an Element 
// 2) changing Html 
// 3) changing CSS
// 4) Event Listener 



let change = document.querySelector("h1")
// console.log(change);
change.innerHTML = 'hassan ashraf'
change.style.fontSize = '50px'
change.style.color = 'red'
change.style.textAlign = 'center'
change.style.backgroundColor = 'pink'


change.addEventListener('click',function(){
    change.innerHTML = 'hello world'
})


// event listner 
let flag = 0
let bulb = document.querySelector(".bulb")
let btn = document.querySelector("button")

btn.addEventListener("click",function(){
    if (flag==0) {
        bulb.style.backgroundColor = "yellow"
        console.log('click');
        flag = 1
    } else {

        bulb.style.backgroundColor = "transparent"
        flag = 0

    }
})


let on = document.getElementById("on")
let of = document.getElementById("of")

on.addEventListener("click",function(){
    bulb.style.backgroundColor = "red"
    // console.log('click');

})

of.addEventListener('click',function(){
    bulb.style.backgroundColor = "transparent"

})