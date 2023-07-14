const veiculo1 = prompt("Informe o nome do primeiro veículo:");
const velocidade1 = parseFloat(
  prompt("Informe a velocidade do segundo veículo KM: ")
);

const veiculo2 = prompt("informe o nome do segundo veículo:");
const velocidade2 = parseFloat(
  prompt("Informe a velocidade do segundo veículo KM: ")
);

if (velocidade1 > velocidade2) {
  alert(veiculo1 + " é mais rápido do que  " + veiculo2);
} else if (velocidade1 < velocidade2) {
  alert(veiculo2 + " é mais rápido do que  " + veiculo1);
} else {
  alert(veiculo1 + " e " + veiculo2 + " possuem velocidade iguais .");
}
