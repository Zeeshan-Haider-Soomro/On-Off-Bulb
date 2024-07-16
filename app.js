
let date = new Date()
let yearChanger = document.querySelector("#yearChanger")
yearChanger.innerText = `${date.getFullYear()}/${date.getMonth()}/${date.getDate()}`

let img = document.querySelector("#img");
let text = document.querySelector("#text");

let showBulb = false
function bulbOnOff(){
    
    // console.log(text.innerText);
    showBulb = !showBulb
    if(showBulb){
        img.src = "images/on.png"
        text.innerText = "ON"
    }else{
        img.src = "images/off.png"
        text.innerText = "OFF"
    }
}