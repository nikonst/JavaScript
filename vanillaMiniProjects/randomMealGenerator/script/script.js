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

        <!-- Bootstrap Accordion -->
        <div class="accordion" id="mealAccordion">

          <!-- Ingredients -->
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingIngredients">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseIngredients" aria-expanded="true" aria-controls="collapseIngredients">
                Ingredients
              </button>
            </h2>
            <div id="collapseIngredients" class="accordion-collapse collapse show" aria-labelledby="headingIngredients" data-bs-parent="#mealAccordion">
              <div class="accordion-body">
                <ul class="list-group">
                  ${ingredients.map(i => `<li class="list-group-item">${i}</li>`).join("")}
                </ul>
              </div>
            </div>
          </div>

          <!-- Instructions -->
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingInstructions">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseInstructions" aria-expanded="false" aria-controls="collapseInstructions">
                Instructions
              </button>
            </h2>
            <div id="collapseInstructions" class="accordion-collapse collapse" aria-labelledby="headingInstructions" data-bs-parent="#mealAccordion">
              <div class="accordion-body">
                <p>${meal.strInstructions}</p>
              </div>
            </div>
          </div>

        </div>
        <!-- End Accordion -->

      </div>
    </div>
  </div>
`;


        });
}
