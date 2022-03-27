var agora = new Date();
var hora = agora.getHours();
var saudacao = "";
if (hora < 12) {
  var saudacao = "Bom dia!";
  console.log(`${saudacao} Agora são exatamente ${hora} horas.`);
} else if (hora >= 12 && hora < 18) {
  var saudacao = "Boa tarde!";
  console.log(`${saudacao} Agora são exatamente ${hora} horas.`);
} else {
  var saudacao = "Boa noite!";
  console.log(`${saudacao} Agora são exatamente ${hora} horas.`);
}
