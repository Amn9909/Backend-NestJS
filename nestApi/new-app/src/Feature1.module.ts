import { Module } from '@nestjs/common';


@Module({
  imports: [],
  controllers: [],
  providers: [],
})
export class Feature1module {
    constructor(){
        console.log("Feature1module is running ")
      }
}
