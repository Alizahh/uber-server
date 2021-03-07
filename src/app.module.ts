import { VehicleModule } from './vehicles/vehicle.module';
import { UserModule } from './user/user.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [
    VehicleModule,
    UserModule,
    MongooseModule.forRoot(
      "mongodb+srv://alizah:alizah123@cluster0.jt5xe.mongodb.net/UberServer?retryWrites=true&w=majority")
  ],
  controllers: [
    AppController],
  providers: [
    AppService],
})
export class AppModule { }

