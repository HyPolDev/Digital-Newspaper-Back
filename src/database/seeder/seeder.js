import { fakePostSeeder } from "./posts.seeder.js";
import { userSeeder, fakeUserSeeder } from "./user.seeder.js";

async function runSeeders(numberOfUsers) {
    console.log('Running seeders...');

    await userSeeder();
    await fakeUserSeeder(numberOfUsers);
    await fakePostSeeder(numberOfUsers)

    console.log('Seeders completed.');
}

runSeeders(7);