const log = console.log;
const newBookBtn = document.querySelector('#newBookBtn');
const headerContainer = document.querySelector('.header-container');
const main = document.querySelector('.main-container');
const formContainer = document.querySelector('.form-container');
const submitBtn = document.querySelector('#submit');
const closeBtn = document.querySelector('.close-btn');
const bookDisplay = document.querySelector('.display-book-cards');


//******************************************************** */
const showForm = () => {
    formContainer.classList.remove('display-none');
} 

const hideForm = (e) => {
    formContainer.classList.add('display-none');
} 

const hideNewBookBtn = () => {
    newBookBtn.classList.add('display-none');
}
const showNewBookBtn = () => {
    newBookBtn.classList.remove('display-none');
}

const addBlur = () => {
    main.classList.add('blur');
    headerContainer.classList.add('blur');
}
const removeBlur = () => {
    main.classList.remove('blur');
    headerContainer.classList.remove('blur');
}

//******************************************************** */
// const arrayOfBooks = [];

class Book {
    constructor (title, author, pages, read, notes) {
        this.title = title,
        this.author = author, 
        this.pages = pages,
        this.read = read,
        this.notes = notes 
        // this.read = read
    }
}

Book.prototype.toggleRead = function(ifRead) {
    if (ifRead === "read") {

    }
}

class Books {
    constructor () {
        this.books = [];
    }

    addBook (book) {
        this.books.push(book);
    }

    createCard () {
        for (const book of this.books) {
            const bookDiv = document.createElement('div');
    
            const infoContainer = document.createElement('div');
            const titleHeader = document.createElement('h3');
            const paraAuthor = document.createElement('p');
            const paraPages = document.createElement('p');
            const paraRead = document.createElement('p');
            
            const deleteContainer = document.createElement('div');
            const deleteBookBtn = document.createElement('button');
            const readToggle = document.createElement('button');
    
            
            bookDiv.classList.add('card');
    
            infoContainer.classList.add('info-container');
            titleHeader.classList.add('title-header');
            paraPages.classList.add('pages-text');
            paraAuthor.classList.add('author-text');
            paraRead.classList.add('pages-text');
    
            deleteContainer.classList.add('delete-container');
            deleteBookBtn.classList.add('delete-book');
            readToggle.classList.add('read-toggle');
            
    
            paraAuthor.textContent = `by ${book.author}`;
            paraPages.textContent = `${book.pages} pages`;
            titleHeader.textContent = `${book.title}`;
            deleteBookBtn.textContent = 'Delete';
            paraRead.textContent = book.read;
            
            if (book.read === "read") {
                readToggle.textContent = 'Read';
            } else {
                readToggle.textContent = 'Not Read';
            }
    
            bookDisplay.appendChild(bookDiv);
            bookDiv.appendChild(infoContainer);
    
            infoContainer.appendChild(titleHeader);
            infoContainer.appendChild(paraPages);
            infoContainer.appendChild(paraAuthor);
            infoContainer.appendChild(paraRead);
    
            bookDiv.appendChild(deleteContainer);
            deleteContainer.appendChild(deleteBookBtn);
            deleteContainer.appendChild(readToggle);
    
        }

    }

}

// const createBook = (title, author, pages, read, notes) => {
//     // bookDisplay.classList.remove('display-none');
//     const newBook = new Book(title, author, pages, read, notes);
//     log(newBook);
//     arrayOfBooks.push(newBook);
//     for (const book of arrayOfBooks) {
//         const bookDiv = document.createElement('div');

//         const infoContainer = document.createElement('div');
//         const titleHeader = document.createElement('h3');
//         const paraAuthor = document.createElement('p');
//         const paraPages = document.createElement('p');
//         const paraRead = document.createElement('p');
        
//         const deleteContainer = document.createElement('div');
//         const deleteBookBtn = document.createElement('button');
//         const readToggle = document.createElement('button');

        
//         bookDiv.classList.add('card');

//         infoContainer.classList.add('info-container');
//         titleHeader.classList.add('title-header');
//         paraPages.classList.add('pages-text');
//         paraAuthor.classList.add('author-text');
//         paraRead.classList.add('pages-text');

//         deleteContainer.classList.add('delete-container');
//         deleteBookBtn.classList.add('delete-book');
//         readToggle.classList.add('read-toggle');
        

//         paraAuthor.textContent = `by ${book.author}`;
//         paraPages.textContent = `${book.pages} pages`;
//         titleHeader.textContent = `${book.title}`;
//         deleteBookBtn.textContent = 'Delete';
//         paraRead.textContent = book.read;
        
//         if (book.read === "read") {
//             readToggle.textContent = 'Read';
//         } else {
//             readToggle.textContent = 'Not Read';
//         }

        
        
//         bookDisplay.appendChild(bookDiv);

//         bookDiv.appendChild(infoContainer);

//         infoContainer.appendChild(titleHeader);
//         infoContainer.appendChild(paraPages);
//         infoContainer.appendChild(paraAuthor);
//         infoContainer.appendChild(paraRead);

//         bookDiv.appendChild(deleteContainer);
//         deleteContainer.appendChild(deleteBookBtn);
//         deleteContainer.appendChild(readToggle);

//     }

//     // deleteBookBtn.addEventListener('click', () => {

//     // })
// }

//******************************************************** */
newBookBtn.addEventListener('click', (e) => {
    log('test');
    addBlur();
    showForm();
    hideNewBookBtn();
})
submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    hideForm();
    removeBlur();
    showNewBookBtn();
//submit form, logic
    const myForm = document.querySelector('.form');
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    const read = document.querySelector('input[name="read"]:checked').value;
    const notes = document.querySelector('#notes').value;


    const books = new Books();
    books.addBook(new Book(title, author, +pages, read, notes));
    books.createCard();
    // createBook(title, author, +pages, read, notes);

    myForm.reset(); 
})
closeBtn.addEventListener('click', (e) => {
    hideForm();
    removeBlur();
    showNewBookBtn();
});