import { Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose";
import { UserSchema, BookingSchema, WalletSchema } from "./user.model";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";

@Module({
    imports: [MongooseModule.forFeature([
        { name: "User", schema: UserSchema, },
        { name: "UserBooking", schema: BookingSchema },
        { name: "UserWallet", schema: WalletSchema }
    ])],
    controllers: [UserController],
    providers: [UserService],
    exports: [UserService],
})
export class UserModule { }
