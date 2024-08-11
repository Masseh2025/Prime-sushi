// const foodContainer = document.querySelector(".food-container");
const saladCategorie = document.querySelector(".menu__categorie--salad");
const sushiCategorie = document.querySelector(".menu__categorie--sushi");
const drinkCategorie = document.querySelector(".menu__categorie--drink");
const allCategories = document.querySelector(".menu__categorie--all");
const foods = document.querySelectorAll(".food");

const salad = "food__salad";
const sushi = "food__sushi";
const drink = "food__drink";

saladCategorie.addEventListener("click", function () {
  for (const food of foods) {
    if (!food.classList.contains(`${salad}`)) {
      food.classList.add("invisble");
    }
    if (food.classList.contains(`${salad}`)) {
      food.classList.remove("invisble");
    }
  }
});

sushiCategorie.addEventListener("click", function () {
  for (const food of foods) {
    if (!food.classList.contains(`${sushi}`)) {
      food.classList.add("invisble");
    }
    if (food.classList.contains(`${sushi}`)) {
      food.classList.remove("invisble");
    }
  }
});

drinkCategorie.addEventListener("click", function () {
  for (const food of foods) {
    if (!food.classList.contains(`${drink}`)) {
      food.classList.add("invisble");
    }
    if (food.classList.contains(`${drink}`)) {
      food.classList.remove("invisble");
    }
  }
});

allCategories.addEventListener("click", function () {
  for (const food of foods) {
    food.classList.remove("invisble");
  }
});
