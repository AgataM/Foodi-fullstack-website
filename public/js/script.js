/*let addIngredientsBtn = document.getElementById('addIngredientsBtn')
let ingredientList = document.querySelector('.ingredientList')
let ingredientDiv = document.querySelectorAll('.ingredientDiv')[0]
let removeIngredientsBtn = document.getElementById('removeIngredientsBtn')

//Add an ingredient to the recipe submission
addIngredientsBtn.addEventListener('click', function(){
    let newIngredients  = ingredientDiv.cloneNode(true)
    let input = newIngredients.getElementsByTagName('input')[0]
    input.value = ''
    ingredientList.appendChild(newIngredients)
})*/

//Remove an ingredient from the recipe submission
//removeIngredientsBtn.addEventListener("click", removeLastElem)
    //let removeIngredient = document.querySelector('.ingredientDiv');
    //removeIngredient.parentNode.parentNode.removeChild(removeIngredient);

    //function removeLastElem(){
   // document.querySelector('.ingredientDiv').lastChild.remove()
    // works but removes the first element not the last one  
    //again removes the first element removeIngredient.removeChild(removeIngredient.lastElementChild)
//}

//removeIngredient.removeChild(removeIngredient.lastElementChild)
//removeIngredient.parentNode.removeChild.(removeIngredient); 
//SremoveIngredient.parentNode.parentNode.removeChild(removeIngredient.parentNode)

let input = document.getElementById('target')
let data = '<label>Next ingredient: </label> <input type="text" name="temp"/>'

function addNew() {
  var newContent = document.createElement('div');
  newContent.innerHTML = data;
  input.appendChild(newContent);
}

function removeLastElem() {
	input.lastChild.remove()
}