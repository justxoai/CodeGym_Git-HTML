class Book {
    bookId;
    bookName;
    bookPublishYear;
    bookQuantity;
    bookAvailable;

    constructor(bookId, bookName, bookPublishYear, bookQuantity) {
        this.bookId = bookId;
        this.bookName = bookName;
        this.bookPublishYear = bookPublishYear;
        this.bookQuantity = bookQuantity;
        this.bookAvailable = bookQuantity > 0;
    }

    borrowBook() {
        if (this.quantity > 0) {

            this.quantity--;

            if (this.quantity === 0)
                this.available = false;

        }
    }

    addBook(quantity) {
        this.quantity += quantity;

        if (this.quantity > 0)
            this.available = true;
        
    }
}
