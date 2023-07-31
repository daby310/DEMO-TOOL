const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 6001; // You can use any port you prefer

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/Demo-tool-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

// Define your MongoDB schema and model
const demoSchema = new mongoose.Schema({
  // Define your data structure here
  // For example:
  title: { type: String, required: true },
  description: { type: String, required: true },
});

const Demo = mongoose.model('Demo', demoSchema);

// Routes for CRUD operations
// (Your CRUD routes go here, as mentioned in the previous messages)

// Root route
app.get('/', (req, res) => {
  res.send('Hello, this is the root path!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
