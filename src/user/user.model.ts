import * as mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
    FirstName: { type: String, unique: false, required: true, maxlength: 30 },
    LastName: { type: String, unique: false, required: true, maxlength: 30 },
    email: { type: String, trim: true, unique: 1 },
    hash: { type: String, required: true },
    Phone_number: { type: Number, minlength: 11, required: true },
    DOB: { type: Date },
    rating: { type: String, default: 3.4 },
    admin: { type: Boolean, default: false },
    user_type: { type: String, required: true },
    token: { type: String },
    created: { type: Date },
    vehicle_id: { type: String },
    Active: { type: Boolean, default: true },
    Available: { type: Boolean, default: true }
});

export const WalletSchema = new mongoose.Schema({
    user_id: { type: String, required: true },
    amount: { type: Number, required: true },
    rider_id: { type: String, required: true }
});


export interface User extends mongoose.Document {
    FirstName: String;
    LastName: String;
    email: String;
    hash: String;
    Phone_number: Number;
    DOD: Date;
    rating: Number;
    admin: Boolean;
    user_type: String;
    token: String;
    created: Date;
    vehicle_id: String;
    Active: Boolean;
    Available: Boolean;
}


export interface Wallet extends mongoose.Document {
    user_id: String;
    amount: Number;
    rider_id: String;
}


