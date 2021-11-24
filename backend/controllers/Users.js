import Users from "../models/UserModel"
import bcrypt from "bcrypt"

export const getUsers = async(req, res) => {
    try {
        const users = await Users.findAll()
        res.json(users)
    } catch (error) {
        console.log(error)
    }
}

export const Register = async (res, req)