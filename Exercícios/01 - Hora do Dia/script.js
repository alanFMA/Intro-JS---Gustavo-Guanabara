function carregar() {
  var msg = document.getElementById("msg");
  var foto = document.getElementById("imagem");
  var data = new Date();
  var hora = data.getHours();
  var minutos = data.getMinutes();

  msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos.`;

  if (hora >= 0 && hora < 12) {
    foto.src = "img/dia.png";
    document.body.style.background = "#e2cd9f";
  } else if (hora >= 12 && hora < 18) {
    foto.src = "img/tarde.png";
    document.body.style.background = "#b9846f";
  } else {
    foto.src = "img/noite.png";
    document.body.style.background = "#515154";
  }
}
