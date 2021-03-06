import { Body, Controller, Get, Param, Post, Patch, Delete, Req, Res } from "@nestjs/common";
import { Request, Response } from 'express';
import { UserService } from "./user.service";
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