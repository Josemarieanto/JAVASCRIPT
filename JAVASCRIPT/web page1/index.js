import breakfastRecipes from "./mockData/breakfast.js";

const doc = document;

function CardItem(data) {
    const { title, description, image,price,rating } = data;
    return `<section class="card-item">
              <img class="image" src="${image}" width="100%" alt="img">
              <article class="content">
                  <p class="title">Cooking, Recipe</p>
                  <p>${title}</p>
                  <p class="description">${description}</p>
                  <article class="details">
                          <p class="price">${price}</p>
                          <p class="rating">${rating}</p>
                  </article>
              </article>
          </section>`;
        }

const breakfastlists = doc.querySelector(".breakfast");

console.log(breakfastlists);

breakfastlists.innerHTML = breakfastRecipes.map(CardItem).join("");