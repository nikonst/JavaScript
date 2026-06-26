const btn = document.getElementById("generate");
const clearBtn = document.getElementById("clear");
const mealContainer = document.getElementById("meal");

// Hide Clear button initially
clearBtn.style.display = "none";

btn.addEventListener("click", getMeal);
clearBtn.addEventListener("click", clearMeal);

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

                    <div class="accordion" id="mealAccordion">

                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingIngredients">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseIngredients" aria-expanded="true">
                                Ingredients
                            </button>
                            </h2>
                            <div id="collapseIngredients" class="accordion-collapse collapse show">
                            <div class="accordion-body">
                                <ul class="list-group">
                                ${ingredients.map(i => `<li class="list-group-item">${i}</li>`).join("")}
                                </ul>
                            </div>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingInstructions">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseInstructions">
                                Instructions
                            </button>
                            </h2>
                            <div id="collapseInstructions" class="accordion-collapse collapse">
                            <div class="accordion-body">
                                <p>${meal.strInstructions}</p>
                            </div>
                            </div>
                        </div>

                    </div>
                </div>
                </div>
            </div>
            `;

            // Show Clear button when meal appears
            clearBtn.style.display = "inline-block";
        });
}

function clearMeal() {
    mealContainer.innerHTML = "";
    clearBtn.style.display = "none"; // Hide Clear button again
}
