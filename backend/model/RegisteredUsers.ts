import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
  _id: string;
  firstName: string;
  lastName: string;
  bibName: string;
  gender: string;
  dateOfBirth: Date;
  size: string;
  category: string;
  phoneNumber: string;
  email: string;
  emergencyPhoneNumber: string;
}

export interface IUserInput {
  firstName: string;
  lastName: string;
  bibName: string;
  gender: string;
  dateOfBirth: Date;
  size: string;
  category: string;
  phoneNumber: string;
  email: string;
  emergencyPhoneNumber: string;
}

const userSchema = new Schema<IUser>({
  firstName: {
    type: String,
    required: true,
    trim: true,
    minLength: [2, "First Name must be min of 2 characters."],
    maxlength: [30, "First Name must be max of 50 characters"],
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    minLength: [2, "First Name must be min of 2 characters."],
    maxlength: [30, "First Name must be max of 50 characters"],
  },
  bibName: {
    type: String,
    required: true,
    trim: true,
    minLength: [2, "First Name must be min of 2 characters."],
    maxlength: [15, "First Name must be max of 50 characters"],
  },
  gender: {
    type: String,
    required: true,
    enum: ["male", "female", "other"],
    trim: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  size: {
    type: String,
    required: true,
    enum: ["S", "M", "L", "XL", "XXL"],
  },
  category: {
    type: String,
    required: true,
    enum: ["3k", "5k"],
  },
  phoneNumber: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    match: [/^[6-9]\d{9}$/, "Please enter a valid 10-digit mobile number"],
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true, // converts to lowercase before saving
    unique: true, // no duplicate emails allowed
    match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
  },
  emergencyPhoneNumber: {
    type: String,
    required: true,
    trim: true,
    match: [/^[6-9]\d{9}$/, "Please enter a valid 10-digit mobile number"],
  }
},{
    timestamps: true,
}
);

export const User = mongoose.model<IUser>("User", userSchema);
  
