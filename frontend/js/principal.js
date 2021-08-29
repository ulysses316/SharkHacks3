let one = document.querySelector(".uno");
let two = document.querySelector(".dos");
let three =document.querySelector(".tres");
let four = document.querySelector(".cuatro");
let five =document.querySelector(".cinco");
let six = document.querySelector(".seis");
let seven =document.querySelector(".siete");
let eight =document.querySelector(".ocho");
let nine =document.querySelector(".nueve");
let ten =document.querySelector(".diez");
let btn = document.querySelectorAll(".btn-s");

let btn_shark = document.getElementById("shark-btn");
let btn_human = document.getElementById("btn-persona");

/*
humano - rawrarawraw
tiburon rawrawrararaw 
telegram - rawrarawrararaw

*/
function cambiaTextoTiburon(){
    one.text = "rawrarawraw";
    two.text = "rawrawrararaw";
    three.text = "rawrarawrararaw";
    four.innerHTML = "Rawrawrara rawra rawrawrararaw ";
    five.innerHTML = "raw rawra rawrawrawrawrraw ra ra raw raw raw raw raw ra rarara raw rawraw rawra rawrawrawrawrraw ra ra raw raw raw raw rawraw raw";
    six.innerHTML = "rawraw raw rawrarawraw rara rawrawrararaw ";
    eight.innerHTML= "rawraw raw rawrawrararaw rararawrarawraw";
    ten.innerHTML = "rawra rawrarara ra rawrarawrararaw";
    btn[0].innerHTML = "rawrawrawara";
    btn[1].innerHTML = "rawrawrawara";
    btn[2].innerHTML = "rawrawrawara";
    btn[3].innerHTML = "rawrawrawara";

}   

function cambiaTextoHumano(){
    one.text = "human";
    two.text = "shark";
    three.text = "telegram";
    four.innerHTML = "Talk with a shark";
    five.innerHTML = "Are you tired of not understanding your shark friend. Don't worry! We created an app that will allow you to communicate with your friend. It's a shark-translator. Just record a voice note and we will translate it to shark. And there's more. Also, a shark will be able to translate to human what  they is trying to say. ";
    six.innerHTML = "Translate from human a shark.";
    eight.innerHTML= "Translate from shark to human.";
    ten.innerHTML = "Try our android app";
    btn[0].innerHTML = "talk!";
    btn[1].innerHTML = "talk!";
    btn[2].innerHTML = "talk!";
    btn[3].innerHTML = "Try it!";
}
btn_shark.addEventListener("click", cambiaTextoTiburon);
btn_human.addEventListener("click", cambiaTextoHumano);

