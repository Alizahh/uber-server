import { Body, Controller, Get, Param, Post, Patch, Delete, Req, Res } from "@nestjs/common";
import { Model } from 'mongoose';
import { VehicleService } from './vehicle.service';
import { UserService } from '../user/user.service';
@Controller("vehicle")
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
}
