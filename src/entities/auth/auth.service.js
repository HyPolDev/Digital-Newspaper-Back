import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { createUser, emailInUse, getUserByEmail } from "./auth.repository.js"

export const loginService = async (req) => {
    const email = req.body.email
    const password = req.body.password

    if (!email || !password) {
        throw new Error("Email and password are required")
    }

    if (password.length < 6 || password.length > 20) {
        throw new Error("Password must contain between 6 and 10 characters")
    }

    const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    if (!validEmail.test(email)) {
        throw new Error("Email format is not valid")
    }

    const user = await getUserByEmail(email)

    if (!user) {
        throw new Error("Email or password invalid")
    }

    const isValidPassword = bcrypt.compareSync(password, user.password)

    if (!isValidPassword) {
        throw new Error("Email or password invalid")
    }

    const token = jwt.sign(
        {
            userId: user._id,
            role: user.role,
            userName: user.userName,
            realName: user.realName
        },
        process.env.JWT_SECRET,
        {
            expiresIn: "240h"
        }
    )

    return token
}


export const registerService = async (req) => {

    const email = req.body.email
    const password = req.body.password
    const userName = req.body.userName
    const realName = req.body.realName

    if (!email || !password) {
        throw new Error("Email and password are required")
    }

    if (password.length < 6 || password.length > 10) {
        throw new Error("Password must contain between 6 and 10 characters")
    }

    const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/

    if (!validEmail.test(email)) {
        throw new Error("Email format invalid")
    }

    const emailUsed = await emailInUse(email)

    if (emailUsed) {
        throw new Error("Email already in use")
    }

    const passwordEncrypted = bcrypt.hashSync(password, 8)

    const newUser = await createUser(email, passwordEncrypted, userName, realName)
    //also create and return token in the future;
    return newUser
}