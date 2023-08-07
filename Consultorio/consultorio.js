let fila = []
let opcao = ""

do{


 let pacientes = ""
 for(let i = 0; i<fila.length; i++){
  pacientes += (i + 1) + "° - " + fila[i] + "\n"
 }

 opcao = prompt(
    "\nEscolha uma opção: \n1. Visualizar Fila;\n2. Novo paciente;\n3. Consultar paciente;\n4. Sair\n\n No campo abaixo, informe o número da opção."
 )
 
switch(opcao){
 
  case "1":
    alert("\n****** Agenda do dia ******\n\n " + pacientes)
    break
    case "2":
    const novoPaciente = prompt("Informe o nome do paciente?")
    fila.push(novoPaciente)
    break
  case "3":
    const pacienteConsultado = fila.shift()
    if(pacienteConsultado){
      alert(pacienteConsultado + " - " +"foi removido(a) da fila.")
    } else{
      alert("Não há fila para consultas")
    }
    break
  case "4":
    alert("Sair!")
    break
    default:
    alert("Opção inválida!\nPor favor, tente novamente.")
}
}while (opcao !== "4")