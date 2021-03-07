import { Module } from '@nestjs/common';
import { VehicleSchema, PaymentSchema, ReviewSchema } from "./vehicle.model";
import { VehicleService } from "./vehicle.service";
import { VehicleController } from "./vehicle.controller";
import { MongooseModule } from '@nestjs/mongoose';
@Module({
    imports: [
        MongooseModule.forFeature([
            { name: "Vehicle", schema: VehicleSchema },
            { name: "Payment", schema: PaymentSchema },
            { name: "Review", schema: ReviewSchema }
        ]),
    ],
    controllers: [VehicleController],
    providers: [VehicleService],
})
export class VehicleModule { }
