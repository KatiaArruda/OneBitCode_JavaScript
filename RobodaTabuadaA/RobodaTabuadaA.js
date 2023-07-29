const numeroT = parseFloat(
  prompt("Informe um número a ser usado nos cálculos:")
);

let resultado = "";

for (tabuada = 1; tabuada <= 20; tabuada++) {
  let result = numeroT * tabuada;
  alert("\nResultado" + "\n" + numeroT + " X " + tabuada + " = " + result);
}
