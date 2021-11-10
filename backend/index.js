import express from "express"
import db from "./config/db.js"
// import Users from "./models/UserModel.js";
const app = express()

try {
    await db.authenticate();
    console.log('Database Connected..')
    // await Users.sync()

} catch (error) {
    console.log(error)
}


app.listen (5000, () => console.log('Server Running at port 5000'))