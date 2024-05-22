const doc = document;
const type = doc.querySelector("form input[id='type']");
const title = doc.querySelector("form input[id='title']");
const imageLink = doc.querySelector("form input[id='imageLink']");
const description = doc.querySelector("form textarea[id='description']");
const price = doc.querySelector("form input[id='price']");
const rating = doc.querySelector("form input[id='rating']");
const closeBtn = doc.querySelector(".close-btn");
const submitBtn = doc.querySelector(".submit-btn");
const foodCardLists = doc.querySelector(".food-recipe");

function CardItem(data) {
  const { type, title, description, image, price, rating } = data;
  return `<section class="card-item">
              <img class="image" src="${image}" width="100%" alt="img">
              <article class="content">
                <p class="title">${type}</p>
                <p>${title}</p>
                <p class="description">${description}</p>
                <article class="details">
                    <p class="price">Price - ${price}</p>
                    <p class="rating">Rating - ${rating}</p>
                </article>
              </article>
          </section>`;
        }

submitBtn.addEventListener("click", function () {
  const data = {
    type: type.value,
    title: title.value,
    image: imageLink.value,
    description: description.value,
    price: price.value,
    rating: rating.value,
  };

  if (JSON.parse(localStorage.getItem("array"))) {
    localStorage.setItem(
      "array",
      JSON.stringify([...JSON.parse(localStorage.getItem("array")), data])
    );
  } else {
    localStorage.setItem("array", JSON.stringify([data]));
  }

  render(foodCardLists);
});

function render(array) {
  array.innerHTML = JSON.parse(localStorage.getItem("array"))
    .map(CardItem)
    .join("");
}

render(foodCardLists);
