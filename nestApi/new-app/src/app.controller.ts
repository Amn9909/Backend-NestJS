import { Controller, Delete, Get, Param , Post, Put } from "@nestjs/common";
import { bookService } from "./book.service";


@Controller("book")

export class BookController {
    constructor(private bookService: bookService){}


    //Add Book
    @Post("/addBook/:id")
    addBook(@Param params: Record<string, any>): string {

        return this.bookService.addBook();
    }

    
    //Update Book
    @Put("/updateBook")
    updateBook(): string {
        return this.bookService.updateBook();
       
    }
    // Delete Book 
    @Delete("/deleteBook")
    deleteBook(): string {
        return this.bookService.deleteBook();
    }
    // Find AllBooks
    @Get("/findAll")
    findAllBook(): string {
        return this.bookService.findAllBook();
    }

    // @Get('/findBookById/:bookId')
    // findBookById(@Param() params): string {
    //     console.log(params.bookId);
    //     return `Found this book with Id : ${params.bookId}`;
    // }

}