const button = document.getElementById("button");
const griglia = document.getElementById("main");

button.addEventListener("click", function () {
  griglia.innerHTML = "";
  generaGriglia();
});

// funzione per creare un numero casuale

function getRandomNumber(min, max) {
  let newRandomNumber = Math.floor(Math.random() * max - min + 1) + min;
  return newRandomNumber;
}

function generaGriglia() {
  function checkNumber(array, element) {
    let trovato = false;

    for (let i = 0; i < array.length; i++) {
      if (array[i] == element) {
        trovato = true;
      }
    }
    return trovato;
  }

  //creazione bombe

  let bombe = [];

  while (bombe.length < 16) {
    let newNumber = getRandomNumber(1, 100);

    //push dei numeri non uguali e controllo uguaglianza numeri
    if (bombe.includes(newNumber) == false) {
      bombe.push(newNumber);
    }
  }

  console.log(bombe);

  //creazione celle
  for (let i = 1; i <= 100; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    // solo per ora metto la classe hard per motivi di formattazione
    cell.classList.add("hard");
    cell.innerHTML = i;

    cell.addEventListener("click", function pippo() {
      cell.classList.add("color");
      console.log("cella numero " + i);
    });

    griglia.append(cell);
  }
}
