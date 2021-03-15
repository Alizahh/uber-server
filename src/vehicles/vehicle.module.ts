import { Module } from '@nestjs/common';
import { VehicleSchema, PaymentSchema } from "./vehicle.model";
import { VehicleService } from "./vehicle.service";
import { VehicleController } from "./vehicle.controller";
import { MongooseModule } from '@nestjs/mongoose';
@Module({
    imports: [
        MongooseModule.forFeature([
            { name: "Vehicle", schema: VehicleSchema },
            { name: "Payment", schema: PaymentSchema }
        ]),
    ],
    controllers: [VehicleController],
    providers: [VehicleService],
})
export class VehicleModule { }
