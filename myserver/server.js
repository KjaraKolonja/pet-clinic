const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
const PORT = process.env.PORT || 5000;


const uri = "secret";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1
});


// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
async function connectToMongo() {
  try {
    await client.connect();
    console.log("Connected to MongoDB Atlas");
  } catch (error) {
    console.error('Could not connect to MongoDB:', error);
    process.exit(1);
  }
}

connectToMongo();

// Define the Reservations collection
const db = client.db("test");
const reservations = db.collection("reservations");

// API to post a new reservation
app.post('/api/reservations', async (req, res) => {
    try {
        const result = await reservations.insertOne(req.body);
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json({ message: "Error saving reservation", error: error.message });
    }
});

// API to get all reservations
app.get('/api/reservations', async (req, res) => {
    try {
        const result = await reservations.find().toArray();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving reservations", error: error.message });
    }
});

// A simple route to check server operation
app.get('/', (req, res) => {
    res.send('Hello from the server');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
