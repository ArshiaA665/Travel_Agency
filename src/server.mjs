/**
 * @typedef {Object} RegisterRequestBody
 * @property {string} fname - First name
 * @property {string} lname - Last name
 * @property {string} email - Email
 * @property {string} password - Password
 */

import express from "express";
import mongoose from "mongoose";
import "./userDetails.mjs"
import cors from "cors"
import bcrypt from "bcryptjs"
import dotenv from "dotenv"

dotenv.config()
const app = express();
app.use(express.json());
app.use(cors());

const mongoUrl = process.env.MONGO_URL;

mongoose
    .connect(mongoUrl, {
        useNewUrlParser:true,
    })
    .then(() => {
        console.log("Connected to database!");
    })
    .catch((e) => console.log(e));


    const User = mongoose.model("UserInfo")

app.post("/register", async(req, res) => {
    /** @type {RegisterRequestBody} */
    const { fname, lname, email, password } = req.body;
    // Now, the properties are type-checked as per the JSDoc typedef
    const  encryptedPassword = await bcrypt.hash(password,10)
    try {
        const oldUser = await User.findOne({email})

        if (oldUser) {
            return res.send({error: "User Exists"});
        }
        await User.create({
            fname,
            lname,
            email,
            password:encryptedPassword,
        });
        res.send({status: "ok" });
    } catch (error) {
        res.send({status: "error" });
    }
});

app.listen(5000, () => {
    console.log("Server started!")
})
