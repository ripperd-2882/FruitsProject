const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB");

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
    // name: "Apple",
    rating: 10,
    review: "Good"
});

// fruit.save();



async function updateFruits() {
    try {
        const fruits = await Fruit.updateOne({ _id: '643e48ed5e10758897a40e2b' }, { name: 'Peach' });
        console.log("Successfully Updated");
    } catch (err) {
        console.log(err);
    }
    mongoose.connection.close();
}

// updateFruits();


async function deleteFruits() {
    try {
        const fruits = await Fruit.deleteOne({ name: 'Peach' });
        console.log("Successfully Deleted");
    } catch (err) {
        console.log(err);
    }
    mongoose.connection.close();
}

// deleteFruits();





// const kiwi = new Fruit({
//     name: "Kiwi",
//     rating: 10,
//     review: "Best"
// });

// const orange = new Fruit({
//     name: "Orange",
//     rating: 4,
//     review: "Sour"
// });

// const banana = new Fruit({
//     name: "Banana",
//     rating: 3,
//     review: "Wierd"
// });













//-----------------------------------------------------------------------------------------------------------------------
//     From Course
// // // Fruit.insertMany([kiwi,orange,banana]).then (function (err) {
// // //     if (err)
// // //         console.log(err);
// // //     else
// // //         console.log("Success");    
// // // });
//-----------------------------------------------------------------------------------------------------------------------






// Fruit.insertMany([kiwi, orange, banana]).then(function () {
//     console.log("Successfully saved all the fruits to fruitsDB.");
// }).catch(function (err) {
//     console.log(err);
// });

async function findFruits() {
    try {
        const fruits = await Fruit.find();
        fruits.forEach(function (fruitItem) {
            console.log(fruitItem.name);
        })
        // console.log(fruits);
    } catch (err) {
        console.log(err);
    }
    mongoose.connection.close();
}

// findFruits();










const personSchema = new mongoose.Schema({
    name: String,
    age: Number
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
    name: "John",
    age: 37
});

person.save();



async function deletePerson() {
    try {
        const people = await Person.deleteMany({ name: 'John' });
        console.log("Successfully Deleted");
    } catch (err) {
        console.log(err);
    }
    mongoose.connection.close();
}

// deletePerson();