//declarando prompt
var numberCard = parseInt (prompt("Ingrese su numero de tarjeta: "));
function isValidCard(numberCard,number){
  var arrayNew = [];

  for(var i = 0; i < numberCard.length; i+=1){
    arrayNew.reverse(numberCard[i]);
  }

}
