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

class Book {
  constructor() {
    // the constructor...
    this.titel = document.querySelector('');
  }
}

function addBookToLibrary(auteur, titel, pagina, id) {
  // take params, create a book then store it in the array
}

function loopArray() {
  myLibrary.forEach((element) => {
    console.log(element);
  });
}

loopArray();
