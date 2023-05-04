import { Module } from '@nestjs/common';
import { ChatModule } from './Chat.module';
import { OrderModule } from './Order.module';
import { UsersModule } from './Users.module';
import { BookController } from './app.controller';
import { bookService } from './book.service';


@Module({
  imports: [UsersModule, OrderModule, ChatModule],
  controllers: [BookController],
  providers: [bookService],
})
export class RootModule {
  constructor(){
    console.log("app module is running ")
  }
}
