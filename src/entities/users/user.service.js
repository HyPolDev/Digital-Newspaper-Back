import User from "./User.model.js";

export const editProfileService = async (req, res) => {
    console.log("1");
    const userName = req.params.userName
    const body = req.body
    console.log("2");
    const updateUser = await User.findOneAndUpdate(
        { userName },
        body,
        { new: true })
    console.log(updateUser);
    return updateUser
}