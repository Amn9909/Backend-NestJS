import { Module } from '@nestjs/common';
import { Feature3module } from './Feature3.module';


@Module({
  imports: [Feature3module],
  controllers: [],
  providers: [],
})
export class ChatModule {
    constructor(){
        console.log("ChatModule is running ")
      }
}
