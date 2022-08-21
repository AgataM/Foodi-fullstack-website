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
        //disable adding other categories than those specified:
        enum: ['Rice', 'Oats', 'Rice Noodles', 'Bananas', 'Pancakes', 'Fish', 'Fruit', 'Breakfast', 'Lunch', 'Dinner'],
        required: "This is required"
    },
    image:{
        type: String,
        required: "This is required"
    }
    
})

recipeSchema.index({name: 'text', description: 'text'})

//WildCard Indexing
//recipeSchema.index({"$**" : 'text'})


module.exports = mongoose.model('Recipe', recipeSchema)
