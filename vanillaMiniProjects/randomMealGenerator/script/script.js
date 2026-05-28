const btn = document.getElementById("generate");
const mealContainer = document.getElementById("meal");

btn.addEventListener("click", getMeal);

function getMeal() {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
        .then(res => res.json())
        .then(data => {
            const meal = data.meals[0];

            const ingredients = [];
            for (let i = 1; i <= 20; i++) {
                const ingredient = meal[`strIngredient${i}`];
                const measure = meal[`strMeasure${i}`];
                if (ingredient) {
                    ingredients.push(`${ingredient} - ${measure}`);
                }
            }

            mealContainer.innerHTML = `
                <div class="col-12 d-flex justify-content-center">
                    <div class="card shadow-sm" style="max-width: 450px;">
                    <img src="${meal.strMealThumb}" class="card-img-top" alt="${meal.strMeal}">
                    <div class="card-body">
                        <h2 class="card-title h4">${meal.strMeal}</h2>

                        <p><strong>Category:</strong> ${meal.strCategory}</p>
                        <p><strong>Area:</strong> ${meal.strArea}</p>

                        <h4 class="h5">Ingredients</h4>
                        <ul class="list-group mb-3">
                        ${ingredients.map(i => `<li class="list-group-item">${i}</li>`).join("")}
                        </ul>

                        <h4 class="h5">Instructions</h4>
                        <p>${meal.strInstructions}</p>
                    </div>
                    </div>
                </div>
                `;

        });
}
