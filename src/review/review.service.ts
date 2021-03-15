import { Injectable, HttpException, HttpStatus, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Review } from "./review.model";
@Injectable()
export class ReviewService {
    constructor(
        @InjectModel("Review") private readonly _reviewModel: Model<Review>
    ) { }

    async addReview(user_id: String, rider_id: String, vehicle_id: String, review: string) {
        const userReview = new this._reviewModel({
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
