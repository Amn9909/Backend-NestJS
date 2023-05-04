import { Module } from '@nestjs/common';
import { Feature1module } from './feature1.module';
import { Feature2module } from './feature2.module';


@Module({
  imports: [Feature1module, Feature2module],
  controllers: [],
  providers: [],
})
export class OrderModule {constructor(){
    console.log("OrdersModule is running ")
  }}
