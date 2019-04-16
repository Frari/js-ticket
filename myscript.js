var kilometri = prompt ('Quanti kilometri devi percorrere?');
var età = prompt ('Quanti anni hai?');
var prezzo_km = 0.21;
if (età < 18){
  document.writeln((prezzo_km * kilometri)*0.8)
}if else (età >= 65){
  document.writeln((prezzo_km * kilometri)*0.6)
}else {
  document.writeln(prezzo_km * kilometri)
}
