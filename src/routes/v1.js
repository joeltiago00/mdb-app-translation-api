import express from "express";
import UserController from "../app/Http/Controllers/UserController.js";
import UserRequest from "../app/Http/Requests/UserRequest.js";

const router = express.Router();

export {router}

router.get('/', async (req, res) => {
    return res.status(200).json("API V1 IS ON!");
});

router.post('/user', UserRequest.store, UserController.store);