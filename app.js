/* document busca un documento(html), getElementById busca una clase y 
innerHTML nos permite poner que hay dentro de esa clase*/
document.getElementById("demo").innerHTML = "0. hola " + (5 + 6);
/* ---------------------------------------------------------------------------- */

/* crea una alerta con el contenido en parentesis */
/* window.alert(5+6); */
/* ---------------------------------------------------------------------------- */
/* 1 */
function tiempo() {
  var hoy = new Date();
  var dia = hoy.getDay();
  var listaDias = [
    "domingo",
    "lunes",
    "martes",
    "miercoles",
    "jueves",
    "viernes",
    "sabado",
  ];
  var hora = hoy.getHours();
  var min = hoy.getMinutes();
  var sec = hoy.getSeconds();
  if (hora > 12) {
    hora = hora - 12;
    var ampm = "PM";
  } else {
    var ampm = "AM";
  }
  if (hora < 10) {
    hora = "0" + hora;
  }
  if (min < 10) {
    min = "0" + min;
  }
  if (sec < 10) {
    sec = "0" + sec;
  }
  document.getElementById("dia").innerHTML = listaDias[dia];
  document.getElementById("tiempo").innerHTML =
    hora + ":" + min + ":" + sec + " " + ampm;
}
tiempo();
tiempo = setInterval(tiempo, 1000);
/* ---------------------------------------------------------------------------- */
/* 2 */
function printPage() {
  window.print();
}
/* ---------------------------------------------------------------------------- */
/* 3 */
function añoActual() {
  var actual = new Date();
  var dd = actual.getDate();
  if (dd < 10) {
    dd = "0" + dd;
  }
  var mm = actual.getMonth();
  if (mm < 10) {
    mm = "0" + mm;
  }
  var yyyy = actual.getFullYear();
  document.getElementById("año").innerHTML = dd + "-" + mm + "-" + yyyy;
}
añoActual();
añoActual = setInterval(añoActual, 1000);
/* ---------------------------------------------------------------------------- */
/* 4 */
function Area() {
  var side1 = document.getElementById("num1").value;
  var side2 = document.getElementById("num2").value;
  var side3 = document.getElementById("num3").value;
  var s = (parseInt(side1) + parseInt(side2) + parseInt(side3)) / 2;
  var area = Math.sqrt(s * ((s - side1) * (s - side2) * (s - side3)));
  document.getElementById("area").innerHTML = area;
}
/* ---------------------------------------------------------------------------- */
/* 5 */
function animate_string(id) 
{
    var element = document.getElementById(id);
    var textNode = element.childNodes[0]; // assuming no other children
    var text = textNode.data;

setInterval(function () 
{
 text = text[text.length - 1] + text.substring(0, text.length - 1);
  textNode.data = text;
}, 100);
}
/* ---------------------------------------------------------------------------- */
/* 6 */

/* ---------------------------------------------------------------------------- */
/* 7 */

/* ---------------------------------------------------------------------------- */
/* 8 */

/* ---------------------------------------------------------------------------- */
/* 9 */

/* ---------------------------------------------------------------------------- */
/* 10 */
