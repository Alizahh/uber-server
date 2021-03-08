import { Body, Controller, Get, Param, Post, Patch, Delete, Req, Res } from "@nestjs/common";
import { UserService } from "./user.service";
import { Request, Response } from 'express';
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }
    //first time
    @Post('signup')
    async addUser(
        @Body('FirstName') FirstName: string,
        @Body('LastName') LastName: string,
        @Body('email') email: string,
        @Body('password') password: string,
        @Body('Phone_number') number: string,
        @Body('admin') admin: boolean,
        @Body('user_type') type: String
    ) {
        const UserCreated = await this.userService.Signup(FirstName, LastName, email, password, number, type, admin);
        return UserCreated;
    }

    @Post('signout')
    async logout(@Body('id') id: string) {

        const response = await this.userService.Signout(id);
        return response;
    }

    @Post('/login')
    async login(@Req() req: Request, @Res() res: Response) {
        try {
            const token = await this.userService.login(req);
            res.status(200).send({
                responseCode: 200,
                result: token,
            });
        } catch (error) {
            res.status(error.statusCode ? error.statusCode : 500).send({
                responseCode: error.statusCode,
                result: error.message,
            });
        }
    }

    //request for a ride customer end
    @Post('requestForRide')
    async rideRequest(
        @Body("user_id") user_id: String,
        @Body("location") location: Number,
        @Body("vehicle_type") vehicle_type: String
    ) {
        const request = await this.userService.rideRequest(user_id, location, vehicle_type);
        return;
    }

    //ride accept or reject rider end
    @Post("acceptRide")
    async riderResponse(
        @Body("booking_id") _id: String,
        @Body("vehicle_id") vehicle_id: String,
        @Body("rider_id") rider_id: String,
        @Body("ride_accept") ride_accept: Boolean
    ) {
        const riderResponse = await this.userService.RideAccept(_id, vehicle_id, rider_id, ride_accept);
        return riderResponse;
    }

    @Post("startRide")
    async startRide(
        @Body("booking_id") _id: String,
        @Body("location") location: Number,
    ) {
        const rideStatus = await this.userService.StartRide(_id, location);
        return rideStatus;
    }

    @Post("endRide")
    async EndRide(
        @Body("booking_id") _id: String,
        @Body("location") location: Number,
        @Body("amount") amount: Number
    ) {
        const rideStatus = await this.userService.EndRide(_id, location, amount);
        return rideStatus;
    }

    @Post("cancelRide")
    async rideStarted(
        @Body("booking_id") _id: String,
    ) {
        const rideStatus = await this.userService.CancelRide(_id);
        return rideStatus;
    }
}