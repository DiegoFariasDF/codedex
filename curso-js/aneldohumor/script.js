let drakePicTwo = document.getElementById("drake-pic-2");

let var1 = document.getElementById("stone");
let ramdomNumber = Math.floor(Math.random()*9);


if (ramdomNumber == 0){
    document.getElementById("stone").style.backgroundColor = "red";
}

else if(ramdomNumber == 1){
    document.getElementById("stone").style.backgroundColor = "orange";
}

else if(ramdomNumber == 2){
    document.getElementById("stone").style.backgroundColor = "yellow";
}

else if(ramdomNumber == 3){
    document.getElementById("stone").style.backgroundColor = "green";
}

else if(ramdomNumber == 4){
    document.getElementById("stone").style.backgroundColor = "blue";
}

else if(ramdomNumber == 5){
    document.getElementById("stone").style.backgroundColor = "#4169e1";
}

else if(ramdomNumber == 6){
    document.getElementById("stone").style.backgroundColor = "#00008b";
}

else if(ramdomNumber == 7){
    document.getElementById("stone").style.backgroundColor = "purple";
}

else if(ramdomNumber == 8){
    document.getElementById("stone").style.backgroundColor = "black";
}



drakePicTwo.src = "https://i.imgur.com/RGbh6zY.png";





// seleciona o elemento pelo nome
//document.querySelector("p");

// seleciona o elemento pela classe nome
//document.querySelector(".class-name");

// seleciona pelo id nome
//document.querySelector("#id-name");