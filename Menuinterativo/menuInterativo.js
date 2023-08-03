let menu = "5";

do {
  menu = prompt(
    "\nMenu " +
      "\n\n1.Aumentar o canal" +
      "\n2.Diminuir o canal" +
      "\n3.Aumentar o volume" +
      "\n4.Diminuir o volume" +
      "\n5.Encerrar o Menu" +
      "\n"
  );

  switch (menu) {
    case "1":
      alert("1 - A escolha foi Aumentar o canal");
      break;
    case "2":
      alert("2 -A escolha foi Diminuir o canal");
      break;
    case "3":
      alert("3 - A escolha foi Aumentar o volume");
      break;
    case "4":
      alert("4 - A escolha foi Diminuir o volume");
      break;
    case "5":
      alert("5 - A escolha foi Encerrar o Menu");
      alert("Encerrando...");
      break;
    default:
      alert("\nOpção Invalida!" + "\nPor favor, tente novamente");
  }
} while (menu !== "5");
