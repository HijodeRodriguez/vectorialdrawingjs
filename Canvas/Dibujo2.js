var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineas = 30;
var l = 0;
var yf, xi;
var yi, xf;
var xf2;

for(l = 0; l < lineas; l++)
{
  yf = yi = 10 * l;
  xi = xf = 10 * (l + 1);
  xf2 = xi2 = 290 - (l * 10);
  dibujarLinea("blue", xi, 0, 300, yf);
  dibujarLinea("yellow", 0, yi, xf, 300);
  dibujarLinea("red", 300, yi, xf2, 300);
  dibujarLinea("green", xi2, 0, 0, yf);
}

dibujarLinea("black", 1, 1, 1, 299);
dibujarLinea("black",1, 299, 299, 299);

function  dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}
