import { Schema, model } from 'mongoose';
import { User } from '../../types';

const userSchema = new Schema({
    username: { type: String, required: [true, "username is required"] },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
    },
    pass: {
        type: String,
        required: [true, "Password is required"],
    }
});

export default  model<User>("User", userSchema);
