const baralho = []
let opcao = ""

do{
    opcao = prompt("\n (♣) (♦)  Baralho de Cartas (♥) (♠) \n" + " Neste jogo, você pode adicionar cartas,verificar a quantidade de cartas existente no baralho e poderá remover\n" +
    "\nMenu de opções:" +  
    "\n1. Visualizar \n2. Adicionar \n3. Remover\n4. Sair."
  )

  switch(opcao){
    case "1":
      alert("Cartas no baralho" +"\n\nQuantidade"+ " = " + baralho.length)
      break
    case "2":
      const novaCarta = prompt("Informa qual é a carta?")
      baralho.push(novaCarta)
      break
    case "3":
      const cartaRemovida = baralho.pop()
      if(!cartaRemovida){
      alert("Não existem cartas no baralho")
     }else{
      alert("A carta removida foi" +" = " + cartaRemovida)
     }
      break
    case "4":
      alert("Sair do jogo")
      break
    default:
      alert("Opção inválida!, por favor, tente novamente")  
  }
}while(opcao !=="4")
