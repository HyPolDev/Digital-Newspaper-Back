import User from "../users/User.model.js"

export const emailInUse = async (email) => {
    const user = await User.findOne(
        { email: email }
    )
    return user
}

export const createUser = async (email, password, userName, realName) => {

    const newUser = await User.create({
        userName: userName,
        email: email,
        password: password,
        realName: realName
    })

    return newUser
}

export const getUserByEmail = async (email) => {
    const user = await User.findOne(
        {
            email: email
        }
    )

    return user
}
