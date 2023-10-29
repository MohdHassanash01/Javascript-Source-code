const btn = document.getElementById("button")
const ramdonColor = () => {
    let val = "0123456789ABCDEF"
    let hash ="#";
    for (let i = 0; i <6; i++) {
        hash = hash  + val[Math.floor(Math.random() * 16)];
        
    }
    return hash;
}

console.log(ramdonColor());

function changeramdonColor() {
    document.body.style.backgroundColor = ramdonColor()

}
btn.addEventListener("click",changeramdonColor)


















