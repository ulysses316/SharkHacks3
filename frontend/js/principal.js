let one = document.querySelector(".uno");
let two = document.querySelector(".dos");
let three =document.querySelector(".tres");
let four = document.querySelector(".cuatro");
let five =document.querySelector(".cinco");
let six =document.querySelector(".seis");
let seven =document.querySelector(".siete");
let eight =document.querySelector(".ocho");
let nine =document.querySelector(".nueve");
let ten =document.querySelector(".diez");
let eleven =document.querySelector(".once");
let btn = document.querySelectorAll(".btn-s");

let btn_shark = document.getElementById("shark-btn");

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
    seven.innerHTML = "rawrawrawraw raw rawra rawraw rawra raw rawraraw raw rawrarawraw rawraraw rawrawraraw raw rawrararawrarawrawrararawraraw rawrarararara";
    eight.innerHTML= "rawraw raw rawrawrararaw rararawrarawraw";
    nine.innerHTML = "rawrarara raw rawrara rawra rawraw raw rawraraw raw rawrarawraw rawrarawrawrarara rawrawrararawrarawrawrara rawrarararara";
    ten.innerHTML = "rawra rawrarara ra rawrarawrararaw";
    eleven.innerHTML ="rawrarara raw rawrara rawra rawraw raw rawraraw raw rawrarawraw rawrarawrawrarara rawrawrararawrarawrawrara rawrararawrawrawraw rawraw raw rwawaraw";
    btn[0].innerHTML = "rawrawrawara";
    btn[1].innerHTML = "rawrawrawara";
    btn[2].innerHTML = "rawrawrawara";
    btn[3].innerHTML = "rawrawrawara";

}   

btn_shark.addEventListener("click", cambiaTextoTiburon);