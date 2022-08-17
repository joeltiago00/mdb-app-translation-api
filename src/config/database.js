import dotenv from "dotenv";

dotenv.config();

export default {
    db_connection: 'mongodb://' + process.env.DB_HOST + ':' + process.env.DB_PORT + '/' + process.env.DB_DATABASE,
};