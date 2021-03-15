import * as mongoose from "mongoose";

export const LocationSchema = new mongoose.Schema({
    Name: { type: String, required: true },
    savedLocation: {
        latitude: { type: Number },
        longitude: { type: Number }
    },
    user_id: { type: String }
});

export const TripDetaileSchema = new mongoose.Schema({
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
export interface TripDetaile extends mongoose.Document {
    user_id: String;
    rider_id: String;
    Time: Date;
    pickup_loc: Number;
    dropoff_loc: Number;
    Amount: Number;
    rating: Number;
}

