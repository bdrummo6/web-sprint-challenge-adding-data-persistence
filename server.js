const express = require('express');

const server = express();

const welcomeRouter = require('./api/welcome/welcome-router');
const projectsRouter = require('./api/projects/projects-router');

server.use(express.json());

server.use('/api', welcomeRouter);
server.use('/api/projects', projectsRouter);

module.exports = server;