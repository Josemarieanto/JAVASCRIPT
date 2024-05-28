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

let editIndex = -1; // Variable to track the index of the card being edited

function deleteCard(index) {
  const cardList = JSON.parse(localStorage.getItem("array"));
  const filteredCardList = cardList.filter((_, i) => i !== index);
  localStorage.setItem("array", JSON.stringify(filteredCardList));
  render(foodCardLists);
}

window.deleteCard = deleteCard;

function editCard(index) {
  const cardList = JSON.parse(localStorage.getItem("array"));
  const card = cardList[index];

  // Populate the form with card data
  type.value = card.type;
  title.value = card.title;
  imageLink.value = card.image;
  description.value = card.description;
  price.value = card.price;
  rating.value = card.rating;

  editIndex = index; // Set the index of the card being edited
}

window.editCard = editCard;

function CardItem(data, index) {
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
              <section class='btns'>
                <button type="button" class="edit-btn" data-bs-toggle="modal" data-bs-target="#exampleModal"
                data-bs-whatever="@mdo" onclick='editCard(${index})'>Edit</button>
                <button class="delete-btn" onclick='deleteCard(${index})'>Delete</button>
              </section>
          </section>`;
}

function submit() {
  const data = {
    id: Date.now(),
    type: type.value,
    title: title.value,
    description: description.value,
    image: imageLink.value,
    price: price.value,
    rating: rating.value
  };

  const cardArray = JSON.parse(localStorage.getItem("array")) || [];

  if (editIndex > -1) {
    // Update existing card
    cardArray[editIndex] = data;
    editIndex = -1; // Reset the edit index
  } else {
    // Add new card
    cardArray.push(data);
  }

  localStorage.setItem("array", JSON.stringify(cardArray));

  // Clear form inputs
  type.value = '';
  title.value = '';
  description.value = '';
  imageLink.value = '';
  price.value = '';
  rating.value = '';

  render(foodCardLists);
}

submitBtn.addEventListener("click", submit);

function render(container) {
  const array = JSON.parse(localStorage.getItem("array")) || [];
  container.innerHTML = array.map((item, index) => CardItem(item, index)).join("");
}

render(foodCardLists);
