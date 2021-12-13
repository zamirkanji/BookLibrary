const log = console.log;
const newBookBtn = document.querySelector("#newBookBtn");
const headerContainer = document.querySelector(".header-container");
const main = document.querySelector(".main-container");
const formContainer = document.querySelector(".form-container");
const submitBtn = document.querySelector("#submit");
const closeBtn = document.querySelector(".close-btn");
const bookDisplay = document.querySelector(".display-book-cards");
const myForm = document.querySelector(".form");

//******************************************************** */
const showForm = () => {
	formContainer.classList.remove("display-none");
};
const hideForm = (e) => {
	formContainer.classList.add("display-none");
};

const hideNewBookBtn = () => {
	newBookBtn.classList.add("display-none");
};
const showNewBookBtn = () => {
	newBookBtn.classList.remove("display-none");
};

const addBlur = () => {
	main.classList.add("blur");
	headerContainer.classList.add("blur");
};
const removeBlur = () => {
	main.classList.remove("blur");
	headerContainer.classList.remove("blur");
};

const randomKey = (max) => {
	return Math.floor(Math.random() * max);
}

//******************************************************** */
class Book {
	constructor(title, author, pages, read, notes, rkey) {
		(this.title = title),
		(this.author = author),
		(this.pages = pages),
		(this.read = read),
		(this.notes = notes), 
		(this.rkey = rkey);
	}
}
/*********************** */
class Books {
	constructor() {
		this.books = [];
	}

	addBook(book) {
		this.books.push(book);
	}

	deleteBook(title) {
		this.books = this.books.filter((book) => {
			if (book.title === title) {
				return false;
			} 
		});
		return this.books;
	}

	createCard(rkey) {
		const lastItem = this.books[this.books.length - 1];
	
		const bookDiv = document.createElement("div");
		const infoContainer = document.createElement("div");
		const titleHeader = document.createElement("h3");
		const paraAuthor = document.createElement("p");
		const paraPages = document.createElement("p");
		const paraRead = document.createElement("p");
		const deleteContainer = document.createElement("div");
		const deleteBookBtn = document.createElement("button");
		const readToggle = document.createElement("button");

		bookDiv.classList.add("card");
		bookDiv.setAttribute('data-id', rkey);

		infoContainer.classList.add("info-container");
		titleHeader.classList.add("title-header");
		paraPages.classList.add("pages-text");
		paraAuthor.classList.add("author-text");
		paraRead.classList.add("pages-text");
		deleteContainer.classList.add("delete-container");
		deleteBookBtn.classList.add("delete-book");
		readToggle.classList.add("read-toggle");

		paraAuthor.textContent = `by ${lastItem.author}`;
		paraPages.textContent = `${lastItem.pages} pages`;
		titleHeader.textContent = `${lastItem.title}`;
		deleteBookBtn.textContent = "Delete";
		paraRead.textContent = lastItem.read;

		if (lastItem.read === "read") {
			readToggle.textContent = "Read";
		} else {
			readToggle.textContent = "Not Read";
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



//***************************EVENT LISTENERS***************************** */
const books = new Books();

newBookBtn.addEventListener("click", (e) => {
	addBlur();
	showForm();
	hideNewBookBtn();
});

closeBtn.addEventListener("click", (e) => {
	hideForm();
	removeBlur();
	showNewBookBtn();
});

submitBtn.addEventListener("click", (e) => {
	e.preventDefault();
	hideForm();
	removeBlur();
	showNewBookBtn();
	
	let rkey = randomKey(100);

	const title = document.querySelector("#title").value;
	const author = document.querySelector("#author").value;
	const pages = document.querySelector("#pages").value;
	const read = document.querySelector('input:checked').value;
	const notes = document.querySelector("#notes").value;

	books.addBook(new Book(title, author, +pages, read, notes, rkey));
	books.createCard(rkey);
	resetForm();

	const deleteBtns = document.querySelectorAll(".delete-book");
	deleteBtns.forEach((btn) => {
		btn.addEventListener("click", () => {
			books.deleteBook(title);
		});
	});	
	const readBtns = document.querySelectorAll(".read-toggle");
	readBtns.forEach((btn) => {
		btn.addEventListener("click", () => {
			const readToggle = document.querySelector('.read-toggle');
			if (read === "read") {
				// read = "unread";
				readToggle.textContent = "Not Read";
			} 
			if (read === "unread") {
				// Book.read = "read";
				readToggle.textContent = "Read";
			}
		});
	});
});

const resetForm = () => {
	myForm.reset();
}

