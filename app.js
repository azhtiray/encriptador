///funcion encriptar
function encriptar() {
  var texto = document.querySelector("#input-texto").value;
  var textoCifrado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");
  document.querySelector(".text-input-salida").value = textoCifrado;
  document.querySelector("#input-texto").value;
}
var boton1 = document.querySelector("#btn-encriptar"); boton1.onclick = encriptar;

///funcion desencriptar
function desencriptar() {
  var texto = document.querySelector("#input-texto").value;
  var textoCifrado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

  document.querySelector(".text-input-salida").value = textoCifrado;
  document.querySelector("#input-texto").value;
}
var boton2 = document.querySelector("#btn-desencriptar"); boton2.onclick = desencriptar;

///funcion copiar
function copiar() {
  var textoCopiado = document.querySelector("#msg");
  textoCopiado.select();
  document.execCommand("copy");
}
var boton3 = document.querySelector("#btn-copy"); boton3.onclick = copiar;


//////





// function borrarFormulario() {
//   document.getElementById("input-texto").reset.value();
// }

// function ocultar() {
//   var x = document.getElementById("#resultado");
//   if (x.style.display === 'none') {
//     x.style.display = 'block';
//   } else {
//     x.style.display = 'none';
//   }
// }







