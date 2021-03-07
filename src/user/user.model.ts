import * as mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
    FirstName: { type: String, unique: false, required: true, maxlength: 30 },
    LastName: { type: String, unique: false, required: true, maxlength: 30 },
    email: { type: String, trim: true, unique: 1 },
    hash: { type: String, required: true },
    Phone__number: { type: Number, minlength: 11, required: true },
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
export const BookingSchema = new mongoose.Schema({
    user_id: { type: String, required: true },
    rider_id: { type: String, required: true },
    verhicle_id: { type: String, required: true },
    Peak_Factor: { type: Number, required: true },
    Fare: { type: Number, required: true },
    Time: { type: Date, required: true, default: Date.now },
    From_Location: { type: Number, required: true },
    To_Location: [{
        latitude: { type: Number, required: true },
        longitude: { type: Number, required: true },
    }],
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
    Phone__number: Number;
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

export interface Booking extends mongoose.Document {
    user_id: String;
    rider_id: String;
    verhicle_id: String;
    Peak_Factor: String;
    Fare: String;
    Time: Date;
    From_Location: Number;
    To_Location: Number;
    started_time: Date;
    ended_time: Date;
    booking_type: String;
    booking_status: String;
    user_Active: Boolean;
}
export interface Wallet extends mongoose.Document {
    user_id: String;
    amount: Number;
    rider_id: String;
}

export interface TripDetailes extends mongoose.Document {
    user_id: String;
    rider_id: String;
    Time: Date;
    pickup_loc: Number;
    dropoff_loc: Number;
    Amount: Number;
    Fare: Number;
    rating: Number;
}
export const TripDetailesSchema = new mongoose.Schema({
    user_id: { type: String, required: true },
    rider_id: { type: String, required: true },
    Time: { type: Date, required: true },
    pickup_loc: {
        latitude: { type: Number },
        longitude: { type: Number }
    },
    dropoff_loc: {
        latitude: { type: Number },
        longitude: { type: Number }
    },
    Amount: { type: Number, required: true },
    Fare: { type: Number, required: true },
    rating: { type: Number, required: true },
});

export interface Location extends mongoose.Document {
    Name: String;
    savedLocation: Number;
    user_id: String;
}

export const LocationSchema = new mongoose.Schema({
    Name: { type: String, required: true },
    savedLocation: {
        latitude: { type: Number },
        longitude: { type: Number }
    },
    user_id: { type: String }
});