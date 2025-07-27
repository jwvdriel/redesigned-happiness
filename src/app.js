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
  loopArray();
}

// loops over the array of added books
function loopArray() {
  myLibrary.forEach((book) => {
    console.log(book.titel, book.auteur, book.totaalPaginas, book.id);
  });
}

addBookToLibrary();
