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
    let ncasuali = Math.random() * 100;
    return ncasuali
}
  while(array.length < 5 ){
      array.push(casuale())
     
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