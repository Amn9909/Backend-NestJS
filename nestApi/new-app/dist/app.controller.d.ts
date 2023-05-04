import { bookService } from "./book.service";
export declare class BookController {
    private bookService;
    constructor(bookService: bookService);
    addBook(params: Record<string, any>): string;
    updateBook(): string;
    deleteBook(): string;
    findAllBook(): string;
}
