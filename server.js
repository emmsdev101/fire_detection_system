const express = require('express');
const globalVariables = require('./store/globals');
const app = express();
const path = require('path')

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());


app.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'dashboard.html'));
});
app.get('/gauge.min.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'gauge.min.js'));
});

// Import and use the router
const apiRouter = require('./routes/api');
app.use('/api', apiRouter);

// Start the server
app.listen(globalVariables.settings.port, () => {
    console.log(`${globalVariables.appName} is running on http://localhost:${globalVariables.settings.port}`);
});
