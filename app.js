const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB");

const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
    name: "Apple",
    rating: 7,
    review: "Good"
});

// fruit.save();

const kiwi = new Fruit({
    name: "Kiwi",
    rating: 10,
    review: "Best"
});

const orange = new Fruit({
    name: "Orange",
    rating: 4,
    review: "Sour"
});

const banana = new Fruit({
    name: "Banana",
    rating: 3,
    review: "Wierd"
});

// Fruit.insertMany([kiwi,orange,banana]).then (function (err) {
//     if (err)
//         console.log(err);
//     else
//         console.log("Success");    
// });

Fruit.insertMany([kiwi, orange, banana]).then(function () {
    console.log("Successfully saved all the fruits to fruitsDB.");
}).catch(function (err) {
    console.log(err);
});





const personSchema = new mongoose.Schema({
    name: String,
    age: Number
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
    name: "John",
    age: 37
});

// person.save();