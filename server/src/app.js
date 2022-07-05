/**
 *  Dependencies
 */

const path = require('path');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const planetsRouter = require('./routes/planets/planets.router');
const launchesRouter = require('./routes/launches/launches.router');

// Express App

const app = express();

/**
 * Middlewares
 */

// Security related middlewares.
app.use(cors({
    origin: 'http://localhost:3001',
}));
app.use(morgan('combined')); // logging middleware.

// Functional middlewares.
app.use(express.json());

// API Routing
app.use(planetsRouter);
app.use(launchesRouter);

// Client Routing.
app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

module.exports = app;