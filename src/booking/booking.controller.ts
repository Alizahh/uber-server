import { Body, Controller, Get, Param, Post, Patch, Delete, Req, Res } from "@nestjs/common";
import { Request, Response } from 'express';
import { LocationService } from "src/location/location.service";
import { BookingService } from "./booking.service";
@Controller()
export class BookingController {
    constructor(
        private readonly _bookingService: BookingService,
        // private readonly _locationService: LocationService
    ) { }

    //request for a ride customer end
    @Post('requestForRide')
    async rideRequest(
        @Body("user_id") user_id: String,
        @Body("location") location: Number,
        @Body("vehicle_type") vehicle_type: String
    ) {
        const request = await this._bookingService.rideRequest(user_id, location, vehicle_type);
        return;
    }

    //ride accept or reject rider end
    @Post("acceptRide")
    async riderResponse(
        @Body("booking_id") _id: String,
        @Body("vehicle_id") vehicle_id: String,
        @Body("rider_id") rider_id: String,
        @Body("ride_accept") ride_accept: Boolean
    ) {
        const riderResponse = await this._bookingService.RideAccept(_id, vehicle_id, rider_id, ride_accept);
        return riderResponse;
    }

    @Post("startRide")
    async startRide(
        @Body("booking_id") _id: String,
        @Body("location") location: Number,
    ) {
        const rideStatus = await this._bookingService.StartRide(_id, location);
        return rideStatus;
    }

    // @Post("endRide")
    // async EndRide(
    //     @Body("booking_id") _id: String,
    //     @Body("location") location: Number,
    //     @Body("amount") amount: Number
    // ) {
    //     try {
    //         const rideStatus = await this._bookingService.EndRide(_id, location);
    //         const addTrip = await this._locationService.addTrip(rideStatus, location, amount);
    //         return "Success";
    //     } catch (e) {
    //         return (e + "failed");
    //     }
    // }

    @Post("cancelRide")
    async rideStarted(
        @Body("booking_id") _id: String,
    ) {
        const rideStatus = await this._bookingService.CancelRide(_id);
        return rideStatus;
    }
}
