const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const registerRoute = require('./routes/register');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/userdata', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error(err));

// Body parser middleware
app.use(bodyParser.json());

// Register route
app.use('/api/register', registerRoute);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log('Server running on port ${port}'));