import mongoose from "mongoose";

const User = mongoose.model('users', {
    name: String,
    email: String,
    password: String,
    role: String,
    created_at: Date,
    updated_at: Date,
    deleted_at: Date
});

export default User;