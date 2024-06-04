const memeArray = [
    "https://i.imgur.com/bSi4xLb.png",
    "https://i.imgur.com/6y0G7N0.png",
    "https://i.imgur.com/LXnRao1.png",
    "https://i.imgur.com/Qqoxh1N.png"
];

let captionsArray = [
    "Tudo que vai, volta. Menos as canetas que eu emprestei na sala de aula…",
    "Falaram para eu devia seguir os meus sonhos, então eu virei pro lado e continuei dormindo. ",
    "Se eu concordasse com você, os dois estaríamos errados.",
    "Não siga as minhas pegadas, eu também estou perdido."
];

let randommeme = document.getElementById("random-meme");
let randomcaption = document.getElementById("random-caption");
let button = document.getElementById("generator-button");

button.addEventListener("click", function(){

    let randomMemeIndex = Math.floor(Math.random() * memeArray.length);
    let randomCaptionIndex = Math.floor(Math.random() * captionsArray.length);
    
    randommeme.src = memeArray[randomMemeIndex];
    
    randomcaption.innerText = captionsArray[randomCaptionIndex];
})



