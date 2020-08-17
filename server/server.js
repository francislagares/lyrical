const express = require('express');
require('./models');
const dotenv = require('dotenv');
const { graphqlHTTP } = require('express-graphql');
const mongoose = require('mongoose');
const schema = require('./schema/schema');

dotenv.config('../env');
const app = express();

// Replace with your mongoLab URI
const MONGO_URI = process.env.DB_CONNECTION;

if (!MONGO_URI) {
  throw new Error('You must provide a MongoDB Atlas URI');
}

mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection
  .once('open', () => console.log('Connected to MongoDB Atlas instance.'))
  .on('error', (error) => {
    console.log('Error connecting to MongoDB Atlas:', error);
    process.exit();
  });

app.use(express.json());
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

const webpackMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config.js');
app.use(webpackMiddleware(webpack(webpackConfig)));

module.exports = app;
