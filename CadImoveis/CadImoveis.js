const imoveis = [];
let opcao = "";

do {
  opcao = prompt(
    "\n**************************\n" +
      " Cadastro de imóveis " +
      "\n**************************\n" +
      "Escolha uma opção: \n1. Novo imóvel ;\n2. Listar imóvel;\n3. Sair." +
      " \n No campo abaixo, informe o número da opção."
  );

  switch (opcao) {
    case "1":
      const cadastro = {};

      cadastro.proprietario = prompt("Informe o nome do proprietário:");
      cadastro.quartos = prompt("Informe a quantidade de quartos:");
      cadastro.banheiros = prompt("Informe a quantidade de banheiros:");
      cadastro.garagem = prompt("Informe se tem garagem? (sim/não)");

      if (cadastro.garagem == "sim") {
        console.log("Imóvel tem garagem.");
      } else {
        console.log("Imóvel sem garagem");
      }

      const confirmacao = confirm(
        "\n Nome do proprietário :" +
          cadastro.proprietario +
          "\nQuantidade de quartos :" +
          cadastro.quartos +
          "\nQuantidade de Banheiros :" +
          cadastro.banheiros +
          "\n Garagem :" +
          cadastro.garagem
      );

      if (confirmacao) {
        imoveis.push(cadastro);
        alert("Cadastro salvo!");
      } else {
        alert("Retornar");
      }
      break;
    case "2":
      for (let i = 0; i < imoveis.length; i++) {
        alert(
          "Imóvel = " +
            (i + 1) +
            "\nProprietário: " +
            imoveis[i].proprietario +
            "\nQuartos: " +
            imoveis[i].quartos +
            "\nBanheiros: " +
            imoveis[i].banheiros +
            "\nPossui garagem? " +
            imoveis[i].garagem
        );
      }
      break;
    case "3":
      alert("Sair!");
      break;
    default:
      alert("Opção inválida!\nPor favor, tente novamente.");
  }
} while (opcao !== "3");
