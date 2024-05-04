import mongoose from "mongoose";
import { dbConnection } from "../db.js";
import { faker } from "@faker-js/faker";
import User from "../../entities/users/User.model.js";
import Post from "../../entities/posts/Posts.model.js";


const fakePosts = []
export const fakePostSeeder = async (numberOfUsers) => {
    try {
        await dbConnection();
        let users = await User.find({}, "realName")
        await Post.deleteMany({});
        let fakePost;


        for (let i = 0; i < (numberOfUsers); i++) {
            fakePost = new Post({
                title: faker.lorem.words(),
                author: users[i].realName,
                subTitle: faker.lorem.text(),
                content: faker.lorem.paragraph(),
                region: faker.location.country(),
                relevance: `${i}`,
                type: "article"
            });
            fakePosts.push(fakePost);
        }
        // Insert the generated users into the database
        await Post.insertMany(fakePosts);
        console.log(`Successfully seeded a post for each user.`);
    } catch (error) {
        console.error('Error seeding database:', error);
    } finally {
        // Disconnect from the database
        mongoose.disconnect();
    }
};