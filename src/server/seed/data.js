const NAMES = [
    'Aaran',
    'Aaren',
    'Aarez',
    'Aarman',
    'Aaron',
    'Aaron-James',
    'Aarron',
    'Aaryan',
    'Aaryn',
    'Aayan',
    'Aazaan',
    'Abaan',
    'Abbas',
    'Abdallah',
    'Abdalroof',
    'Abdihakim',
    'Abdirahman',
    'Abdisalam',
    'Abdul',
    'Abdul-Aziz',
    'Abdulbasir',
    'Abdulkadir',
    'Abdulkarem',
    'Ze',
    'Zechariah',
    'Zeek',
    'Zeeshan',
    'Zeid',
    'Zein',
    'Zen',
    'Zendel',
    'Zenith',
    'Zennon',
    'Zeph',
    'Zerah',
    'Zhen',
    'Zhi',
    'Zhong',
    'Zhuo',
    'Zi',
    'Zidane',
    'Zijie',
    'Zinedine',
    'Zion',
    'Zishan',
    'Ziya',
    'Ziyaan',
    'Zohaib',
    'Zohair',
    'Zoubaeir',
    'Zubair',
    'Zubayr',
    'Zuriel'
];

const THOUGHTS = [
    'Today I ate chicken, and I hate chicken',
    'I like pizza! get me more pizza please, with extra cheese',
    'I am the eye holes man',
    'I have sharp pain in my back',
    'My dog needs a good walk, anyone wants to pitch in for that?',
    'I tried orange juice for the first time ever and it sucks',
    'I hate justin bieber',
    'I am done with this crap'

]

const REACTIONS = [
    'No way',
    'I love this',
    'this is amazing!',
    'count me in!',
    'I want that too',
    'Go for it',
    'I do not think this is a good idea',
    'I think not',
    'I refuse to believe that',
    'Amazing!'
]

const getRandomNumber = (arr) =>
    Math.floor(Math.random() * arr.length);

const getRandomArrItem = (arr) => arr[getRandomNumber(arr)];

const getRandomUsernames = () => {
    const first = getRandomArrItem(NAMES);
    const last = getRandomArrItem(NAMES);
    const username = `@${first}${last}${getRandomNumber(NAMES)}`
    return { first, last, username }
}

const getRandomUserData = (int) => {
    const usersArr = []
    for (let i = 0; i < int; i++) {
        const { first, last, username } = getRandomUsernames();
        const email = `${first[0]}.${last}@gmail.com`
        usersArr.push({
            first,
            last,
            username,
            email
        })
    }
    return usersArr;
}

const getRandomThought = (int, users) => {
    const thoughtsArr = []
    for (let i = 0; i < int; i++) {
        const thoughtText = getRandomArrItem(THOUGHTS)
        const reactions = [...getRandomReactions(3)]
        const { username } = getRandomArrItem(users)
        thoughtsArr.push({
            thoughtText,
            reactions,
            username
        })
    }
    return thoughtsArr
}

const getRandomReactions = (int) => {
    const reactionsArr = []
    for (let i = 0; i < int; i++) {
        const reactionBody = getRandomArrItem(REACTIONS)
        const { username } = getRandomUsernames();
        reactionsArr.push({
            reactionBody,
            username,
        })
    }
    return reactionsArr
}

module.exports = { getRandomUserData, getRandomThought }