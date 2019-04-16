var kilometri = prompt ("Quanti kilometri devi percorrere?");
var eta = prompt ("Quanti anni hai?");
var prezzo_km = 0.21;
if (eta < 18){
  document.writeln("Il prezzo per il tuo viaggio è di:"+" "+(prezzo_km * kilometri)*0.8+" "+"Euro")
}else if (eta >= 65){
  document.writeln("Il prezzo per il tuo viaggio è di:"+" "+(prezzo_km * kilometri)*0.6+" "+"Euro")
}else {
  document.writeln("Il prezzo per il tuo viaggio è di:"+" "+prezzo_km * kilometri+" "+"Euro")
}
