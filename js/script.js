//SurnameList
var surnameList = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"];

// What's your surname
var userSurname = prompt('Scrivi il tuo cognome!');

//SurnameList start
surnameList.push(userSurname);

for(var i = 0; i < surnameList.length; i++) {
  console.log(surnameList[i]);
}

//Output!
