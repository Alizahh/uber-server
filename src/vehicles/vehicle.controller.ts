import { Body, Controller, Get, Param, Post, Patch, Delete, Req, Res } from "@nestjs/common";
import { Model } from 'mongoose';
import { VehicleService } from './vehicle.service';
import { UserService } from '../user/user.service';
@Controller("booking")
export class VehicleController {
    constructor(private readonly vehicleService: VehicleService,
        private readonly userService: UserService) { }

    // @Post('review')
    // async addReview(
    //     @Body("review") review: any
    // ) {
    //     const addReview = await this.vehicleService.insertReview(review);
    //     return addReview;
    // }

    @Post('wallat/addAmount')
    async addWalletMoney(
        @Body("wallet") wallet: any
    ) {
        const addmoney = await this.userService.addMoney(wallet);
        return addmoney;
    }

    @Post('wallat/deductAmount')
    async deducWalletMoney(
        @Body("wallet") wallet: any
    ) {
        const addmoney = await this.userService.deductMoney(wallet);
        return addmoney;
    }

    @Post('postReview')
    async postReview(
        @Body("user_id") user_id: string,
        @Body("rider_id") rider_id: string,
        @Body("vehicle_id") vehicle_id: string,
        @Body("review") review: string
    ) {
        const postReview = await this.vehicleService.addReview(user_id, rider_id, vehicle_id, review);
        return postReview;
    }
}
