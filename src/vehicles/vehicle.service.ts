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

}
