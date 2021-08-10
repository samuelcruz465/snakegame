let canvas = document.getElementById("snake");
//renderiza desenho context
let context = canvas.getContext("2d");
let box = 32;


function criarBG(){
    context.fillStyle = "lightgreen"
    context.fillRect(0, 0, 16 * box, 16 * box);
}

criarBG();