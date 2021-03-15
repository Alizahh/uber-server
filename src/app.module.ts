import { BookingModule } from './booking/booking.module';
import { BookingService } from './booking/booking.service';
import { BookingController } from './booking/booking.controller';
import { LocationModule } from './location/location.module';
import { LocationService } from './location/location.service';
import { LocationController } from './location/location.controller';
import { ReviewModule } from './review/review.module';
import { ReviewService } from './review/review.service';
import { ReviewController } from './review/review.controller';
import { VehicleModule } from './vehicles/vehicle.module';
import { UserModule } from './user/user.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [
    BookingModule,
    LocationModule,
    ReviewModule,
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

