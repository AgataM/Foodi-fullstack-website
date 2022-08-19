const mongoose = require('mongoose')

//SCHEMA
const recipeSchema = new mongoose.Schema({
    name:{
        type: String,
        required: "This is required"
    },
    description:{
        type: String,
        required: "This is required"
    },
    /*email:{
        type: String,
        required: "This is required"
    },*/
    ingredients:{
        type: Array,
        required: "This is required"
    },
    category:{
        type: String,
        enum: ['Rice', 'Oats', 'Rice Noodles', 'Bananas', 'Pancakes'],
        required: "This is required"
    },
    image:{
        type: String,
        required: "This is required"
    }
    
})

module.exports = mongoose.model('Recipe', recipeSchema)
