
  
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
  //setTimeoput("funzione cancella numeri e chiedi valori all'utente"30secondi 3000
function creanumeri(){
 
  prompt('inserisci un numero');
  let nUtente ='';
  console.log(nUtente);
  if (nUtente == array[i]){
    prompt("Hai vinto");
  } else{
    prompt ("Hai perso");
  }
}
 //cancella i numeri
  //chiedere i numeri all'utente 
  //confrontare i numeri 
  //hai vinto/hai perso
















  //document.getElementById("Numeri casuali").innerHTML

