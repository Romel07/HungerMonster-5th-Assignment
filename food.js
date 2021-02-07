

fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s`)
    .then(res => res.json())
    .then(data => displayFoods(data.meals));



const displayFoods = foods => {
    const foodMainDiv = document.getElementById('food-container');
    foodMainDiv.className = 'food-block'

    foods.forEach(eachFood => {


        const foodDiv = document.createElement('div');  


        const foodInfo = ` <div class="card">
        <button onclick="displayFoodDetails('${eachFood.idMeal}')">
        <img class="card-img-top" style="width:100%" src="${eachFood.strMealThumb}" alt=""> 
        <h3>${eachFood.strMeal}</h3>
        </button>
        </div>`
        foodDiv.innerHTML = foodInfo;
        foodMainDiv.appendChild(foodDiv);
    });
}

const displayFoodDetails = name => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${name}`
    fetch(url)
        .then(res => res.json())
        .then(data => renderFoodInfo(data.meals[0]))
    // .then(data => console.log(data.meals[0]))

}
const renderFoodInfo = food => {
    console.log(food);
    const foodDetailsDiv = document.getElementById('foodDetails');
    foodDetailsDiv.innerHTML = `
                <img src="${food.strMealThumb}" alt="">  
                <h1>${food.strMeal}</h1> 
                <h3>Ingredients</h3>
                <p>${food.strMeasure1} ${food.strIngredient1}</p>
                <p>${food.strMeasure2} ${food.strIngredient2}</p>
                <p>${food.strMeasure3} ${food.strIngredient3}</p>
                <p>${food.strMeasure4} ${food.strIngredient4}</p>
                <p>${food.strMeasure5} ${food.strIngredient5}</p>
                <p>${food.strMeasure6} ${food.strIngredient6}</p>          
                `;
                
}


// let array = [];

// fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s`)
//     .then(res => res.json())
//     .then(data => listitems(data.meals[#{
//       for (let i = 0; i < array.length; i++) {
//           const element = array[i];
//       }
//         }]);
   
 


const listOfFood = document.getElementById('searchBar');
const searchBar = document.getElementById('searchBar');

searchBar.addEventListener('keyup', (e)=>{
    console.log(e.target.value);
});






