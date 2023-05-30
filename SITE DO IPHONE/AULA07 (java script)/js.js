function controle(){
    //variavel com referencia ao elemento HTML
var btn = document.getElementById("btn");
var box01 = document.getElementById("box-01");
var box02 = document.getElementById("box-02");
var box03 = document.getElementById("box-03");
var box04 = document.getElementById("box-04");
var container = document.getElementById("container");
container.style.backgroundColor = "#000";

if(btn.innerHTML == "PAUSE"){
    btn.innerText = "PLAY";
    box01.style.animationPlayState = "paused";
    box02.style.animationPlayState = "paused";
    box03.style.animationPlayState = "paused";
    box04.style.animationPlayState = "paused";
    container.style.backgroundColor = "#666";
    
}
else{
    btn.innerText = "PAUSE";
    box01.style.animationPlayState = "running";
    box02.style.animationPlayState = "running";
    box03.style.animationPlayState = "running";
    box04.style.animationPlayState = "running";
    container.style.backgroundColor = "#999";

}

}