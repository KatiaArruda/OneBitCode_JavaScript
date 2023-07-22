let saldo = prompt("informa qual é o saldo da conta?");
saldo = parseFloat(saldo);
let conta = "";

do {
  conta = prompt(
    "\n Saldo disponível na conta R$ " +
      saldo +
      "\n1.Adicionar valor" +
      "\n2.Remover valor" +
      "\n3.Sair da conta" +
      "\n"
  );

  switch (conta) {
    case "1":
      saldo += parseFloat(prompt("Informe o valor a ser adicionado:"));
      break;
    case "2":
      saldo -= prompt("Informe o valor a ser removido:");
      break;
    case "3":
      alert("A escolha foi sair da conta");
      alert("Encerrando...");
      break;
    default:
      alert("\nOpção invalida!" + "\nPor favor, tente novamente");
  }
} while (conta !== "3");
