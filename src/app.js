// array of books
const myLibrary = [
  {
    auteur: 'Tad Williams',
    titel: 'Draken Troon',
    'aantalPagina"s': 860,
    id: crypto.randomUUID(),
  },
  {
    auteur: 'Sarah Lark',
    titel: 'Een moedig besluit',
    "aantal pagina's": 457,
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

voegBoekToe.addEventListener('click', () => {
  if ((formElement.style.display = 'block')) {
    formElement.style.display = 'none';
  }
});

class Book {
  constructor() {
    // the constructor...
    this.titel = document.querySelector('#title').value;
    this.auteur = document.querySelector('#auteur').value;
    this.totaalPaginas = document.querySelector('#pagina').value;
    this.id = crypto.randomUUID();
  }
}

function addBookToLibrary(titel, auteur, pagina, id) {
  // take params, create a book then store it in the array
  myLibrary.push(new Book(titel, auteur, pagina, id));
  loopArray();
}

// loops over the array of added books
function loopArray() {
  myLibrary.forEach((book) => {
    console.log(book);
  });
}

addBookToLibrary();
