/*function casuali() {
    numeri = parseInt(document.getElementById("quanti").value);
    
     document.getElementById("numeri").innerHTML = "Numeri generati: " + str;
     } 
     else {
        document.getElementById("numeri").innerHTML = "Inserisci un numero maggiore di 0 e inferiore a 100";
     }
  }*/
  
  let array = [];
  let numeri = document.getElementById("Numeri casuali");
  function casuale(){
    let ncasuali = Math.floor(Math.random()*100)+1;
    //console.log(ncasuali);
    return ncasuali
  }
  document.getElementById("Numeri casuali").addEventListener("click", function(){
    while(array.length < 5 ){
      let numcas = casuale();
      array.push(numcas);
    }
    let text = array.join();
     //stampare i numeri su html
  for (i = 0; i < array.length; i++){
    document.getElementById("numeri").innerHTML = text;
  }
  setTimeout (creanumeri,3000)
  })



 
  
  //setTimeoput("funzione cancella numeri e chiedi valori all'utente"30secondi 30000)


function creanumeri(){
  //cancella i numeri
  //chiedere i numeri all'utente 
  //confrontare i numeri 
  //hai vinto/hai perso
  prompt('inserisci un numero');
  let nUtente ='';
  console.log(nUtente);
  if (nUtente == array.lenght){
    prompt("Hai vinto");
  } else{
    prompt ("Hai perso");
  }
}

















  //document.getElementById("Numeri casuali").innerHTML

 /* if (n <= 100) {
    = "";
    for (i = 0; i < n; i++) {
         num = Math.round(Math.random()*100 + 1);
         if (i > 0) {
           += ", ";
         }
         += num;
     }*/