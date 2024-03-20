const express = require('express')
const app = express()
const apirouter = require('./router/api')
// const mongoose = require('mongoose')
require('dotenv').config()
app.use(express.json())

const mongoose = require('mongoose');

// MongoDB connection setup
const connectDB = async () => {
    try {
        // Connect to MongoDB using the provided URI
        await mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useCreateIndex: true,
            // useFindAndModify: false
        });

        // Connection successful
        console.log('MongoDB connected');
    } catch (error) {
        // Handle connection errors
        console.error('MongoDB connection error:', error);

        // Retry connection if certain errors occur (optional)
        if (error.name === 'MongoNetworkError') {
            console.log('Retrying connection in 5 seconds...');
            setTimeout(() => {
                connectDB();
            }, 5000);
        } else {
            // Exit the process if the connection cannot be established
            process.exit(1);
        }
    }
};

connectDB();


app.use('/api', apirouter);
app.listen(process.env.PORT, () => console.log(`server is running on port :${process.env.PORT}`))