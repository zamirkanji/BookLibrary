const log = console.log;
const newBookBtn = document.querySelector("#newBookBtn");
const headerContainer = document.querySelector(".header-container");
const main = document.querySelector(".main-container");
const formContainer = document.querySelector(".form-container");
const submitBtn = document.querySelector("#submit");
const closeBtn = document.querySelector(".close-btn");
const bookDisplay = document.querySelector(".display-book-cards");

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

//******************************************************** */
class Book {
	constructor(title, author, pages, read, notes) {
		(this.title = title),
			(this.author = author),
			(this.pages = pages),
			(this.read = read),
			(this.notes = notes);
	}
}

Book.prototype.setRead = function (ifRead) {
	if (ifRead === "read") {
	}
};

class Books {
	constructor() {
		this.books = [];
	}

	addBook(book) {
		this.books.push(book);
	}

	log() {
		console.log(this.books);
	}

	deleteBook(title) {
		this.books = this.books.filter((book) => {
			log(this.books, "array after filter", title);
			if (book.title === title) {
				console.log(true);
				return true;
			} else {
				console.log(false);
				return false;
			}
		});
		// log(this.books);
	}

	getArray() {
		return this.books;
	}

	createCard() {
		this.books.forEach((book) => {
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
			infoContainer.classList.add("info-container");
			titleHeader.classList.add("title-header");
			paraPages.classList.add("pages-text");
			paraAuthor.classList.add("author-text");
			paraRead.classList.add("pages-text");
			deleteContainer.classList.add("delete-container");
			deleteBookBtn.classList.add("delete-book");
			readToggle.classList.add("read-toggle");

			paraAuthor.textContent = `by ${book.author}`;
			paraPages.textContent = `${book.pages} pages`;
			titleHeader.textContent = `${book.title}`;
			deleteBookBtn.textContent = "Delete";
			paraRead.textContent = book.read;

			if (book.read === "read") {
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
		});
	}

	addKeyToCard() {
		let temp = null;
		for (let i = 0; i < this.books.length; i++) {
			temp = i;
		}
		const bookCard = document.querySelector(".card");
		bookCard.setAttribute("data-id", temp);
	}
	addKeyToBook() {
		for (let i = 0; i < this.books.length; i++) {
			this.books.data_key = i;
		}
		log(this.books.data_key);
	}

	setRead(read) {
		if (read === "read") {
			this.read = "Not Read";
			readToggle.textContent = "Not Read";
		} else {
			this.read = "Read";
		}
	}
}

//***************************EVENT LISTENERS***************************** */
newBookBtn.addEventListener("click", (e) => {
	log("test");
	addBlur();
	showForm();
	hideNewBookBtn();
});
submitBtn.addEventListener("click", (e) => {
	e.preventDefault();
	hideForm();
	removeBlur();
	showNewBookBtn();
	//submit form, logic
	createBook();
	
});
closeBtn.addEventListener("click", (e) => {
	hideForm();
	removeBlur();
	showNewBookBtn();
});

const createBook = () => {
	const myForm = document.querySelector(".form");
	const title = document.querySelector("#title").value;
	const author = document.querySelector("#author").value;
	const pages = document.querySelector("#pages").value;
	const read = document.querySelector('input[name="read"]:checked').value;
	const notes = document.querySelector("#notes").value;

	const books = new Books();
	books.addBook(new Book(title, author, +pages, read, notes));
	books.createCard();
	books.addKeyToCard();

	const deleteBtns = document.querySelectorAll(".delete-book");
			deleteBtns.forEach((btn) => {
			btn.addEventListener("click", () => {
			books.deleteBook(title);
			log("test delete btn");
			});
		});

	const readBtns = document.querySelectorAll(".read-toggle");
			readBtns.forEach((btn) => {
			btn.addEventListener("click", () => {
			books.setRead(read);
			log("test read btn");
		});
	});
	myForm.reset();
}

