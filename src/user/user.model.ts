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
export const BookingSchema = new mongoose.Schema({
    user_id: { type: String, required: true },
    rider_id: { type: String },
    verhicle_id: { type: String },
    Peak_Factor: { type: Number },
    Fare: { type: Number },
    Time: { type: Date, default: Date.now },
    vehicle_type: { type: String },
    From_Location: { type: Number, required: true },
    To_Location: [{
        latitude: { type: Number, required: true },
        longitude: { type: Number, required: true },
    }],
    started_time: { type: Date },
    ended_time: { type: Date },
    booking_type: { type: String },
    booking_status: { type: String },
    ride_accept: { type: Boolean, default: false },
    ride_status: { type: String }
});
export interface Booking extends mongoose.Document {
    user_id: String;
    rider_id: String;
    verhicle_id: String;
    Peak_Factor: String;
    Fare: String;
    Time: Date;
    vehicle_type: String;
    From_Location: Number;
    To_Location: Number;
    started_time: Date;
    ended_time: Date;
    booking_type: String;
    booking_status: String;
    ride_accept: Boolean;
    ride_status: String;
}
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

export interface TripDetaile extends mongoose.Document {
    user_id: String;
    rider_id: String;
    Time: Date;
    pickup_loc: Number;
    dropoff_loc: Number;
    Amount: Number;
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
    rating: { type: Number },
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