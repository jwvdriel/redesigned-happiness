// array of books
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
const showFormButton = document.querySelector('.show-button');
const formElement = document.querySelector('#nieuw-boek');
const voegBoekToe = document.querySelector('#add-book');
const cardDiv = document.querySelector('.card');
const displayBoeken = document.querySelector('#display-boeken');

// shows form after clicking button to add books
showFormButton.addEventListener('click', () => {
  if (formElement.style.display === 'none') {
    formElement.style.display = 'block';
  }
});

// hides the form after adding a book to the array
voegBoekToe.addEventListener('click', (event) => {
  event.preventDefault();
  if ((formElement.style.display = 'block')) {
    formElement.style.display = 'none';
  }
});

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
  myLibrary.forEach((book, index) => {
    // create div element
    let divElement = document.createElement('div');
    let paragraphElement = document.createElement('p');

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
      <button class='button-primary delete-button'>remove</button>
      <button class='button-primary been-read'>Read?</button>
      </div>`
    );
  });
}

// show the current books from the array

addBookToLibrary();
loopArray();
