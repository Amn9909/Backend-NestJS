import { Injectable } from "@nestjs/common"


@Injectable()

export  class bookService{
    addBook() : string{
        return 'book added'
    }
    updateBook() : string{
        return 'book updated added'
    }
    deleteBook() : string{
        return 'book deleted '
    }
    findAllBook(): string {
        return 'found these many books '
    }

}