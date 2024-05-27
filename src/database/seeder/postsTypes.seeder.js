import mongoose from "mongoose";
import { dbConnection } from "../db.js";
import { faker } from "@faker-js/faker";
import User from "../../entities/users/User.model.js";
import Post from "../../entities/posts/Posts.model.js";
import PostTypes from "../../entities/postTypes/postTypes.model.js";


const PostTypesArr = [{

}]
export const PostTypesSeeder = async () => {
    try {
        await dbConnection();
        let postTypes = await PostTypes.find({})
        await PostTypes.deleteMany({});

        await Post.insertMany(PostTypesArr);
        console.log(`Successfully seeded a post for each user.`);
    } catch (error) {
        console.error('Error seeding database:', error);
    } finally {
        // Disconnect from the database
        mongoose.disconnect();
    }
};