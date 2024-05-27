import User from "./User.model.js";

export const editProfileService = async (req, res) => {

    const userName = req.params.userName
    const body = req.body

    const updateUser = await User.findOneAndUpdate(
        { userName },
        body,
        { new: true })

    return updateUser
}

export const deleteProfileService = async (req, res) => {
    const userName = req.params.userName

    const userDeleted = await User.findOneAndDelete({ userName: userName })

    return userDeleted
}