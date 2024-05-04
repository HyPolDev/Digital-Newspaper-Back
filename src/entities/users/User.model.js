import { Schema, model } from "mongoose";


const UserSchema = new Schema({
    userName: {
        type: String,
        required: true,
        unique: true
    },
    realName: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        enum: ["user", "writer", "admin", "superadmin"],
        default: "writer"
    }
},
    {
        timestamps: true,
        versionKey: false
    }
)

const User = model("User", UserSchema)

export default User