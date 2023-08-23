const button = document.getElementById("button");
const griglia = document.getElementById("main");

let bombe;
let score;
let cellsFreeTotal;

button.addEventListener("click", function () {
  griglia.innerHTML = "";
  generaGriglia();
});

// funzione per creare un numero casuale

function getRandomNumber(min, max) {
  let newRandomNumber = Math.floor(Math.random() * max - min + 1) + min;
  return newRandomNumber;
}

// funzione per comparare

function checkNumber(array, element) {
  let trovato = false;

  for (let i = 0; i < array.length; i++) {
    if (array[i] == element) {
      trovato = true;
    }
  }
  return trovato;
}

function generaGriglia() {
  //creazione bombe
  const bombe = [];

  while (bombe.length < 16) {
    let newNumber = getRandomNumber(1, 100);

    //push dei numeri non uguali e controllo uguaglianza numeri
    if (bombe.includes(newNumber) == false) {
      bombe.push(newNumber);
    }
  }

  console.log(bombe);

  // inizializzazione totale celle libere

  let score = 0;

  let cellsFreeTotal = 100 - bombe.length;

  //creazione celle

  for (let i = 1; i <= 100; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");

    // solo per ora metto la classe hard per motivi di formattazione

    cell.classList.add("hard");
    cell.innerHTML = i;

    // al click della cella

    cell.addEventListener("click", function pippo() {
      //cell.classList.add("color");
      //console.log("cella numero " + i);

      const cellNumber = i;
      if (bombe.includes(cellNumber)) {
        cell.classList.add("lose");
        alert("fine partita");
      } else {
        cell.classList.add("color");
        score++;
      }
    });

    griglia.append(cell);
  }
}
