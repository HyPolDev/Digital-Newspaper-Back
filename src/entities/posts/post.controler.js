import { handleError } from "../../core/handleError.js"
import { createPostService, deletePostService, getAllPostsService, getPostService } from "./posts.service.js"

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

export const getPost = async (req, res) => {
    try {
        const posts = await getPostService(req)

        res.status(200).json({
            success: true,
            message: "Post retrieved Succesfuly",
            post: posts
        })

    } catch (error) {
        if (error.message === "Missing data") {
            return handleError(res, error.message, 400)
        }
        handleError(res, "Can not create post", 500)
    }
}

export const deletePost = async (req, res) => {

    try {

        const success = await deletePostService(req)

        res.status(200).json({
            success: success,
            message: "Post deleted Succesfuly"
        })

    } catch (error) {
        if (error.message === "Missing data") {
            return handleError(res, error.message, 400)
        }
        handleError(res, "Can not create post", 500)
    }
}