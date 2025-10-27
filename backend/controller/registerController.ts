
import {Request, Response} from 'express';
import { IUserInput, User } from '../model/RegisteredUsers';


//register user
export const registerUser = (async(req:Request, res:Response) => {
    const {firstName, lastName, bibName, gender, dateOfBirth, size, category, phoneNumber, email, emergencyPhoneNumber} = req.body;
    try {
        const existingUser = await User.findOne({email: email.toLowerCase()});
        if(existingUser){
            res.status(409).json({
                success: false,
                message: "User already exists with entered email"
            });
            return;
        }

        const userData: IUserInput = {
            firstName: firstName,
            lastName: lastName,
            bibName: bibName,
            gender: gender,
            dateOfBirth: dateOfBirth,
            size: size,
            category: category,
            phoneNumber: phoneNumber,
            email: email,
            emergencyPhoneNumber: emergencyPhoneNumber,
        }

        const user = await User.create(userData);

        res.status(200).json({
            success: true,
            message: "User registered successfully",
            data: {
                ...user
            }
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal server error',
        })
    }
})