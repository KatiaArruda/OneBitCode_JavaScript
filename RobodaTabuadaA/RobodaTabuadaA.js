const numero = prompt( "Olá, eu sou o Robô da Tabuada" +
  "Informe o número que você deseja calcular a tabuada:")

let resultado = ""

for (let tabuada = 1; tabuada <= 20; tabuada++) {
  resultado +=
    " -> " + numero + " * " + tabuada + " = " + (numero * tabuada) + "\n"
}

alert(" Resultado da tabuada de " + numero + ":\n\n" + resultado)
