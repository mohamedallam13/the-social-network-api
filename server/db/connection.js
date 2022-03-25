const { connect, connection } = require('mongoose');

const { DB_URL, MONGOOSE_OPTIONS } = require("./config");

connect(DB_URL,MONGOOSE_OPTIONS);

module.exports = connection;


// After you create your Heroku application, visit https://dashboard.heroku.com/apps/ select the application name and add your Atlas connection string as a Config Var
// Node will look for this environment variable and if it exists, it will use it. Otherwise, it will assume that you are running this application locally

// const connect = async () => {
//     try {
//         await mongoonse.connect(DB_URL, MONGOOSE_OPTIONS)
//         console.log("Connection successful to MongoDB");
//         console.log(1)
//         console.log(mongoonse.connection)
//         return mongoonse.connection; 
//     } catch (err) {
//         throw err
//     }
// }
// const disconnect = async () => {
//     try {
//         await mongoonse.connection.close()
//         console.log("Connection to MongoDB closed successfully");
//     } catch (err) {
//         throw err
//     }
// }

// connect();

// connect(connectionString, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });

// module.exports = {
//     connect,
//     disconnect
// };


