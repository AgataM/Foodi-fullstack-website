require('../models/database')
const Category = require('../models/Category')
const Recipe = require('../models/Recipe')


/**
 * GET /
 * Homepage
 */
exports.homepage = async(req, res) => {

    try {
        const limitNumber = 5
        const categories = await Category.find({}).limit(limitNumber)
        const latest = await Recipe.find({}).sort({_id: -1}).limit(limitNumber)
        const rice = await Recipe.find({'category': 'Rice'}).limit(limitNumber)
        const oats = await Recipe.find({'category': 'Oats'}).limit(limitNumber)
        const riceNoodles = await Recipe.find({'category': 'Rice Noodles'}).limit(limitNumber)
        const bananas = await Recipe.find({'category': 'Bananas'}).limit(limitNumber)
        const pancakes = await Recipe.find({'category': 'Pancakes'}).limit(limitNumber)
       
        const food = {latest, rice, oats, riceNoodles, bananas, pancakes}
        res.render('index', { title: 'Recipe Website', categories, food})
    } catch (error) {
        res.status(500).send({message: error.messager || "Error Occured"})
    }
    
}


/**
 * GET /
 * Categories
 */
 exports.exploreCategories = async(req, res) => {

    try {
        const limitNumber = 5
        const categories = await Category.find({}).limit(limitNumber)
        res.render('categories', { title: 'Recipe Categories', categories})
    } catch (error) {
        res.status(500).send({message: error.messager || "Error Occured"})
    }
    
}






//ADDING EXAMPLES TO DB/ Dummy data
/*async function insertDummyCategoryData(){
    try {
        await Category.insertMany([
            {
                "name": "Rice",
                "image": "rice-category1.jpg"
            },
            {
                "name": "Oats",
                "image": "oats-category1.jpg"
            },
            {
                "name": "Rice Noodles",
                "image": "rice-noodles-category1.jpg"
            },
            {
                "name": "Bananas",
                "image": "banana-category1a.jpg"
            },
            {
                "name": "Pancakes",
                "image": "pancakes-category1.jpg"
            }
        ])
    } catch (error) {
        console.log('err', + error)
    }
}

insertDummyCategoryData() */

/*async function insertDummyRecipeData(){
    try {
        await Recipe.insertMany([
            {
                "name": "Egg Rice",
                "description": "Cook rice and fry two eggs. Later fry some spring onions until browned and then add the rice to the pan. Next add dark and light soy sauce. Put everything on a plate with the egg on top of the dish.",
                "ingredients": ['eggs', 'rice', 'spring onions', 'dark and light soy sauce',],
                "category": "Rice",
                "image": "rice-category1.jpg"
            },
            {
                "name": "Spicy Rice Noodles",
                "description": "Cook rice noodles. After cooking put them in a bowl. Add a lot of salt and chilli flakes.",
                "ingredients": ["rice noodles", "chilli flakes", "salt"],
                "category": "Rice Noodles",
                "image": "rice-noodles-category1.jpg"
            },
            {
                "name": "Sweet Rice Cakes",
                "description": "Slice a banana and put it on top of two rice cakes. Pour half a teaspoon of agave enctar on each of the rice cakes. Top with pomegranate.",
                "ingredients": ["2 rice cakes", "1 banana", "agave nectar", "pomegranate"],
                "category": "Bananas",
                "image": "banana-category2.jpg"
            },
            
        ])
    } catch (error) {
        console.log('err', + error)
    }
}

insertDummyRecipeData()*/

