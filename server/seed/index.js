const connection = require('../db/connection');
const { User, Thought } = require('../model');
const { getRandomUserData, getRandomThought } = require('./data');


connection.on('error', (err) => err);
connection.once('open', async () => {
    console.log('connected');
    await Thought.deleteMany({});
    await User.deleteMany({});

    let users = getRandomUserData(5);
    let thoughts = getRandomThought(10, users);

    users = await User.insertMany(users);
    thoughts = await Thought.insertMany(thoughts);

    // loop through the saved videos, for each video we need to generate a video response and insert the video responses
    users = users.map((u) => u.toJSON());
    thoughts = thoughts.map((t) => t.toJSON());
    console.table(users);
    console.table(thoughts);
    console.info('Seeding complete! 🌱');
    process.exit(0);
});