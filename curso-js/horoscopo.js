const janeiro = "Capricórnio";
const fevereiro = "Aquário";
const março = "Peixes";
const abril = "Áries";
const maio = "Touro";
const junho = "Gêmeos";
const julho = "Câncer";
const agosto = "Leão";
const setembro = "Virgem";
const outubro = "Libra";
const novembro = "Escorpião";
const dezembro = "Sargitário";

let frases = {
  0: 'Quem tenta fazer todo mundo feliz acaba se sentido mais sozinho.',
  1: 'A vida e uma caixa preta nunca saberemos o seu real significado.',
  2: 'Faça a pessoa que você gosta se sentir especial ao invés de só mais uma.',
  3: 'não deveríamos temer a morte, mais sim a vida.',
  4: 'Cada instante é sempre.',
  5: 'O aleatório não existe, nosso cérebro sempre toma decisões mesmo que ocultas.',
  6: 'No mundo do aleatório a ordem é não se preocupar.',
  7: '⁠Cuide de si mesmo como cuidaria de alguém que você ama.',
  8: 'Você não precisa de platéia cheia para reconhecer que você é o melhor.',
  9: 'Crescer dói, e dói muito.',
  10: 'Crescer dói, e dói muito.',
  11: 'Quem tenta fazer todo mundo feliz acaba se sentido mais sozinho.',
  12: 'E sem certezas do amanhã apostamos em um futuro aleatório.',
  13: 'É um mundo cruel e aleatório, mas o caos é todo tão bonito.',
  14: 'A vida é um grande jogo de cartas aleatório,meritocracia é uma falácia.'
}

let i = Math.floor(Math.random()*14);
  

while (i != -1){
  let mes = novembro;

  if (mes == janeiro){
    console.log("A mensagem para quem é de",janeiro,"é:",frases[i]);
    break
  }

  else if (mes == fevereiro){
    console.log("A mensagem para quem é de",fevereiro,"é:",frases[i]);
    break
  }

  else if (mes == março){
    console.log("A mensagem para quem é de",março,"é:",frases[i]);
    break
  }

  else if (mes == abril){
    console.log("A mensagem para quem é de",abril,"é:",frases[i]);
    break
  }

  else if (mes == maio){
    console.log("A mensagem para quem é de",maio,"é:",frases[i]);
    break
  }

  else if (mes == junho){
    console.log("A mensagem para quem é de",julho,"é:",frases[i]);
    break
  }

  else if (mes == julho){
    console.log("A mensagem para quem é de",julho,"é:",frases[i]);
    break
  }

  else if (mes == agosto){
    console.log("A mensagem para quem é de",agosto,"é:",frases[i]);
    break
  }

  else if (mes == setembro){
    console.log("A mensagem para quem é de",setembro,"é:",frases[i]);
    break
  }

  else if (mes == outubro){
    console.log("A mensagem para quem é de",outubro,"é:",frases[i]);
    break
  }

  else if (mes == novembro){
    console.log("A mensagem para quem é de",novembro,"é:",frases[i]);
    break
  }

  else if (mes == dezembro){
    console.log("A mensagem para quem é de",dezembro,"é:",frases[i]);
    break
  }
}



