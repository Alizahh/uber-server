
import { Injectable, HttpException, HttpStatus, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Booking } from "./booking.model";
@Injectable()
export class BookingService {
    constructor(@InjectModel("UserBooking") private readonly _bookingModel: Model<Booking>) { }

    //User booking a ride 

    async RideBooking(req) {

        // const RiderAvailable = await this.userModel.findById(req.body.rider_id);
        // if (RiderAvailable.Active && RiderAvailable.Available) {


        // }
        return
    }



    async rideRequest(user_id: String, location: Number, vehicle_type: String) {
        const booking = new this._bookingModel({
            user_id, location, vehicle_type
        });
        const result = await booking.save();
        throw new HttpException(
            {
                status: HttpStatus.OK,
                msg: "Searching for a ride request.PLease wait",
                data: result,
            },
            HttpStatus.OK
        );
    }

    async RideAccept(booking_id: String, vehicle_id: String, rider_id: String, ride_accept: Boolean) {
        if (ride_accept) {
            const bookingdetails = await this._bookingModel.findOneAndUpdate(
                { _id: booking_id },
                {
                    verhicle_id: vehicle_id,
                    ride_accept: ride_accept,
                    rider_id: rider_id,
                    ride_status: "confirmed"
                },
                { new: true }
            );
            throw new HttpException(
                {
                    status: HttpStatus.OK,
                    msg: "Rider accepted",
                    data: bookingdetails,
                },
                HttpStatus.OK
            );
        } else {
            const bookingdetails = await this._bookingModel.findOneAndUpdate(
                { _id: booking_id },
                {
                    ride_status: "waiting"
                },
                { new: true }
            );
            throw new HttpException(
                {
                    status: HttpStatus.BAD_REQUEST,
                    msg: "ride has been rejected by the rider",
                    data: bookingdetails,
                },
                HttpStatus.BAD_REQUEST
            );
        }

    }

    async StartRide(booking_id: String, location: Number) {
        const ride = await this._bookingModel.findOneAndUpdate(
            { _id: booking_id },
            {
                started_time: new Date(),
                From_Location: location,
                ride_status: "commenced"
            });
        return ride;
    }

    async EndRide(Booking_id: String, location: Number) {
        const ride = await this._bookingModel.findOneAndUpdate(
            { _id: Booking_id },
            {
                ended_time: new Date(),
                To_Location: location,
                ride_status: "completed"
            });
        return ride;
    }

    async CancelRide(booking_id) {
        const cancel = await this._bookingModel.findOneAndUpdate({ _id: booking_id }, {
            ride_status: "canceled",
            verhicle_id: "",
            vehicle_type: "",
            rider_id: "",
        }, {
            new: true
        });
        return cancel;
    }

    async CalculateDistance(currentLocation, destinationLocation) {

        let R = 6371; // Radius of the earth in km
        let dLat = this.deg2rad(destinationLocation.latitude - currentLocation.latitude);  // deg2rad below
        let dLon = this.deg2rad(destinationLocation.longitude - currentLocation.longitude);
        let a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(this.deg2rad(currentLocation.latitude)) * Math.cos(this.deg2rad(destinationLocation.latitude)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2)
            ;
        let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        let distanceInKm = R * c; // Distance in 
        return distanceInKm;
    }

    deg2rad = (deg) => {
        return deg * (Math.PI / 180);
    }

    async CalculateFare(distance: Number, vehicle_type: String, booking_id: String) {
        // const rideDetails = await this.userBooking.findById({ _id: booking_id });
        let amount = 0;
        if (vehicle_type === "mini") {
            let perKm = 8.80;
            let base_fare = 64;
            const minimum_fare = 96;
            // if (rideDetails.ride_status === "notMoving") {
            //     let perMinute = 3.93;
            //     amount = amount + perMinute;
            // }
            // amount = distance * perKm;
        }
        return;
    }

    async rideWaiting(booking_id: String) {
        const rideStatus = await this._bookingModel.findOneAndUpdate(
            { _id: booking_id },
            { ride_status: "notMoving" },
            { new: true });
    }

    // Base Fare: Rs. 64
    // Per KM: Rs. 8.80
    // Per Minute: Rs. 3.93
    // Minimum Fare: Rs. 96
    // 2. Auto:

    //     Base Fare: Rs. 17.71
    // Per KM: Rs. 12.13
    // Per Minute: Rs. 3.61
    // Minimum Fare: Rs. 71
    // 3. Go:

    //     Base Fare: Rs. 80
    // Per KM: Rs. 11.00
    // Per Minute: Rs. 4.91
    // Minimum Fare: Rs. 120

}
