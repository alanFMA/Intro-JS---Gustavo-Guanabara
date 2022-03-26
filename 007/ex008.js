let vel = Number(window.prompt("Digite a velocidade do veículo"));
if (vel >= 60) {
  console.log("Você ultrapassou o limite de velocidade.");
} else if (vel >= 25) {
  console.log("Você está dentro do limite de velocidade.");
} else {
  console.log("Você está abaixo do limite de velocidade.");
}
