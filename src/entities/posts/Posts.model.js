import { Schema, model } from "mongoose";

const PostSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        subTitle: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            ref: "User",
            required: true
        },
        region: {
            type: String,
            required: true,
        },
        relevance: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            ref: "PostTypes",
            required: true,
        },
        is_active: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const Post = model("Post", PostSchema)
export default Post 