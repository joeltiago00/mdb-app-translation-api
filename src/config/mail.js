import dotenv from "dotenv";

dotenv.config();

export default {
    ses: {
        region: process.env.MY_AWS_SES_REGION,
        access_key_id: process.env.MY_AWS_SES_ACCESS_KEY_ID,
        secret_access_key: process.env.MY_AWS_SES_SECRET_ACCESS_KEY,
    }
}