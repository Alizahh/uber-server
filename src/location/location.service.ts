import { Injectable, HttpException, HttpStatus, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TripDetaile, Location } from './location.model';
@Injectable()
export class LocationService {
    constructor(
        @InjectModel("Location") private readonly _locationModel: Model<Location>,
        @InjectModel("TripDetaile") private readonly _tripDetailModel: Model<TripDetaile>) { }

    async addTrip(ride, location: Number, amount: Number) {
        try {
            const tripdetails = new this._tripDetailModel({
                user_id: ride.user_id,
                rider_id: ride.rider_id,
                Time: ride.ended_time,
                pickup_loc: ride.From_Location,
                dropoff_loc: location,
                Amount: amount
            });
            let result = tripdetails.save();
            return result;
        } catch (e) {
            return e;
        }
    }
}
