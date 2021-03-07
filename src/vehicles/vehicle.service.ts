import { Injectable, HttpException, HttpStatus, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Mode } from 'fs';
import { Model } from 'mongoose';
import { Vehicle, Review, Payment } from "./vehicle.model";

@Injectable()
export class VehicleService {
    constructor(
        @InjectModel("Vehicle") private readonly vehicleModel: Model<Vehicle>,
        @InjectModel("Review") private readonly reviewModel: Model<Review>,
        @InjectModel("Payment") private readonly paymentModel: Model<Payment>
    ) { }

    async addReview(user_id: String, rider_id: String, vehicle_id: String, review: string) {
        const userReview = new this.reviewModel({
            user_id, rider_id, vehicle_id, review
        });
        const result = await userReview.save();
        throw new HttpException(
            {
                status: HttpStatus.OK,
                msg: "Review from user added successfully",
                data: result,
            },
            HttpStatus.OK
        );
    }

}
