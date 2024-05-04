import { handleError } from "../../core/handleError.js"
import { createPostService, getAllPostsService } from "./posts.service.js"

export const getAllPosts = async (req, res) => {
    try {
        const posts = await getAllPostsService(req)

        res.status(200).json({
            success: true,
            message: "Posts retrieved successfuly",
            posts: posts
        })

    } catch (error) {
        if (error.message === "Posts not found") {
            return handleError(res, error.message, 400)
        }
        handleError(res, "Cant get posts, server error", 500)
    }
}

export const createPost = async (req, res) => {
    try {
        const posts = await createPostService(req)

        res.status(200).json({
            success: true,
            message: "Posts created Succesfuly",
            posts: posts
        })

    } catch (error) {
        if (error.message === "Missing data") {
            return handleError(res, error.message, 400)
        }
        handleError(res, "Can not create post", 500)
    }
}