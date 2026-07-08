// 1. Raw Mock Data
const menu = [
    {
        id: 1,
        title: "Buttermilk Pancakes",
        category: "breakfast",
        price: 15.99,
        desc: `Fluffy pancakes layered with fresh organic strawberries, wild berries, and a generous drizzle of warm maple syrup.`,
    },
    {
        id: 2,
        title: "Diner Double Burger",
        category: "lunch",
        price: 13.99,
        desc: `Two juicy smash patties, melted cheddar cheese, crisp pickles, and our signature house sauce on a toasted brioche bun.`,
    },
    {
        id: 3,
        title: "Avocado Toast",
        category: "vegan",
        price: 11.49,
        desc: `Toasted artisanal sourdough topped with crushed avocado, cherry tomatoes, radish slices, and a dash of chili flakes.`,
    },
    {
        id: 4,
        title: "Country Breakfast",
        category: "breakfast",
        price: 20.99,
        desc: `Two farm-fresh eggs cooked to order, crispy smoked bacon strips, golden hashbrowns, and buttered toast.`,
    },
    {
        id: 5,
        title: "Classic Caesar Salad",
        category: "lunch",
        price: 12.99,
        desc: `Crisp romaine lettuce tossed in creamy Caesar dressing, garlic-herb croutons, and freshly shaved parmesan cheese.`,
    },
    {
        id: 6,
        title: "Acai Berry Bowl",
        category: "vegan",
        price: 9.99,
        desc: `Thick blended organic acai topped with gluten-free granola, sliced banana, chia seeds, and organic honey drizzle.`,
    }
];

// 2. DOM Elements
const menuGrid = document.getElementById("menu-grid");
const btnContainer = document.getElementById("btn-container");

// 3. Initialize App
window.addEventListener("DOMContentLoaded", () => {
    displayMenuItems(menu);
    displayFilterButtons();
});

// 4. Render Menu Items using Bootstrap Cards & Row Grid
function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map((item) => {
        return `<div class="col-12 col-md-6">
            <article class="card h-100 shadow-sm border p-3">
              <div class="d-flex flex-column flex-sm-row gap-3">
                <div class="flex-grow-1">
                  <div class="item-header d-flex justify-content-between pb-2 mb-2">
                    <h5 class="card-title text-capitalize mb-0 fw-semibold">${item.title}</h5>
                    <span class="text-warning fw-bold">$${item.price.toFixed(2)}</span>
                  </div>
                  <p class="card-text text-muted small">${item.desc}</p>
                </div>
              </div>
            </article>
          </div>`;
    });

    menuGrid.innerHTML = displayMenu.join("");
}

// 5. Generate Dynamic Bootstrap Buttons & Filter Logics
function displayFilterButtons() {
    const categories = ["all", ...new Set(menu.map(item => item.category))];

    const categoryBtns = categories.map((category) => {
        // Use Bootstrap native button utility classes
        const btnClass = category === 'all' ? 'btn-warning text-white' : 'btn-outline-warning';
        return `<button type="button" class="btn ${btnClass} text-capitalize px-3" data-id="${category}">
            ${category}
          </button>`;
    }).join("");

    btnContainer.innerHTML = categoryBtns;
    const filterBtns = btnContainer.querySelectorAll(".btn");

    filterBtns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            const category = e.currentTarget.dataset.id;

            // Toggle active visual states with Bootstrap button utilities
            filterBtns.forEach(b => {
                b.classList.remove("btn-warning", "text-white");
                b.classList.add("btn-outline-warning");
            });
            e.currentTarget.classList.remove("btn-outline-warning");
            e.currentTarget.classList.add("btn-warning", "text-white");

            // Run filtering logic
            if (category === "all") {
                displayMenuItems(menu);
            } else {
                const menuCategory = menu.filter((menuItem) => {
                    return menuItem.category === category;
                });
                displayMenuItems(menuCategory);
            }
        });
    });
}
