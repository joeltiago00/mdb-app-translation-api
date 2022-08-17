import database from "./config/database.js";
import express from "express";
import mongoose from "mongoose";
import { router } from "./routes/v1.js";

const app = express();
const port = 3000;

app.use(
    express.urlencoded({extended: true})
);

app.use(express.json());

app.use('/', router);

mongoose.connect(database.db_connection)
    .then(() => {
        console.log("Connected at Database.");
        app.listen(port);
    })
    .catch((err) => { console.log(err); });
