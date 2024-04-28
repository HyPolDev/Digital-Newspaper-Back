import { userSeeder, fakeUserSeeder } from "./user.seeder.js";

async function runSeeders(numberOfUsers) {
    console.log('Running seeders...');

    await userSeeder();
    await fakeUserSeeder(numberOfUsers);

    console.log('Seeders completed.');
}

runSeeders(7);