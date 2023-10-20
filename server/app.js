'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// The in-memory database of tweets. It's a basic object with an array in it.
const db = require('./lib/in-memory-db');

// The `data-helpers` module provides an interface to the database of tweets.
// This simple interface layer has a big benefit: we could switch out the
// actual database it uses and see little to no changes elsewhere in the code.

// Because it exports a function that expects the `db` as a parameter, we can
// require it and pass the `db` parameter immediately:
const DataHelpers = require('./lib/data-helpers.js')(db);

// Update the dates for the initial tweets (data-files/initial-tweets.json).
require('./lib/date-adjust')();

const tweetsRoutes = require('./routes/tweets')(DataHelpers);

// Mount the tweets routes at the "/tweets" path prefix:
app.use('/tweets', tweetsRoutes);

module.exports = app;