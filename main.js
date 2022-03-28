
let start = document.getElementById('btn');

let select = document.getElementById('difficolta');


let grid = document.getElementById('grid');

let box = document.createElement('div');


let paragrafo = document.getElementById('welcome');



let array2 = [];


let arrayBombe = [];


let sediciBombe = [];


start.addEventListener('click', function () {


  grid.innerHTML = '';


  grid.classList.add('griglia');

  grid.classList.remove('none');

  paragrafo.classList.add('none');

  let numeroCelle;

  if (select.value == "facile") {
    numeroCelle = 100;
  } else if (select.value == "media") {
    numeroCelle = 81;
  } else {
    numeroCelle = 49;
  }

  for (y = 1; y < numeroCelle + 1; y++) {
    array2.push(y);
  }

  function shuffle(array2) {
    return array2.sort(() => Math.random() - 0.5);
  }

  array2 = shuffle(array2);
  console.log(array2);

  for (k = 0; k < numeroCelle; k++) {
    arrayBombe.push(k);
  }

  console.log(`le bombe sono: ${ arrayBombe }`);
  arrayBombe = shuffle(arrayBombe);
  console.log(`le bombe sono: ${ arrayBombe }`);

  for (bombe = 0; bombe < 16; bombe++) {
    sediciBombe.push(arrayBombe[bombe]);
  }

  console.log(`le bombe sediciBombe sono: ${ sediciBombe }`);





  for (let i = 0; i < numeroCelle; i++) {

    let grid = document.getElementById('grid');

    let box = document.createElement('div');

    grid.appendChild(box);

    if (numeroCelle == 100) {
      box.classList.add('box-10');
    } else if (numeroCelle == 81) {
      box.classList.add('box-9');
    } else {
      box.classList.add('box-7');
    }

    box.innerHTML = `<span>${array2[i]}</span>`;
    box.addEventListener( 'click', clickBox );
  }

});

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function clickBox() {
  console.log(this.innerText);

  if (sediciBombe.includes(parseInt(this.innerText))) {
    this.classList.add('bomba');
    this.removeEventListener("click", clickBox);

  } else {
    this.classList.add('clicked');
  }

  let n = 0;
  console.log(n = n++);
}

