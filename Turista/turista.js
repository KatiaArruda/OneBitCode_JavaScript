const nome = prompt("Qual é o seu nome?");
let Totalcidades = "";
let contagem = 0;

let visitou = prompt("você visitou alguma cidade neste ano? (Sim/Não)");

while (visitou === "Sim") {
  let cidade = prompt("Qual é o nome da cidade? ");
  //cidades = cidades + ...
  Totalcidades += " - " + cidade + "\n";
  contagem++;
  visitou = prompt("você visitou alguma outra cidade neste ano? (Sim/Não)");
}

alert(
  "Turista: " +
    nome +
    "\nQuantidade de cidades visitadas: " +
    contagem +
    "\nCidades visitadas: \n" +
    Totalcidades
);
