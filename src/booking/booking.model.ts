import * as mongoose from "mongoose";

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
