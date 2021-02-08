
inputFunction = () => {
    document.getElementById('foodDetails').innerHTML = '';
    document.getElementById('food-container').innerHTML = '';
    const typeInput = document.getElementById("inputBox").value;
    if (typeInput === '') {
        alert('Please Enter your Food Name');
    }
    else {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${typeInput}`;
        fetch(url)
            .then(res => res.json())
            .then(data => mealFunction(data.meals));
    }
}

mealFunction = array => {
    if (array == null) {
        alert('Your Searched food is inavailable.');
    }
    else {
        array.forEach(item => {
            const foodMainDiv = document.getElementById('food-container');
            foodMainDiv.className = 'food-block'
            const foodDiv = document.createElement('div');
            const foodInfo = ` 
                                <span onclick="displayFoodDetails('${item.idMeal}')">
                                <div class="card">
                                <img class="card-img-top" style="width:100%" src="${item.strMealThumb}" alt=""> 
                                <h3>${item.strMeal}</h3>
                                </div>
                                </span>
                                `
            foodDiv.innerHTML = foodInfo;
            foodMainDiv.appendChild(foodDiv);
            document.getElementById('inputBox').value = '';
        });
    }
}

displayFoodDetails = name => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${name}`
    fetch(url)
        .then(res => res.json())
        .then(data => renderFoodInfo(data.meals[0]))
}
const renderFoodInfo = food => {
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
                    <p>${food.strMeasure7} ${food.strIngredient7}</p>          
                    <p>${food.strMeasure8} ${food.strIngredient8}</p>          
                    <p>${food.strMeasure9} ${food.strIngredient9}</p>          
                    <p>${food.strMeasure10} ${food.strIngredient10}</p>          
                    `;
}



