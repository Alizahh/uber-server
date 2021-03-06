import { Injectable, HttpException, HttpStatus, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, Wallet } from './user.model';
// import { jwtToken } from './token';

import jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
@Injectable()
export class UserService {
    constructor(
        @InjectModel('User') private readonly userModel: Model<User>,
        @InjectModel('UserWallet') private readonly _walletModel: Model<Wallet>
    ) { }

    async Signup(
        FirstName: string,
        LastName: String,
        email: string,
        password: string,
        Phone__number: string,
        user_type: String,
        admin?: boolean,

    ) {
        const Email = await this.findUser(email);
        if (!Email) {
            console.log(Email, "unique");
            const hash = await bcrypt.hash(password, 10);
            console.log("hashed hash -->", hash);
            const newUser = new this.userModel({
                FirstName,
                LastName,
                email,
                hash,
                Phone__number,
                admin,
                user_type
            });

            const result = await newUser.save();
            throw new HttpException(
                {
                    status: HttpStatus.OK,
                    msg: "Signed up successfully",
                    data: result,
                },
                HttpStatus.OK
            );
        }
        else {
            throw new HttpException(
                {
                    status: HttpStatus.BAD_REQUEST,
                    msg: "Use another email",
                    data: [],
                },
                HttpStatus.BAD_REQUEST
            );
        }

    }

    async login(req) {
        try {
            const Email = await this.userModel.findOne({ email: req.body.email });
            if (!Email) {
                throw {
                    statusCode: 404,
                    message: 'User with this email does not exist',
                };
            }
            const token = jwt.sign(
                { email: req.body.email },
                'Alizah123',
                {
                    expiresIn: '2d',
                },
            );
            if (!token) {
                throw {
                    statusCode: 400,
                    message: 'No token yet found.Try again.'
                };
            }
            return token;
        } catch (e) {
            console.log("Unable to Sign up.Try agian.", e)
            throw {
                statusCode: 500,
                message: "Unable to Sign up.Try again."
            };
        }
    }

    async findUser(email: string): Promise<User> {
        let User;
        try {
            User = await this.userModel.findOne({ email: email }).exec();
            return User;
        } catch (error) {
            throw error;
        }
    }

    async Signout(id: string) {
        console.log(id, "iddddd")
        const success = await this.userModel.findOneAndUpdate({ _id: id }, { token: "" });
        return success;

    }

    async addMoney(data) {
        const userWallet = await this._walletModel.findByIdAndUpdate(
            { user_id: data.user_id },
            { $inc: { amount: data.amount } }
        );
        return userWallet;
    }

    async deductMoney(data) {
        const userWallet = await this._walletModel.findByIdAndUpdate(
            { user_id: data.user_id },
            { $inc: { amount: -data.amount } }
        );
        return userWallet;
    }




}
    // async PeakFactorCalculator(location: Number) {
    //     const availableRiders = await this.userModel.find({})
    //     return;
    // }
    // async getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    //     var R = 6371; // Radius of the earth in km
    //     var dLat = deg2rad(lat2 - lat1);  // deg2rad below
    //     var dLon = deg2rad(lon2 - lon1);
    //     var a =
    //         Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    //         Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
    //         Math.sin(dLon / 2) * Math.sin(dLon / 2)
    //         ;
    //     var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    //     var d = R * c; // Distance in km
    //     return d;
    // }

    // async deg2rad(deg) {
    //     return deg * (Math.PI / 180)
    // }

