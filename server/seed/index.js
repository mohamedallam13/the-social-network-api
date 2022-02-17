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

    addRandomThoughts(users, thoughts)

    // loop through the saved videos, for each video we need to generate a video response and insert the video responses
    users = users.map((u) => u.toJSON());
    thoughts = thoughts.map((t) => t.toJSON());
    // console.table(users);
    // console.table(thoughts);
    // console.info('Seeding complete! 🌱');
    process.exit(0);
});

const addRandomThoughts = (users, thoughts) => {
    const usersCount = users.length;
    const thoughtsCount = thoughts.length;
    const thoughtsPerUser = Math.floor(thoughtsCount / usersCount);
    for (let i = 0; i < usersCount; i++) { }
    users.forEach(function (userObj, i) {
        const starting = i * thoughtsPerUser;
        const ending = starting + thoughtsPerUser;
        const thougtsToBeAssigned = thoughts.slice(starting, ending);
        const ids = thougtsToBeAssigned.map(thought => thought._id);
        const _id = userObj._id
        console.log(_id)
        User.findOne({ _id }).then(function (user) {
            console.log(user);
        })

        // const users = await User.find();
        // const user = await User.findOneAndUpdate(
        //     { _id },
        //     { $addToSet: { thoughts: ids[0] } },
        //     { runValidators: true, new: true }
        // )

        // console.log(users)
    })
}