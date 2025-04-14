const dotenv = require('dotenv');
dotenv.config(); // Load environment variables from .env file
const express = require('express');
const cors = require('cors');
const app = express();
const cookieParser = require('cookie-parser'); // Import cookie parser middleware(server interacting with cookies)
const connectToDb = require('./db/db'); // Import the database connection function
const userRoutes = require('./routes/user.routes'); // Import user routes

connectToDb(); 

app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse JSON request bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded request bodies
app.use(cookieParser()); // Use cookie parser middleware

app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.use('/users', userRoutes);

module.exports = app;