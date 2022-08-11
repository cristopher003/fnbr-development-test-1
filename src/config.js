import { config } from "dotenv";

config();

export default {
    host: process.env.HOST || "",
    database: process.env.DATABASE || "",
    user: process.env.USER || "",
    password: process.env.PASSWORD || "",
    mailtrapUser:process.env.MAILTRAP_USER,
    mailtrapPass:process.env.MAILTRAP_PASS
};
