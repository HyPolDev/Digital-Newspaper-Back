import mongoose from "mongoose";
import { dbConnection } from "../db.js";
import { faker } from "@faker-js/faker";
import User from "../../entities/users/User.model.js";
import Post from "../../entities/posts/Posts.model.js";
import PostTypes from "../../entities/postTypes/postTypes.model.js";
import { describe } from "node:test";


const PostTypesArr = [{
    name: "article",
    description: "Generic post exposing a new"
}, {
    name: "analysis",
    description: "Delailed walkthrough over an idea"
}, {
    name: "interview",
    description: "Journalist questions a subject for a news article"
}]
export const PostTypesSeeder = async () => {
    try {
        await dbConnection();
        await PostTypes.deleteMany({});

        await PostTypes.insertMany(PostTypesArr);
        console.log(`Successfully seeded the Post Types.`);
    } catch (error) {
        console.error('Error seeding database:', error);
    } finally {
        // Disconnect from the database
        mongoose.disconnect();
    }
};