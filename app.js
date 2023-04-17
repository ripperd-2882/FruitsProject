const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB");

const fruitSchema=new mongoose.Schema({
    name:String,
    rating:Number,
    review:String
});

const Fruit=mongoose.model("Fruit",fruitSchema);

const fruit =new Fruit({
    name:"Apple",
    rating:7,
    review:"Good"
});

// fruit.save();


const personSchema=new mongoose.Schema({
    name:String,
    age:Number
});

const Person=mongoose.model("Person",personSchema);

const person =new Person({
    name:"John",
    age:37
});

person.save();