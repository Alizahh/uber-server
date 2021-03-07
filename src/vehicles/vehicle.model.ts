import * as mongoose from "mongoose";

export interface Vehicle extends mongoose.Document {
    Name: String;
    number_plate: String;
    car_type: String;
    color: String;
    vehicle_type: String;
    owner_id: String;
}

export const VehicleSchema = new mongoose.Schema({
    Name: { type: String },
    number_plate: { type: String },
    car_type: { type: String },
    color: { type: String },
    vehicle_type: { type: String },
    owner_id: { type: String }
});
export interface Payment extends mongoose.Document {
    user_id: String;
    rider_id: String;
    Amount: Number;
    typeOfPayment: String;
}
export const PaymentSchema = new mongoose.Schema({
    user_id: { type: String },
    rider_id: { type: String },
    Amount: { type: Number },
    typeOfPayment: { type: String }
});

export interface Review extends mongoose.Document {
    user_id: String;
    rider_id: String;
    vehicle_id: String;
    review: String;
}
export const ReviewSchema = new mongoose.Schema({
    user_id: { type: String },
    rider_id: { type: String },
    vehicle_id: { type: String },
    review: { type: String }
});

