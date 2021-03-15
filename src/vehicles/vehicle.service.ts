import { Injectable, HttpException, HttpStatus, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Vehicle, Payment } from "./vehicle.model";

@Injectable()
export class VehicleService {
    constructor(
        @InjectModel("Vehicle") private readonly vehicleModel: Model<Vehicle>,
        @InjectModel("Payment") private readonly paymentModel: Model<Payment>
    ) { }
}
