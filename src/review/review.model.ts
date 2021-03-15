import * as mongoose from "mongoose";
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