// backend/server.js

require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 6000;

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to SebeiConnect API');
});

// Import and use routes
// const userRoutes = require('./routes/userRoutes');
// app.use('/api/users', userRoutes);

app.listen(PORT, () => {
    console.log(`SebeiConnect backend running on http://localhost:${PORT}`);
});
