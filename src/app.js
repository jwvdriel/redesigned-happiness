// array of books testing purpose
const myLibrary = [
  {
    auteur: 'Tad Williams',
    titel: 'Draken Troon',
    totaalPaginas: 860,
    id: crypto.randomUUID(),
  },
  {
    auteur: 'Sarah Lark',
    titel: 'Een moedig besluit',
    totaalPaginas: 457,
    id: crypto.randomUUID(),
  },
];

// variables
const voegBoekToe = document.querySelector('#voegNieuwBoekToe');
const displayBoeken = document.querySelector('#display-boeken');

// the constructor...
class Book {
  constructor() {
    this.titel = document.querySelector('#title').value;
    this.auteur = document.querySelector('#auteur').value;
    this.totaalPaginas = parseInt(document.querySelector('#pagina').value);
    this.id = crypto.randomUUID();
  }
}

// take params, from the class Book and creates a book then stores it in the array
function addBookToLibrary(titel, auteur, totaalPaginas, id) {
  myLibrary.push(new Book(titel, auteur, totaalPaginas, id));
}

// loops over the array of added books
function loopArray() {
  myLibrary.forEach((book) => {
    // create div element
    let divElement = document.createElement('div');

    // adds a class name for CSS
    divElement.classList.add('card');

    // appends div element to parent element
    displayBoeken.append(divElement);

    // insert the html element before the end of the Div with the class name card
    divElement.insertAdjacentHTML(
      'beforeend',
      `<h3> Titel</h3>
      <p> ${book.titel} </p> 
      <h3>Auteur</h3> 
      <p> ${book.auteur} </p> 
      <h3>Aantal Pagina's</h3>
      <p> ${book.totaalPaginas} </p>
      <div class='layout-buttons'>
      <button class='button-primary delete-button'>Verwijderen</button>
      <button class='button-primary' id='gelezen-button' data-id=${book.id}>Gelezen</button>
      </div>`
    );
  });
  gelezenAangevenButton();
}

function StrikeThroughWords() {
  // selects the parent element of the current div
  // const parentDiv = document.querySelectorAll('.card');
}

function gelezenAangevenButton() {
  // select all buttons
  const gelezenButton = document.querySelectorAll('#gelezen-button');
  const paragraphElements = Array.from(document.querySelectorAll(' p'));
  const h3Elements = Array.from(document.querySelectorAll('h3'));

  // loops over each button and do something with it
  gelezenButton.forEach((buttonStrike) => {
    console.log(buttonStrike);
  });
  // selects all child element of the parent div

  // // voeg twee arrays samen
  const totalArray = h3Elements.concat(paragraphElements);

  // strike through class added to current children elements
  for (let i = 0; i < totalArray.length; i++) {
    const childElements = totalArray[i];

    // if it has the current class
    if (childElements.classList.contains('strike-through')) {
      // remove it
      childElements.classList.remove('strike-through');
    } else {
      // add it
      childElements.classList.add('strike-through');
    }
  }
}

// show the current books from the array
addBookToLibrary();
loopArray();
