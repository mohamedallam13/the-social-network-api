const express = require('express');
// const { connect, disconnect } = require('./db/connection');
// const db = connect();
const db = require('./db/connection');
const routes = require('./routes');

const PORT = process.env.PORT || 3001;
const app = express();

const activity = 'the social network'

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server for ${activity} running on http://localhost:${PORT}!`);
    });
});
