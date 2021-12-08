const log = console.log;
const newBookBtn = document.querySelector('#newBookBtn');
const headerContainer = document.querySelector('.header-container');
const main = document.querySelector('.main-container');
const formContainer = document.querySelector('.form-container');
const submitBtn = document.querySelector('#submit');
const closeBtn = document.querySelector('.close-btn');


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
let arrayOfBooks = [];

class Book {
    constructor (title, author, pages, ifRead) {
        this.title = title,
        this.author = author, 
        this.pages = pages 
        // this.ifRead = ifRead
    }
}

const createBook = (title, author, pages) => {
    // const bookOne = Object.create(Book())
    const bookOne = new Book(title, author, pages)
    console.log(bookOne);
    arrayOfBooks.push(bookOne);
}

function addBookToList () {
    arrayOfBooks.forEach(book => {

    })
}

//******************************************************** */
newBookBtn.addEventListener('click', (e) => {
    log('test');
    addBlur();
    showForm();
    hideNewBookBtn();
})
submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
 //css classes
    hideForm();
    removeBlur();
    showNewBookBtn();
//submit form, logic
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    createBook(title, author, pages);
    
})
closeBtn.addEventListener('click', (e) => {
    hideForm();
    removeBlur();
    showNewBookBtn();
});