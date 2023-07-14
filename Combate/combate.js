const soldado1 = prompt("Informe o nome do primeiro soldado:");
const ataque = parseFloat(
  prompt("Informe a quantidade de ataques que o soldado tem:")
);

const soldado2 = prompt("Informe o nome do segundo soldado:");
let vida = parseFloat(
  prompt("Informe a quantidade de vidas que o primeiro soldado tem:")
);
const defesa = parseFloat(
  prompt("Informe a quantidade de defesa que o segundo soldado tem:")
);
const temEscudo = prompt("Informe se tem escudo? (Sim/Não)");

let danoCausado = 0;

if (ataque > defesa && temEscudo === "Não") {
  danoCausado = ataque - defesa;
} else if (ataque > defesa && temEscudo === "Sim") {
  danoCausado = (ataque - defesa) / 2;
}

// duas formas para fazer esse bloco
//1 opção: let danoCausado = 0;
//ou 2 opção: para conclusão do if, inserir no fim do bloco o else abaixo:
//}else{
// danoCausado = 0
//}

vida -= danoCausado;

alert(
  "Soldado 1: " +
    soldado1 +
    "\nPoder de ataque " +
    ataque +
    "\n\n" +
    "Soldado 2: " +
    soldado2 +
    "\n Vida: " +
    vida +
    "\n Defesa: " +
    defesa +
    "\nTem Escudo: " +
    temEscudo
);
alert(
  "Resumo do Combate " +
    "\nQuantidade de ataques: " +
    ataque +
    " \n Danos causados: " +
    danoCausado +
    " \n Quantidade de defesas: " +
    defesa
);
