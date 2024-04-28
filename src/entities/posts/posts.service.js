import Post from "./Posts.model.js";

export const getAllPostsService = async (req) => {

    const posts = await Post.find({})


    if (posts.length == 0) {
        throw new Error(`No posts found at page ${req.body.page}`)
    }

    return posts;

}