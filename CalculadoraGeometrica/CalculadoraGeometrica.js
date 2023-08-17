function calculoAreaTriangulo() {
  const base = prompt("Informe a base do triângulo:");
  const altura = prompt("Informe a altura do triângulo:");
  return (base * altura) / 2;
}

function calculoAreaRetangulo() {
  const base = prompt("Informe a base do retângulo:");
  const altura = prompt("Informe a altura do retângulo:");
  return base * altura;
}

function calculoAreaQuadrado() {
  const lado = prompt("Informe o lado do quadrado:");
  return lado * lado;
}

function calculoAreaTrapézio() {
  const baseMaior = parseFloat(prompt("Informe a base maior do trapézio:"));
  const baseMenor = parseFloat(prompt("Informe a base menor do trapézio:"));
  return ((baseMaior + baseMenor) * altura) / 2;
}

function calculoAreaCirculo() {
  const raio = prompt("Informe o raio do círculo:");
  return 3.14 * raio * raio;
}

function Menu() {
  return prompt(
    "*******************************\n" +
      "Calculadora  Geométrica\n" +
      "*******************************\n" +
      "1. Calcular área de triângulo;\n" +
      "2. Calcular área de retângulo;\n" +
      "3. Calcular área de quadrado;\n" +
      "4. Calcular área de trapézio;\n" +
      "5. Calcular área de círculo;\n" +
      "6. Sair.\n" +
      "\nNo campo abaixo, informe o número da opção."
  );
}

function executar() {
  let opcao = "";

  do {
    opcao = Menu();
    let resultado;

    switch (opcao) {
      case "1":
        resultado = calculoAreaTriangulo();
        break;
      case "2":
        resultado = calculoAreaRetangulo();
        break;
      case "3":
        resultado = calculoAreaQuadrado();
        break;
      case "4":
        resultado = calculoAreaTrapézio();
        break;
      case "5":
        resultado = calculoAreaCirculo();
        break;
      case "6":
        alert("Sair");
        break;
      default:
        alert("Opção Inválida, tente novamente!");
        break;
    }

    if (resultado) {
      alert("Resultado -> " + resultado);
    }
  } while (opcao !== "6");
}

executar();
