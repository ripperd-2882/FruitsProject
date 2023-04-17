// const mongoose = require("mongoose");

// mongoose.connect("mongodb://localhost:27017/fruitsDB");











const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
const uri = "mongodb://127.0.0.1:27017";

const client = new MongoClient(uri);

async function run() {
    try {
        const database = client.db('fruitsDB');
        console.log("Connected successfully to server");

        // Query for a movie that has the title 'Back to the Future'
        const collection = database.collection('fruits');
        const query = [{
            name: "Apple",
            score: 8,
            review: "Great Fruit"
        },
        {
            name: "Orange",
            score: 6,
            review: "Kinda Sour"
        },
        {
            name: "Apple",
            score: 9,
            review: "Great Stuff"
        }]

        // const fruits2 = await collection.insertMany(query);
        const fruits3 = collection.find();
        await fruits3.forEach(console.dir);
        // console.log(fruits3);
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
run().catch(console.dir);


