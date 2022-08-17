import mongoose from "mongoose";

const User = mongoose.model('users', {
    name: String,
    email: String,
    password: String,
    role: String,
    auth: {
        first_login: Boolean,
        token: String,
        token_expires_at: Date
    },
    created_at: Date,
    updated_at: Date,
    deleted_at: Date
});

export default User;