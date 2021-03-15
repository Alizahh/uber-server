import { Body, Controller, Get, Param, Post, Patch, Delete, Req, Res } from "@nestjs/common";
import { Request, Response } from 'express';
import { ReviewService } from "./review.service";
@Controller()
export class ReviewController {
    constructor(private readonly _reviewService: ReviewService) { }

    @Post('postReview')
    async postReview(
        @Body("user_id") user_id: string,
        @Body("rider_id") rider_id: string,
        @Body("vehicle_id") vehicle_id: string,
        @Body("review") review: string
    ) {
        const postReview = await this._reviewService.addReview(user_id, rider_id, vehicle_id, review);
        return postReview;
    }
}
