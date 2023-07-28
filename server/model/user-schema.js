
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        max: 5,
        min: 20
    },

    lastname: {
        type: String,
        required:true,
        trim: true,
        unique: true,
        max: 5,
        min:20
    },

    username: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        index: true,
        lowercase: true
    },

    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true
    },

    password: {
        type: String,
        required: true,
    },

    phone: {
        type: String,
        required: true,
    },
    
    

});

const User = mongoose.model('User', userSchema);

export default User;