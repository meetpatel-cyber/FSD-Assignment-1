class Book {
    constructor(title, author, price) {
        this.title = title;
        this.author = author;
        this.price = price;
    }
}

const books = [
    new Book("JavaScript", "John", 500),
    new Book("Python", "David", 600),
    new Book("Java", "James", 700),
    new Book("C++", "Bjarne", 550),
    new Book("HTML", "Tim", 300)
];

books.forEach(({ title, author, price }) => {
    console.log("Title:", title, "Author:", author, "Price:", price);
});

const totalPrice = (list) => {
    return list.reduce((sum, book) => sum + book.price, 0);
};

console.log("Total Price:", totalPrice(books));

const loadBooks = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(books);
        }, 3000);
    });
};

async function displayBooks() {
    console.log("Loading Books...");
    const data = await loadBooks();
    console.log("Books Loaded:");
    console.log(data);
}

displayBooks();