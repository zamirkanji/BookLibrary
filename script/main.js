const log = console.log;
const newBookBtn = document.querySelector('#newBookBtn');
const headerContainer = document.querySelector('.header-container');
const main = document.querySelector('.main-container');
const formContainer = document.querySelector('.form-container');
const submitBtn = document.querySelector('#submit');



const showForm = () => {
    formContainer.classList.remove('display');
} 
const removeForm = () => {
    formContainer.classList.add('display');
} 
const addBlur = () => {
    main.classList.add('blur');
    headerContainer.classList.add('blur');
}
const removeBlur = () => {
    main.classList.remove('blur');
    headerContainer.classList.remove('blur');
}


let arrayOfBooks = [];

class Book {
    constructor (title, author, pages, ifRead) {
        this.title = title,
        this.author = author, 
        this.pages = pages, 
        this.ifRead = ifRead
    }
}

function addBookToList () {
    
}


newBookBtn.addEventListener('click', (e) => {
    log('test');
    addBlur();
    showForm();
})
submitBtn.addEventListener('click', (e) => {
    log('test');
    removeForm();
    removeBlur();
})