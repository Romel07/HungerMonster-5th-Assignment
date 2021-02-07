// const displayFoodList = foodList => {
// const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s'
// fetch(url)
//     .then(response => response.json())
//     .then(data => (
//         document.getElementById('food-container').innerText = `data.meals[${foodList}].strMeal`))
//     // .then(data => console.log((data.meals[0].strMeal),(data.meals[0].strMealThumb),(data.meals[0].strMeasure1),(data.meals[0].strIngredient1)))

//     // console.log()
// }
// displayFoodList();

fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s`)
    .then(res => res.json())
    .then(data => displayFoods(data.meals));

const displayFoods = foods => {
    const foodMainDiv = document.getElementById('food-container');
    foodMainDiv.className = 'food-block'

    foods.forEach(eachFood => {
        const foodDiv = document.createElement('div');
        const foodInfo = ` <div class="card"><img onclick="displayFoodDetails()" class="card-img-top" style="width:100%" src="${eachFood.strMealThumb}" alt=""> <h3>${eachFood.strMeal}</h3></div>`
        foodDiv.innerHTML = foodInfo;
        foodMainDiv.appendChild(foodDiv);

        // 2nd part 
        // foodDiv.className = 'showDetailsInfo';
        const displayFoodDetails = foodName => {
            fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s`)
                .then(res => res.json())
                .then(data => console.log(data.meals));

                // console.log(data.meals);

        }


        //2nd part end

    });

}

