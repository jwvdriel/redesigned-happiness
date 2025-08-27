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
      <button class='button-primary gelezen-button' id='${book.id}' >Niet Gelezen</button>`
    );
  });
  gelezenAangevenButton();
}

// make the text strike-through when book is being read
function gelezenAangevenButton() {
  // select all buttons
  const gelezenButton = document.querySelectorAll('.gelezen-button');
  // loops over the current button
  for (let i = 0; i < gelezenButton.length; i++) {
    const element = gelezenButton[i];
    element.addEventListener('click', function (event) {
      // adds the class to the current parent node of which the button belongs too
      if (event.target.parentNode.classList.contains('strike-through')) {
        // if the elements have the class remove it
        event.target.parentNode.classList.remove('strike-through');
        element.innerText = 'Niet Gelezen';
        // else add it
      } else {
        event.target.parentNode.classList.add('strike-through');
        element.innerText = 'Gelezen';
      }
    });
  }
}

// show the current books from the array
addBookToLibrary();
loopArray();
