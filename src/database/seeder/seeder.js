import { fakePostSeeder } from "./posts.seeder.js";
import { PostTypesSeeder } from "./postsTypes.seeder.js";
import { userSeeder, fakeUserSeeder } from "./user.seeder.js";

async function runSeeders(numberOfUsers) {
    console.log('Running seeders...');

    await userSeeder();
    await PostTypesSeeder();
    await fakeUserSeeder(numberOfUsers);
    await fakePostSeeder(numberOfUsers)
    console.log('Seeders completed.');
}

runSeeders(7);