import Post from "./Posts.model.js";

export const getAllPostsService = async (req) => {

    const posts = await Post.find({})


    if (posts.length == 0) {
        throw new Error(`No posts found at page ${req.body.page}`)
    }

    return posts;

}

export const createPostService = async (req) => {

    const title = req.body.title
    const subTitle = req.body.subTitle
    const author = req.tokenData.realName

    const content = req.body.content
    const region = req.body.region
    const relevance = req.body.relevance
    const type = req.body.type

    // still to do validations

    const post = await Post.create({
        title: title,
        subTitle: subTitle,
        author: author,
        content: content,
        relevance: relevance,
        region: region,
        type: type
    })
    return post
}

export const getPostService = async (req) => {

    const id = req.params.id

    const posts = await Post.findById(id)

    if (posts.length == 0) {
        throw new Error(`No posts found at page ${req.body.page}`)
    }

    return posts;

}

export const deletePostService = async (req) => {

    const id = req.params.id

    await Post.deleteOne({ _id: id })

    return true
}