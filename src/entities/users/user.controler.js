import { handleError } from "../../core/handleError.js";
import { deleteProfileService, editProfileService, getAllUsersService } from "./user.service.js"

export const editProfile = async (req, res) => {

    try {

        const profile = await editProfileService(req)
        res.status(200).json({
            success: true,
            message: "Profile Edited Succesfuly",
            data: profile
        })

    } catch (error) {
        if (error.message === "Missing data") {
            return handleError(res, error.message, 400)
        }
        handleError(res, "Can not update profile", 500)
    }
}

export const deleteProfile = async (req, res) => {

    try {

        const profile = await deleteProfileService(req)

        res.status(200).json({
            success: true,
            message: "Profile deleted Succesfuly",
            data: profile
        })

    } catch (error) {
        if (error.message === "Missing data") {
            return handleError(res, error.message, 400)
        }
        handleError(res, "Can not update profile", 500)
    }
}

export const getAllUsers = async (req, res) => {
    try {

        const profile = await getAllUsersService(req)

        res.status(200).json({
            success: true,
            message: "Profiles retrieved Succesfuly",
            data: profile
        })

    } catch (error) {
        if (error.message === "Missing data") {
            return handleError(res, error.message, 400)
        }
        handleError(res, "Can not retrieve profiles", 500)
    }
}
