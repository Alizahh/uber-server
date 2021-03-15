import { Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose";
import { BookingSchema } from "./booking.model";
import { BookingService } from "./booking.service";
import { BookingController } from "./booking.controller";
import { LocationService } from 'src/location/location.service';
import { LocationModule } from "../location/location.module";
@Module({
    imports: [LocationModule, MongooseModule.forFeature([
        { name: "UserBooking", schema: BookingSchema },
    ])],
    controllers: [BookingController],
    providers: [BookingService],
})
export class BookingModule { }
