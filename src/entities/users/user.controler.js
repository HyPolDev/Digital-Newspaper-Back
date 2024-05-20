import { handleError } from "../../core/handleError.js";
import { editProfileService } from "./user.service.js"

export const editProfile = async (req, res) => {

    try {

        const profile = await editProfileService(req)

        res.status(200).json({
            success: success,
            message: "Post deleted Succesfuly",
            data: profile
        })

    } catch (error) {
        if (error.message === "Missing data") {
            return handleError(res, error.message, 400)
        }
        handleError(res, "Can not update profile", 500)
    }
}