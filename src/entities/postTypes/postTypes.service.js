import PostTypes from "./postTypes.model.js";

export const getAllPostsTypesService = async (req) => {

    const posts = await PostTypes.find({})


    if (posts.length == 0) {
        throw new Error(`No posts found at page ${req.body.page}`)
    }

    return posts;

}

export const createPostTypesService = async (req) => {

    const title = req.body.name
    const description = req.body.description

    const post = await PostTypes.create({
        name: title,
        description: description,
    })
    return post
}
export const updatePostsTypesService = async (req) => {
    const name = req.params.name
    const body = req.body
    const updateUser = await PostTypes.findOneAndUpdate(
        { name },
        body,
        { new: true })

    return updateUser
}

export const deletePostsTypeService = async (req) => {

    const name = req.params.name

    await Post.deleteOne({ name: name })

    return true
}
